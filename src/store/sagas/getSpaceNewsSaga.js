import { takeEvery, call, put } from "@redux-saga/core/effects"
import { FETCH_SPACE_NEWS } from "../SpaceNewsReducer/action"
import { addSpaceNews } from "../SpaceNewsReducer/action"
import { getRequestSpaceNewsLoading } from "../SpaceNewsReducer/action"
import { getRequestSpaceNewsFailure } from "../SpaceNewsReducer/action"


const getFetchSpaceNews = async () => {
    const respons = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
    if (!respons.ok) {
        throw new Error("Что-то пошло не так!")
    }
    return await respons.json()
}

function* workerFetchSpaceNews() {
    try {
        yield put(getRequestSpaceNewsLoading())
        const data = yield call(getFetchSpaceNews)
        yield put(addSpaceNews(data))
    } catch (err) {
        yield put(getRequestSpaceNewsFailure(err.message))
    }
}

export function* watcherSpaceNews() {
    yield takeEvery(FETCH_SPACE_NEWS, workerFetchSpaceNews)
}