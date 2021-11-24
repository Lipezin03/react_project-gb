import { AUTHORS } from "../../utils/constans"

export const ADD_CHAT_LIST = "CHATS::ADD_CHAT_LIST"
export const addChatList = (newName) => ({
    type: ADD_CHAT_LIST,
    payload: newName,
})



export const DELETE_CHAT_LIST = "CHATS::DELETE_CHAT_LIST"
export const deleteChatList = (name) => ({
    type: DELETE_CHAT_LIST,
    payload: name,
})



export const ADD_NEW_CHAT = "CHATS::ADD_NEW_CHAT"
export const addNewChat = (newName) => ({
    type: ADD_NEW_CHAT,
    payload: newName,
})


export const DELETE_CHAT = "CHATS::DELETE_CHAT"
export const deleteChat = (name) => ({
    type: DELETE_CHAT,
    payload: name,
})



export const ADD_NEW_MESSAGE = "CHATS::ADD_NEW_MESSAGE"
export const addNewMessage = (chatName, newMessage) => ({
    type: ADD_NEW_MESSAGE,
    payload: {
        chatName: chatName,
        newMessage: newMessage
    }
})


export const addMessageWithThunk = (chatUrlName, newMessage) => (dispatch) => {
    dispatch(addNewMessage(chatUrlName, newMessage));

    if (newMessage.autor !== AUTHORS.Bot) {
        setTimeout(() => {
            const botMessage = {
                autor: AUTHORS.Bot,
                message: "Сообщение принято, мы с вами свяжимся!",
                id: Date.now()
            }
            dispatch(addNewMessage(chatUrlName, botMessage))

        }, 1500)
    }
}