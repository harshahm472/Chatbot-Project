import { useState, useRef, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import RobotImage from './assets/robot.png';
import UserImage from './assets/user.png';
import './App.css';


function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText]=useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newMessage = {message: inputText, sender: "user", id: Math.random()};
    const newChatMessages = [...chatMessages, newMessage];
    //setChatMessages(newChatMessages);

    const response=Chatbot.getResponse(inputText);
    console.log("Chatbot response: " + response);

    const botMessage = {message: response, sender: "robot", id: Math.random()};
    const newBotMessages = [...newChatMessages, botMessage];
    setChatMessages(newBotMessages);
    setInputText('');
  }
    return(
      <div className="chat-input-container">
        <input 
          type="text" 
          placeholder="Type your message..." 
          size="32"
          onChange={saveInputText}
          value={inputText}
          className="input-text"
        />
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    );
  }
      
  function ChatOutput({message, sender}) {
    //const message=props.message;
    //const sender=props.sender;
    //const {message, sender}=props;
    /* if (sender==="robot") {
      return(
        <div>
          <img src="robot.png" width="50"/>
          {message}
        </div>
      );
    } */

    return(
      <div className={sender === 'robot' ? "robot-message" : "user-message"}>
        {sender === 'robot' && <img src={RobotImage} className="chat-message-profile"/>}
        <div className="chat-message-text">{message}</div>
        {sender === 'user' && <img src={UserImage} className="chat-message-profile"/>}
      </div>
    );
  }

  function ChatMessages({chatMessages}){

    const chatMessagesRef=useRef(null);
    useEffect(() => {
      const containerElem=chatMessagesRef.current;
      if(containerElem){
        containerElem.scrollTop=containerElem.scrollHeight;
      }
    }, [chatMessages]);

    const chatMessageComponents=chatMessages.map((chatMessage) => {
      return(<ChatOutput 
        message={chatMessage.message} 
        sender={chatMessage.sender}
        key={chatMessage.id}
      />);
    });

    return(
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessageComponents}
      </div>
    );
  }

  function App(){
        
    const [chatMessages, setChatMessages] = useState([]);
      //const [chatMessages, setChatMessages] = array;
      //const chatMessages = array[0];
      //const setChatMessages = array[1];
      
      return (
        <div className="app-container">
          <ChatMessages 
            chatMessages={chatMessages} 
          />
          <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
      );
    }

export default App
