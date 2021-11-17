import React from 'react';
import "./Message.scss"
import { FieldMessage } from "../FieldMessage/FieldMessage"
import { FormMessage } from "../FormMessage/FormMessage"

export const Message = ({ chatsName, messageList, onSendMessage }) => {


    return (
        <div className="message">
            <div className="message__content">
                <h1 className="message__title">Пробуем React в работе</h1>
                <h3 className="message__text">Пишем сообщение и получаем ответ от бота.</h3>
                <FieldMessage messageList={messageList} />
                <FormMessage chatsName={chatsName} onSendMessage={onSendMessage} />
            </div>
        </div>
    )
}