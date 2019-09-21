export function loadSubscriptionsRequest() {
  return {
    type: '@meetup/LOAD_SUBSCRIPTIONS_REQUEST',
  };
}

export function loadSubscriptionsSuccess(data) {
  return {
    type: '@meetup/LOAD_SUBSCRIPTIONS_SUCCESS',
    payload: { data },
  };
}

export function meetupFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function cancelSubscriptionSuccess() {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_SUCCESS',
  };
}
