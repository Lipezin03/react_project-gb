import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Message } from "../../components/Message/Message.jsx"
import { ChatList } from "../../components/ChatList/ChatList.jsx"
import { AddChatForm } from '../../components/AddChatForm/AddChatForm.jsx';
import { getSelectorChatList } from '../../store/ChatsReducer/selectors.js';
import "./Chats.scss"



export const Chats = () => {

    const { name: chatUrlName } = useParams()
    const navigate = useNavigate()

    const chatsName = useSelector(getSelectorChatList)

    useEffect(() => {
        if (chatUrlName) {
            if (!chatsName.includes(chatUrlName)) {
                navigate("/chats")
            }
        }
    })

    // const addMessage = useCallback(
    //     (newMessage) => {
    //         push(getChatMsgsListRefById(chatUrlName), newMessage);
    //     },
    //     [chatUrlName]
    // );

    return (

        <div className="chats">
            <div className="chats__content container">

                <div className="chats__block-add-chats">
                    <AddChatForm />
                    <ChatList />
                </div>

                <Message />
            </div>
        </div>
    );
}

