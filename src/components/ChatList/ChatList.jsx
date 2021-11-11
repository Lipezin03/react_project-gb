import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ChatList.scss"
import DeleteIcon from '@mui/icons-material/Delete';



export const ChatList = ({ ondelChats, chatsName }) => {


    return (
        <div className="chat-list">

            <h3 className="chat-list__title">Список чатов:</h3>

            <ul>{chatsName?.length ?

                chatsName.map(el => {
                    return <li key={el} className="chat-list__list">
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "teal" : "wheat" })}
                            to={`/chats/${el}`}
                            className="chat-list__text"
                        > {el}</NavLink>
                        <button onClick={(event) => ondelChats(el)} className="chat-list__btn-del">
                            <DeleteIcon fontSize="medium"
                                className="icon-del"
                                color="secondary"
                            />
                        </button>
                    </li>

                })
                :
                <li className="chat-list__not-chats">Список чатов пуст, добавте новый чат!</li>
            }

            </ul>
        </div >
    )
}