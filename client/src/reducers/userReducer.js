import _ from 'lodash';
import {
    SHOW_ME,
    UPDATE_ME,
    DELETE_ME
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SHOW_ME:
            return { state: action.payload };
        case UPDATE_ME:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_ME:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};