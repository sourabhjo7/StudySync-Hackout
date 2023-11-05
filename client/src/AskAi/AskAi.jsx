import React from 'react'

const AskAi = () => {
    
    const handleMessage = (event) => {
        event.preventDefault();
        const message = {
          text: event.target.message.value,
          user: 'User'
        };
        socket.emit('message', message);
        event.target.message.value = '';
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        event.target.message.value = '';
      };
      
  return (
    <div>
        <div className="chatbox">
          <div className="chatbox-header">
            <h1>Chat</h1>
          </div>
          <div className="chatbox-messages">
              <div key={index}>
                <div className="message-bubble">
                  <div className="message-text">{message.text}</div>
                </div>
              </div>
          </div>
          <div className="chatbox-input">
            <form onSubmit={handleSubmit}>
              <input type="text" name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
  )
}

export default AskAi;




