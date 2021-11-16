import { LangType } from '../../Interfaces';
import { ReturnedAction } from '../action-creators/action-creators';
import { ACTIONS } from '../constants';

const initialState: { lang: LangType } = {
  lang: (localStorage.getItem('lang') || 'ru') as LangType
};

const reducer = (state = initialState, action: ReturnedAction) => {
  const stateCopy = state;
  switch (action.type) {
    case ACTIONS.SET_LANGUAGE:
      localStorage.setItem('lang', action.payload as LangType);
      stateCopy.lang = action.payload as LangType;
      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
