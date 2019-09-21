import produce from 'immer';

const INITIAL_STATE = {
  subscriptions: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_SUBSCRIPTIONS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/LOAD_SUBSCRIPTIONS_SUCCESS': {
        draft.loading = false;
        // draft.subscriptions = action.payload.data;
        break;
      }
      case '@meetup/MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
