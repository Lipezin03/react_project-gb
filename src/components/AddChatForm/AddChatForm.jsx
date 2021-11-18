import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatList, addNewChat } from '../../store/ChatsReducer/action';
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

    const addChat = (event) => {
        event.preventDefault()

        if (chatsName.includes(valueInput)) {
            setIsValid(true)
            return
        }

        const newChat = {
            [valueInput]: []
        }

        dispatch(addNewChat(newChat))
        dispatch(addChatList(Object.keys(newChat)))

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