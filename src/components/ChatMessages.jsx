import { useRef, useEffect } from 'react';
import { ChatOutput } from './ChatOutput';
import './ChatMessages.css';

export function ChatMessages({chatMessages}){

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