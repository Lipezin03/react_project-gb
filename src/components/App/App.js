import './App.scss';
import { Message } from "../Message/Message.jsx"
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {

    if (messageList.length > 0 && messageList[messageList.length - 1.].autor === "User") {

      setTimeout(() => {
        const messageBot = {
          autor: "Bot",
          text: "Сообщение принято, мы с вами свяжимся!"
        }
        setMessageList([...messageList, messageBot])
      }, 1500)

    }
  })

  const [messageList, setMessageList] = useState([]);

  return (
    <div className="app">
      <Message isMessageList={messageList} isSetMessageList={setMessageList} />
    </div>
  );
}

export default App;
