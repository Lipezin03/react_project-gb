export const FETCH_SPACE_NEWS = "SPACE_NEWS::FETCH_SPACE_NEWS";
export const fetchSpaceNews = () => ({
    type: FETCH_SPACE_NEWS
})


export const ADD_SPACE_NEWS = "SPACE_NEWS::ADD_SPACE_NEWS"
export const addSpaceNews = (spaceNews) => ({
    type: ADD_SPACE_NEWS,
    payload: spaceNews,
})


export const REQUEST_SPACE_NEWS_LOADING = "SPACE_NEWS::REQUEST_SPACE_NEWS_LOADING"
export const getRequestSpaceNewsLoading = () => ({
    type: REQUEST_SPACE_NEWS_LOADING,
})


export const REQUEST_SPACE_NEWS_FAILURE = "SPACE_NEWS::REQUEST_SPACE_NEWS_FAILURE"
export const getRequestSpaceNewsFailure = (err) => ({
    type: REQUEST_SPACE_NEWS_FAILURE,
    payload: err,
})