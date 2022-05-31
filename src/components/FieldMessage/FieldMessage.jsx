import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSelectorChatsMessage } from '../../store/ChatsReducer/selectors';
import { MessageItem } from '../MessageItem/MessageItem';
import "./FieldMessage.scss"


export const FieldMessage = () => {

    const messageList = useSelector(getSelectorChatsMessage)

    const { name: chatUrlName } = useParams()

    return (
        <>
            <h3 className="message-name-chat">Чат: <span>{chatUrlName}</span></h3>
            <div className="message-field">

                {messageList[chatUrlName]?.length ?

                    messageList[chatUrlName]?.map((message) => {
                        return <MessageItem key={message.id} message={message} />
                    })

                    :
                    <div className="message-field__no-messages">Чат пуст. Выберите чат и напишите сообщение!</div>
                }

            </div >

        </>
    )
}