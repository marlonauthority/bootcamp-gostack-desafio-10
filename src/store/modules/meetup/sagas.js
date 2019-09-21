import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import {
  loadSubscriptionsRequest,
  loadSubscriptionsSuccess,
  meetupFailure,
  cancelSubscriptionSuccess,
} from './actions';

export function* loadSubscription() {
  try {
    const response = yield call(api.get, '/subscriptions');

    yield put(loadSubscriptionsSuccess(response.data));
  } catch (error) {
    yield put(meetupFailure());
  }
}
export function* cancelSubscription({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `/meetups/${id}/cancelsubscription`);
    yield put(loadSubscriptionsRequest());
    yield put(cancelSubscriptionSuccess());
  } catch (err) {
    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/LOAD_SUBSCRIPTIONS_REQUEST', loadSubscription),
  takeLatest('@meetup/CANCEL_SUBSCRIPTION_REQUEST', cancelSubscription),
]);
