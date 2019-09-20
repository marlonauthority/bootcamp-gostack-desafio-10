import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';
import logo from '~/assets/m.png';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
