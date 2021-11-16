import { ICountry } from '../../Interfaces';
import { ReturnedAction } from '../action-creators/action-creators';
import { ACTIONS } from '../constants';

const initialState = {
  loading: true,
  error: null as any,
  countries: [
  ] as ICountry[]
};

const reducer = (state = initialState, action: ReturnedAction):typeof initialState => {
  const stateCopy = { ...state };
  switch (action.type) {
    case ACTIONS.FETCH_STATE_BEGIN:
      return {
        ...stateCopy,
        loading: true,
        error: null
      };
    case ACTIONS.FETCH_STATE_SUCCESS:
      return {
        ...stateCopy,
        loading: false,
        countries: [...action.payload]
      };
    case ACTIONS.FETCH_STATE_FAILURE:
      return {
        ...stateCopy,
        loading: false,
        error: action.payload,
        countries: []
      };

    case ACTIONS.SET_COUNTRY:
      return stateCopy;
    default:
      return stateCopy;
  }
};

export default reducer;
