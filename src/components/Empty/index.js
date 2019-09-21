import React from 'react';

import { Wrapper, Container, Info, Title } from './styles';

export default function Empty({ children }) {
  return (
    <Wrapper>
      <Container>
        <Info>
          <Title>{children}</Title>
        </Info>
      </Container>
    </Wrapper>
  );
}
