import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
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