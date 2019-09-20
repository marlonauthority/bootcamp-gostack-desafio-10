import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

export default function Registrations() {
  return (
    <Background>
      <Header />
    </Background>
  );
}
Registrations.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
