import * as actionTypes from './types';

export const createContact = (contact) => {
    return {
        type: actionTypes.CREATE_CONTACT,
        payload: contact
    };
}

export const deleteContact = (id) => {
    return {
        type: actionTypes.DELETE_CONTACT,
        payload: id
    };
}