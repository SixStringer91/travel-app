import { IWeatherStore } from '../../Interfaces';
import { ReturnedAction } from '../action-creators/action-creators';
import { ACTIONS } from '../constants';

interface IWeatherReducer {
	params: IWeatherStore | null
}

const initialStateState:IWeatherReducer = {
  params: null
};

const reducer = (
  state = initialStateState,
  action: ReturnedAction
) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ACTIONS.SET_WEATHER_PARAMS:
      newState.params = action.payload;
      break;
    default:
  }
  return newState;
};

export default reducer;
