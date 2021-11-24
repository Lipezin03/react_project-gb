import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./profileReducer/reducer";
import { chatReducer } from "./ChatsReducer/reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
    key: "Chats-React",
    storage,
    blacklist: ["profileReducer"],
}

const rootReducer = combineReducers({
    profileReducer,
    chatReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, compose(
    applyMiddleware(
        thunk,
    ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export const persistor = persistStore(store);