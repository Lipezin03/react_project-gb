import { TOGGLE_CHECKBOX, SIGN_IN, SIGN_OUT, CHANGE_NAME } from "./action"

const initialState = {
    checkbox: false,
    name: "",
    authed: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox
            }
        case SIGN_IN:
            return {
                ...state,
                authed: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                authed: false,
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
}