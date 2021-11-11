import React, { useEffect, useRef, useState } from 'react';
import { AUTHORS } from '../../utils/constans';
import "./FormMessage.scss";
import TextField from '@mui/material/TextField'


export const FormMessage = ({ onSendMessage }) => {

    useEffect(() => {
        setTimeout(() => {
            textareaElement.current.focus()
        }, 500);

    })

    const [valueTextarea, setValueTextarea] = useState("")

    const textareaElement = useRef()

    const getValue = (event) => {
        setValueTextarea(event.target.value)
    }

    const addMessage = (event) => {
        event.preventDefault()

        onSendMessage({
            autor: AUTHORS.User,
            text: valueTextarea,
            id: Date.now()
        })

        setValueTextarea("");
    }


    return (

        <div className="block-form">
            <form onSubmit={addMessage} className="form-message">
                <TextField
                    type="submit"
                    id="filled-textarea"
                    label="Отправить сообщение"
                    placeholder="Сообщение"
                    multiline
                    fullWidth
                    variant="filled"
                    inputRef={textareaElement}
                    value={valueTextarea}
                    onChange={getValue}
                />
                <button type="submit" className="form-message__button">Отправить сообщение</button>
            </form>
        </div>
    )
}

