import React from 'react';
import { useSelector } from 'react-redux';
import { ChatItem } from '../ChatItem/ChatItem';
import { getSelectorChatList } from '../../store/ChatsReducer/selectors';
import "./ChatList.scss"


export const ChatList = () => {

    const chatsName = useSelector(getSelectorChatList)

    return (
        <div className="chat-list">
            <h3 className="chat-list__title">Список чатов:</h3>

            <ul>{chatsName?.length

                ?

                chatsName.map(chat => {
                    return <li key={chat} className="chat-list__list">
                        <ChatItem chat={chat} />
                    </li>
                })

                :

                <li className="chat-list__not-chats">Список чатов пуст, добавте новый чат!</li>
            }
            </ul>
        </div >
    )
}