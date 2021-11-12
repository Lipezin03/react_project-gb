import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import { AUTHORS } from '../../utils/constans';
import "./FormMessage.scss";
import TextField from '@mui/material/TextField'
import { useParams } from 'react-router';


export const FormMessage = ({ chatsName, onSendMessage }) => {

    const { name: chatUrlName } = useParams()

    const isActivUrl = useMemo(() => {
        if (chatUrlName && chatsName.includes(chatUrlName)) {
            return true;
        } else {
            return false;
        }
    }, [chatUrlName])

    const [valueTextarea, setValueTextarea] = useState("")

    const textareaElement = useRef()

    useEffect(() => {
        if (chatUrlName && chatsName.includes(chatUrlName)) {
            textareaElement.current.focus()
        }
    })

    const getValue = (event) => {
        setValueTextarea(event.target.value)
    }

    const addMessage = (event) => {
        event.preventDefault()

        onSendMessage({
            autor: AUTHORS.User,
            message: valueTextarea,
            id: Date.now()
        })

        setValueTextarea("");
    }


    return (

        <div className="block-form">
            <form onSubmit={addMessage} className="form-message">
                {isActivUrl
                    ?
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
                        onChange={getValue} />

                    : ""}
                <button type="submit" className="form-message__button">Отправить сообщение</button>
            </form>
        </div>
    )
}

