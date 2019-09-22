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

  const dateNavigator = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );
  function handlePrevDay() {
    setDate(subDays(date, 1));
  }
  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  useEffect(() => {
    async function loadMeetups() {
      setLoading(true);
      const response = await api.get('/meetups', {
        params: { date },
      });
      setMeetups(response.data);
      setLoading(false);
    }
    loadMeetups();
  }, [date]);

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
  tintColor: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
