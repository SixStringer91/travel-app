import { ICountry } from '../../Interfaces';
import { ReturnedAction } from '../action-creators/action-creators';
import { ACTIONS } from '../constants';

const initialState = {
  loading: true,
  error: null as any,
  data: {
    currencyCode: '',
    details: {
      info: {},
      views: [
        {
          imgURL: '',
          viewName: '',
          about: ''
        }
      ],
      videoURL: '',
      mapCoords: {
        center: {},
        capital: {}
      }
    },
    rating: 0
  } as ICountry
};

const reducer = (
  state = initialState, action: ReturnedAction
):typeof initialState => {
  const stateCopy = { ...state };
  switch (action.type) {
    case ACTIONS.FETCH_DETAILS_SUCCESS:
      stateCopy.data = { ...stateCopy.data, details: action.payload.details };
      stateCopy.loading = false;
      break;

    case ACTIONS.FETCH_DELETE_DETAILS:
      stateCopy.loading = true;
      break;

    case ACTIONS.SET_COUNTRY:
    default:
  }

  return stateCopy;
};

export default reducer;
