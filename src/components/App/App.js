import './App.scss';
import { Message } from "../Message/Message.jsx"
import { ChatList } from "../ChatList/ChatList.jsx"
import { useCallback, useEffect, useState } from 'react';
import { AUTHORS } from '../../utils/constans';



function App() {

  const [messageList, setMessageList] = useState([]);

  const [chatListEl, setChatListEl] = useState([
    {
      name: "Sport",
      id: 1,
    },
    {
      name: "Games",
      id: 2,
    },
    {
      name: "Animal",
      id: 3,
    },
    {
      name: "Travel",
      id: 4,
    },

  ])

  const handleSendMessage = useCallback((newMessage) => {
    setMessageList(prevMessage => [...prevMessage, newMessage])
  }, []);

  useEffect(() => {

    if (messageList.length > 0 && messageList[messageList.length - 1.].autor === "User") {

      setTimeout(() => {

        handleSendMessage({
          autor: AUTHORS.Bot,
          text: "Сообщение принято, мы с вами свяжимся!",
          id: Date.now()
        })
      }, 1500)

    }
  }, [messageList, handleSendMessage]);


  return (
    <div className="app">
      <div className="chat">
        <div className="chat__content container">
          <ChatList chatListEl={chatListEl} />
          <Message messageList={messageList} onSendMessage={handleSendMessage} />
        </div>

      </div>

    </div>
  );
}

export default App;
