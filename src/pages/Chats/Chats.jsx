import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Message } from "../../components/Message/Message.jsx"
import { ChatList } from "../../components/ChatList/ChatList.jsx"
import { AddChatForm } from '../../components/AddChatForm/AddChatForm.jsx';
import { AUTHORS } from '../../utils/constans';
import "./Chats.scss"

const initialChats = {
    sport: [
        {
            id: 1,
            autor: AUTHORS.User,
            message: "Привет, чат про спорт!",
        },
    ],

    games: [
        {
            id: 1,
            autor: AUTHORS.User,
            message: "Новинки игр!",
        },
    ],

    traval: [],
}



export const Chats = () => {

    const { name: chatUrlName } = useParams()

    const [messageList, setMessageList] = useState(initialChats);

    const [chatListEl, setChatListEl] = useState(Object.keys(messageList))


    const delChats = useCallback((chat) => {
        const newObjectChats = messageList;
        delete newObjectChats[chat]
        setMessageList(newObjectChats)
        setChatListEl(prevChatsName => prevChatsName.filter(el => el !== chat))
    }, [messageList])

    const addChats = useCallback((newChat) => {
        setMessageList(prevChat => ({ ...prevChat, ...newChat }))
        setChatListEl(prevNameChat => [...prevNameChat, ...Object.keys(newChat)])
    }, [])


    const handleSendMessage = useCallback((newMessage) => {
        console.log(chatUrlName)
        setMessageList(prevMessage => ({
            ...prevMessage, [chatUrlName]: [...prevMessage[chatUrlName], newMessage]
        }))
    }, [chatUrlName]);


    useEffect(() => {

        if (messageList[chatUrlName]?.length > 0 &&
            messageList[chatUrlName]?.[messageList[chatUrlName].length - 1.].autor !== AUTHORS.Bot) {

            setTimeout(() => {

                handleSendMessage({
                    autor: AUTHORS.Bot,
                    message: "Сообщение принято, мы с вами свяжимся!",
                    id: Date.now()
                })
            }, 1500)

        }
    }, [messageList, handleSendMessage]);



    return (

        <div className="chats">
            <div className="chats__content container">

                <div className="chats__block-add-chats">
                    <AddChatForm chatsName={chatListEl} onAddChats={addChats} />
                    <ChatList ondelChats={delChats} chatsName={chatListEl} />
                </div>

                <Message
                    messageList={messageList[chatUrlName]}
                    onSendMessage={handleSendMessage} />

            </div>

        </div>


    );
}

