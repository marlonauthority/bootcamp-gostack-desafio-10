import React from 'react';
import { Text, SafeAreaView } from 'react-native';

// import { Container } from './styles';
import Background from '~/components/Background';
import Input from '~/components/Input';

export default function SignIn() {
  return (
    <Background>
      <SafeAreaView>
        <Input placeholder="Digite seu e-mail" />
      </SafeAreaView>
    </Background>
  );
}
