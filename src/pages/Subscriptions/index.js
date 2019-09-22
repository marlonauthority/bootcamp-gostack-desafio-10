import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
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
import Empty from '~/components/Empty';

function Subscriptions({ isFocused }) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.meetup.subscriptions);
  const loading = useSelector(state => state.meetup.loading);

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
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <List
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Subscription
                cancelSubscription={() => handleCancelSubscription(item.id)}
                data={item}
              />
            )}
            ListEmptyComponent={
              <Empty>Você não possui nenhuma inscrição nos meetups</Empty>
            }
          />
        )}
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
Subscriptions.propTypes = {
  tintColor: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};
