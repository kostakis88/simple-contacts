import * as actionTypes from '../actions/types';

export default (state=[], action) => {
    switch(action.type) {
        case actionTypes.CREATE_CONTACT:
            return [...state, Object.assign({}, action.payload)];
        case actionTypes.DELETE_CONTACT:
            return state.filter((data, i) => i !== action.payload);
        default:
            return state;
    }
}