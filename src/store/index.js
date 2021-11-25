import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcherSaga } from "./sagas/index";
import { profileReducer } from "./profileReducer/reducer";
import { chatReducer } from "./ChatsReducer/reducer";
import { spaceNewsReducer } from "./SpaceNewsReducer/reducer";

const persistConfig = {
    key: "Chats-React",
    storage,
    blacklist: ["profileReducer", "spaceNewsReducer"],
}

const rootReducer = combineReducers({
    profileReducer,
    chatReducer,
    spaceNewsReducer,
})

const saga = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, compose(
    applyMiddleware(
        thunk,
        saga,
    ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(rootWatcherSaga)

export const persistor = persistStore(store);