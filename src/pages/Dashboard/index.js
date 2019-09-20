import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, List, DateNavigator, DateText } from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

export default function Dashboard({ navigation }) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups');
      setMeetups(response.data);
    }
    loadMeetups();
  }, []);

  async function handleSubscription(id) {
    await api.post(`/meetups/${id}/subscription`);
    navigation.navigate('Registrations');
  }

  return (
    <Background>
      <Container>
        <Header />

        <DateNavigator>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <DateText>31 de Maio</DateText>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </DateNavigator>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              titleButton="Realizar Inscricao"
              onSubscription={() => handleSubscription(item.id)}
              data={item}
            />
          )}
        />
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
