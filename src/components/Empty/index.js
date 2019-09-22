import React from 'react';
import PropTypes from 'prop-types';

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
Empty.propTypes = {
  children: PropTypes.string.isRequired,
};
