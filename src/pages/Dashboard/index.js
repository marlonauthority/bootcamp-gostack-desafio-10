import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, List, DateNavigator, DateText } from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import Empty from '~/components/Empty';

export default function Dashboard({ navigation }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const dateNavigator = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const dateParsed = useMemo(() => format(date, 'yyyy-MM-dd'), [date]);

  async function loadMeetups() {
    // iniciamos o loading
    setLoading(true);
    try {
      // -> Chamada a api
      const response = await api.get('meetups', {
        params: {
          page,
          date: dateParsed,
        },
      });
      // -> Comparacao
      const data = page === 1 ? response.data : [...meetups, ...response.data];
      setMeetups(data);

      // agora termina o loading e o refreshing
      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      setLoading(false);
    }
  }

  function loadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
  }

  function refreshMeetups() {
    setRefreshing(true);
    setPage(1);
    setLoading(true);
    loadMeetups();
  }

  useEffect(() => {
    loadMeetups();
  }, [date, page]); //eslint-disable-line

  function handlePrevDay() {
    setDate(subDays(date, 1));
    setPage(1);
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
    setPage(1);
  }

  async function handleSubscription(id) {
    await api.post(`/meetups/${id}/subscription`);
    Alert.alert('Sucesso!', 'Você se inscreveu para o meetup!');
    navigation.navigate('Subscriptions');
  }

  return (
    <Background>
      <Container>
        <Header />

        <DateNavigator>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <DateText>{dateNavigator}</DateText>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </DateNavigator>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <List
              data={meetups}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Meetup
                  titleButton="Realizar inscrição"
                  onSubscription={() => handleSubscription(item.id)}
                  data={item}
                />
              )}
              ListEmptyComponent={<Empty>Não existem Meetups nesta data</Empty>}
              onRefresh={refreshMeetups}
              refreshing={refreshing}
              onEndReachedThreshold={0.1} // Carrega mais itens quando chegar em 20% d
              onEndReached={loadMore} // Função que carrega mais itens
            />
          </>
        )}
      </Container>
    </Background>
  );
}
Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
