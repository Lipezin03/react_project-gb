import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSelectorName } from '../../store/profileReducer/selectors';
import { getSelectorChatsShowButtonDelMessage } from '../../store/ChatsReducer/selectors';
import { deleteMessage, visibleButtonDel, hidenButtonDel } from '../../store/ChatsReducer/action';
import "./MessageItem.scss"


export const MessageItem = ({ message }) => {

    const showButtonDel = useSelector(getSelectorChatsShowButtonDelMessage)

    const { name: chatUrlName } = useParams()

    const login = useSelector(getSelectorName)

    const dispatch = useDispatch()

    const handleDeleteMessage = () => {
        dispatch(deleteMessage(chatUrlName, message.id))
        dispatch(hidenButtonDel())
    }


    const getVisibleButtonDel = (event) => {
        const idBtn = event.target.dataset.id
        dispatch(visibleButtonDel(idBtn))

    }

    const getHidenButtonDel = (event) => {
        dispatch(hidenButtonDel())
    }

    return (
        <>

            <div
                onMouseOver={getVisibleButtonDel}
                onMouseLeave={getHidenButtonDel}
                className={message.autor === "Bot" ? 'message-item__item message-item__item_position-left' : 'message-item__item message-item__item_position-right'}>

                <p className="message-item__text-autor">{login ? login : message.autor}</p>

                <p className="message-item__text">{message.message}</p>
                <div data-id={message.id} className="message-item__btn-box">
                    <button
                        data-id={message.id}
                        onClick={handleDeleteMessage}
                        className={showButtonDel == message.id
                            ?
                            "message-item__btn-del-show"
                            :
                            "message-item__btn-del"}>x</button>
                </div>
            </div>
        </>

    )
}