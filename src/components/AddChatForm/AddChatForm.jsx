import React from 'react';
import { useState } from 'react';
import "../AddChatForm/AddChatForm.scss"


export const AddChatForm = ({ chatsName, onAddChats }) => {
    const [isValid, setIsValid] = useState(false)

    const [valueInput, setValueInput] = useState("")

    const addChat = (event) => {
        event.preventDefault()

        if (chatsName.includes(valueInput)) {
            setIsValid(true)
            return
        }


        const newChat = {
            [valueInput]: []
        }

        onAddChats(newChat)

        setValueInput("")

        setIsValid(false)

    }

    const getValueInput = (event) => {
        setValueInput(event.target.value)

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
                    <div className="isvalid">Такое имя чата уже есть. Попробуй другое!</div> : ""}
                <button type="submit" className="form-add-chat__btn">Добавить новый чат</button>
            </form>

        </div >
    )
}