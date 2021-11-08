import React from 'react';
import "./ChatList.scss"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

export const ChatList = ({ chatListEl }) => {



    return (
        <div className="chat-list">
            <h3 className="chat-list__title">Список чатов:</h3>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}>
                {chatListEl.map((value) => (
                    <ListItem
                        key={value.id}
                        disableGutters
                        secondaryAction={
                            <IconButton>
                                <CommentIcon color="secondary" />
                            </IconButton>
                        }
                    >
                        <ListItemText className="chat-list__text" primary={value.name} />
                    </ListItem>
                ))}
            </List>
        </div>

    )
}