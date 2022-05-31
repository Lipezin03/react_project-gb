export const SIGN_IN = "PROFILE::SIGN_IN";
export const signIn = () => ({
    type: SIGN_IN,
});


export const SIGN_OUT = "PROFILE::SIGN_OUT";
export const signOut = () => ({
    type: SIGN_OUT,
});


export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
});