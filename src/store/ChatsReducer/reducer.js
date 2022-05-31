import { AUTHORS } from "../../utils/constans"
import { ADD_CHAT_LIST, DELETE_CHAT_LIST, ADD_NEW_CHAT, DELETE_CHAT, ADD_NEW_MESSAGE, DELETE_MESSAGE, HIDEN_BUTTON_DEL, VISIBLE_BUTTON_DEL, SET_CHATS } from "./action"


const initialChats = {
    chatsMessage: {
        // sport: [
        //     {
        //         id: 1,
        //         autor: AUTHORS.User,
        //         message: "Привет, чат про спорт!",
        //     },
        // ],

        // games: [
        //     {
        //         id: 1,
        //         autor: AUTHORS.User,
        //         message: "Новинки игр!",
        //     },
        // ],

        // traval: [],
    },

    // chatList: ["sport", "games", "traval"],
    chatList: [],

    showButtonDelMessage: null,
}


export const chatReducer = (state = initialChats, { type, payload }) => {
    switch (type) {
        case ADD_NEW_CHAT:
            return {
                ...state,
                chatsMessage: ({ ...state.chatsMessage, ...payload })
            }

        case ADD_CHAT_LIST:
            return {
                ...state,
                chatList: [...state.chatList, ...payload]
            }

        case DELETE_CHAT:
            const newObjectChats = state.chatsMessage;
            delete newObjectChats[payload]
            return {
                ...state,
                chatsMessage: newObjectChats
            }

        case DELETE_CHAT_LIST:
            return {
                ...state,
                chatList: state.chatList.filter(el => el !== payload)
            }

        case ADD_NEW_MESSAGE:
            return {
                ...state,
                chatsMessage: ({ ...state.chatsMessage, [payload.chatName]: [...state.chatsMessage[payload.chatName], payload.newMessage] })
            }

        case DELETE_MESSAGE:
            return {
                ...state,
                chatsMessage: ({ ...state.chatsMessage, [payload.chatName]: [...state.chatsMessage[payload.chatName].filter(el => el.id !== payload.idMessage)] })
            }

        case HIDEN_BUTTON_DEL:
            return {
                ...state,
                showButtonDelMessage: null,

            }
        case VISIBLE_BUTTON_DEL:
            return {
                ...state,
                showButtonDelMessage: payload,
            }
        case SET_CHATS:
            return {
                ...state,
                chatList: payload
            }

        default:
            return state
    }
}