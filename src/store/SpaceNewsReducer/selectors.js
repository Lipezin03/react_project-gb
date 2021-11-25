import { REQUEST_STATUS } from "../../utils/constans"

export const getSelectSpaceNews = ((state) => state.spaceNewsReducer.spaceNews)

export const getRequestSpaceNews = ((state) => state.spaceNewsReducer.request.status === REQUEST_STATUS.LOADING)

export const getRequestSpaceNewsError = ((state) => state.spaceNewsReducer.request.error)

