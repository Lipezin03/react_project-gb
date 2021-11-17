import React from 'react';
import "./FieldMessage.scss"


export const FieldMessage = ({ messageList }) => {


    return (

        <div className="message-field">

            {messageList?.length ?

                messageList?.map((message) => {
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