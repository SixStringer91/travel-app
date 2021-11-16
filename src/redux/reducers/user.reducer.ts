import { ReturnedAction } from '../action-creators/action-creators';
import { ACTIONS } from '../constants';

const initialStateState = {
  currentUser: {
    username: '',
    token: ''
  },
  serverMessage: '',
  isAuth: false
};

const reducer = (
  state = initialStateState,
  action: ReturnedAction
) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      };

    case ACTIONS.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false
      };

    default:
      return state;
  }
};

export default reducer;
