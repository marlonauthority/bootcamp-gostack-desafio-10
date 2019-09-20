import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Banner,
  Info,
  Title,
  Schedule,
  ScheduleText,
  Place,
  PlaceText,
  Owner,
  OwnerText,
  TitleButton,
} from './styles';

export default function Meetup({ titleButton }) {
  return (
    <Wrapper>
      <Banner source={{ uri: 'https://picsum.photos/id/992/940/300' }} />
      <Container>
        <Info>
          <Title>Meetup de React Native</Title>
          <Schedule>
            <Icon name="event" size={14} color="#999" />
            <ScheduleText>24 de Junho, às 20h</ScheduleText>
          </Schedule>
          <Place>
            <Icon name="place" size={14} color="#999" />
            <PlaceText>
              Rua Guilherme Gembala, 260Rua Guilherme Gembala, 260
            </PlaceText>
          </Place>
          <Owner>
            <Icon name="person" size={14} color="#999" />
            <OwnerText>Organizador: Diego Fernandes</OwnerText>
          </Owner>
        </Info>
        <TitleButton onPress={() => {}}>{titleButton}</TitleButton>
      </Container>
    </Wrapper>
  );
}
