import { REQUEST_STATUS } from "../../utils/constans"
import { ADD_SPACE_NEWS } from "./action"
import { REQUEST_SPACE_NEWS_LOADING } from "./action"
import { REQUEST_SPACE_NEWS_FAILURE } from "./action"

const initialState = {
    spaceNews: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        error: "",
    }
}

export const spaceNewsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SPACE_NEWS:
            return {
                ...state,
                spaceNews: payload,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.SUCCESS,
                    error: "",
                }
            }
        case REQUEST_SPACE_NEWS_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.LOADING
                }
            }
        case REQUEST_SPACE_NEWS_FAILURE:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.FAILURE,
                    error: payload,
                }
            }

        default: return state
    }
}