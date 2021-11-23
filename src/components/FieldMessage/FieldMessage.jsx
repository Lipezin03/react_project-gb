import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSelectorchatsMessage } from '../../store/ChatsReducer/selectors';
import "./FieldMessage.scss"


export const FieldMessage = () => {

    const messageList = useSelector(getSelectorchatsMessage)

    const { name: chatUrlName } = useParams()

    return (

        <div className="message-field">

            {messageList[chatUrlName]?.length ?

                messageList[chatUrlName]?.map((message) => {
                    return <div key={message.id}
                        className={message.autor === "Bot" ? 'message-field__item message-field__item_position-left' : 'message-field__item message-field__item_position-right'}>
                        <p className="message-field__text-autor">{message.autor}</p>
                        <p className="message-field__text">{message.message}</p>
                    </div>
                })

                :
                <div className="message-field__no-messages">Чат пуст. Выберите чат и напишите сообщение!</div>
            }

        </div>
    )
}