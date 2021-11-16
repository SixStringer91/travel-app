import { ReturnedAction } from '../action-creators/action-creators';
import { ACTIONS } from '../constants';

const initialState = {
  text: '',
  disabled: false
};

const reducer = (state = initialState, action: ReturnedAction) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case ACTIONS.SET_SEARCH:
      stateCopy.text = action.payload as string;
      break;

    case ACTIONS.SET_SEARCH_IS_DISABLED:
      stateCopy.disabled = action.payload as boolean;
      break;
    default:
  }
  return stateCopy;
};

export default reducer;
