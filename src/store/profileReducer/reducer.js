import { SIGN_IN, SIGN_OUT, CHANGE_NAME } from "./action"

const initialState = {
    name: "",
    authed: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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