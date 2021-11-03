import React from 'react';
import "./FieldMessage.scss"


export const FieldMessage = ({ isMessageList }) => {


    return (

        <div className="message-field">

            {isMessageList.map((message, idx) =>
                <div key={idx.toString()} className={message.autor === "Bot" ? 'message-field__item message-field__item_position-left' : 'message-field__item message-field__item_position-right'}>
                    <p className="message-field__text-autor">{message.autor}</p>
                    <p className="message-field__text">{message.text}</p>
                </div>
            )}

        </div>
    )
}