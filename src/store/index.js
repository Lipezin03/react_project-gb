import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profileReducer/reducer";
import { chatReducer } from "./ChatsReducer/reducer";

const rootReducer = combineReducers({
    profileReducer,
    chatReducer,
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())