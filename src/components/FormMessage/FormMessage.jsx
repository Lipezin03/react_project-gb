import React, { useEffect, useRef } from 'react';
import "./FormMessage.scss"


export const FormMessage = ({ isMessageList, isSetMessageList }) => {

    useEffect(() => {
        textareaValue.current.focus()
    })

    const textareaValue = useRef()

    const addMessage = (event) => {
        event.preventDefault()
        const message = {
            autor: "User",
            text: textareaValue.current.value
        };

        isSetMessageList([...isMessageList, message])

        textareaValue.current.value = ""
    }


    return (
        <form onSubmit={addMessage} className="form-message">
            <textarea ref={textareaValue} className="form-message__textarea" name="message"></textarea>
            <button type="submit" className="form-message__button">Отправить сообщение</button>
        </form>

    )
}