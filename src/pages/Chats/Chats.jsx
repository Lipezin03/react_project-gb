import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from "../../components/Message/Message.jsx"
import { ChatList } from "../../components/ChatList/ChatList.jsx"
import { AddChatForm } from '../../components/AddChatForm/AddChatForm.jsx';
import { AUTHORS } from '../../utils/constans';
import { addNewMessage } from '../../store/ChatsReducer/action.js';
import { getSelectorchatsMessage, getSelectorChatList } from '../../store/ChatsReducer/selectors.js';
import "./Chats.scss"



export const Chats = () => {

    const { name: chatUrlName } = useParams()
    const navigate = useNavigate()

    const messageList = useSelector(getSelectorchatsMessage)

    const chatsName = useSelector(getSelectorChatList)

    const dispatch = useDispatch()

    useEffect(() => {
        if (chatUrlName) {
            if (!chatsName.includes(chatUrlName)) {
                navigate("/chats")
            }
        }
    })


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

