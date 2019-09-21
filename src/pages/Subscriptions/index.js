import React, { useEffect, useState, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  loadSubscriptionsRequest,
  cancelSubscriptionRequest,
} from '~/store/modules/meetup/actions';

import { Container, List } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Subscription from '~/components/Subscription';

function Subscriptions({ isFocused }) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.meetup.subscriptions);

  useEffect(() => {
    if (isFocused) {
      dispatch(loadSubscriptionsRequest());
    }
  }, [dispatch, isFocused]);

  async function handleCancelSubscription(id) {
    dispatch(cancelSubscriptionRequest(id));
  }
  return (
    <Background>
      <Container>
        <Header />
        <List
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Subscription
              cancelSubscription={() => handleCancelSubscription(item.id)}
              data={item}
            />
          )}
        />
      </Container>
    </Background>
  );
}
Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
