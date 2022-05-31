import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addChatList,
    addNewChat,
    initChatsTracking,
    addChatWithFb,
    initChatsMessageTracking
} from '../../store/ChatsReducer/action';
import { getSelectorChatList } from '../../store/ChatsReducer/selectors';

import "../AddChatForm/AddChatForm.scss"


export const AddChatForm = () => {

    const chatsName = useSelector(getSelectorChatList)

    const dispatch = useDispatch()

    const [isValid, setIsValid] = useState(false)

    const [valueInput, setValueInput] = useState("")

    const getValueInput = (event) => {
        setValueInput(event.target.value)

    }

    useEffect(() => {
        dispatch(initChatsTracking())
        dispatch(initChatsMessageTracking())
    }, [])


    const addChat = (event) => {
        event.preventDefault()

        if (chatsName.includes(valueInput)) {
            setIsValid(true)
            return
        }

        const newChat = {
            [valueInput]: [] // для store
        }
        dispatch(addNewChat(newChat))  // Просто способ добавдения в store Chat
        dispatch(addChatList(Object.keys(newChat)))  //Просто способ добавдения в store ChatList

        // Возможно в firebase истек срок действия базы данных и это не работает сейчас
        dispatch(addChatWithFb(valueInput))
        setValueInput("")

        setIsValid(false)

    }

    return (

        <div className="form-add-chat">
            <h3 className="form-add-chat__title">Добавить чат:</h3>
            <form onSubmit={addChat} className="form-add-chat__form">
                <input
                    value={valueInput}
                    onChange={getValueInput}
                    className="form-add-chat__input"
                    type="text" />
                {isValid ?
                    <div className="isvalid">Такое имя чата уже есть. Попробуй другое!</div>
                    : ""}
                <button type="submit" className="form-add-chat__btn">Добавить новый чат</button>
            </form>

        </div >
    )
}