import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, List, DateNavigator, DateText } from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
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
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Meetup data={item} />}
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
