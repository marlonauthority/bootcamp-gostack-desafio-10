import React from 'react';
import { Text, SafeAreaView } from 'react-native';

// import { Container } from './styles';
import Background from '~/components/Background';

export default function SignIn() {
  return (
    <Background>
      <SafeAreaView>
        <Text>Login</Text>
      </SafeAreaView>
    </Background>
  );
}
