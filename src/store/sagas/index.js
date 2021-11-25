import { all } from "redux-saga/effects"
import { watcherSpaceNews } from "./getSpaceNewsSaga"

export function* rootWatcherSaga() {
    yield all([watcherSpaceNews()])
}