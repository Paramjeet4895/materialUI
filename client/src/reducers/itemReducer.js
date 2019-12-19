import {
    SHOW_ITEMS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SHOW_ITEMS:
          // return { ...state, ..._.mapKeys(action.payload, 'type') };
          return {  item : action.payload };
        default:
            return state;
    }
};
