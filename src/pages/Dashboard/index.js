import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

export default function Dashboard() {
  return (
    <Background>
      <Header />
    </Background>
  );
}
Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
