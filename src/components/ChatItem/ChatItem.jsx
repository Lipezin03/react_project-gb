import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChatList, deleteChat } from '../../store/ChatsReducer/action';
import { useParams, useNavigate } from 'react-router-dom';
import { getSelectorChatList } from '../../store/ChatsReducer/selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import "./ChatItem.scss"



export const ChatItem = ({ chat }) => {

    const chatsName = useSelector(getSelectorChatList)

    const { name: chatUrlName } = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleDeleteChat = () => {
        dispatch(deleteChat(chat))
        dispatch(deleteChatList(chat))

        if (chatUrlName === chat) {
            navigate("/chats")
        }
        else if (chatsName.length === 0) {
            navigate("/chats")
        }
    }

    return (
        <>
            <NavLink
                style={({ isActive }) => ({ color: isActive ? "teal" : "wheat" })}
                to={`/chats/${chat}`}
                className="chat-item__text"
            > {chat}
            </NavLink>

            <button onClick={handleDeleteChat} className="chat-item__btn-del">
                <DeleteIcon fontSize="medium"
                    className="icon-del"
                    color="secondary"
                />
            </button>
        </>
    )

}