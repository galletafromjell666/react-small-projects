import React from 'react'
import './Message.css'
const Message = ({message}) => {
  return (
    <div className="message">
      <div>
        <h1 className="mainText">{message}</h1>
      </div>
    </div>
  );
}

export default Message