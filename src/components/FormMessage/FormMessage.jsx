import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHORS } from '../../utils/constans';
import { getSelectorChatList } from '../../store/ChatsReducer/selectors';
import TextField from '@mui/material/TextField'
import {
    addNewMessage,
    addMessageWithThunk,
    addMessageWithFb
} from '../../store/ChatsReducer/action';
import { useParams } from 'react-router';


import "./FormMessage.scss";


export const FormMessage = () => {

    const dispatch = useDispatch()

    const chatsName = useSelector(getSelectorChatList)

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

    const addMessages = (event) => {
        event.preventDefault()

        const newMessage = {
            autor: AUTHORS.User,
            message: valueTextarea,
            id: Date.now()
        }
        // dispatch(addMessageWithThunk(chatUrlName, newMessage)) //! Автоматический ответ бота

        dispatch(addMessageWithFb(chatUrlName, newMessage))

        setValueTextarea("");
    }


    return (

        <div className="block-form">
            <form onSubmit={addMessages} className="form-message">
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

