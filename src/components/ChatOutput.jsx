import RobotImage from '../assets/robot.png';
import UserImage from '../assets/user.png';
import './ChatOutput.css';

export function ChatOutput({message, sender}) {
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
