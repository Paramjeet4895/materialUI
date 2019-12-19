import { SIGN_IN, SIGN_OUT ,SIGN_UP} from '../actions/types';

const INTIAL_STATE = {
  user: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, user: action.payload };
    case SIGN_UP:
      return { ...state,  user: action.payload };
    case SIGN_OUT:
      return { ...state,  user: null };
    default:
      return state;
  }
};
