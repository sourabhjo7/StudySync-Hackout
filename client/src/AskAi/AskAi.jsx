import React, { useState } from "react";
import "./AskAI.css";
import axios from "axios";
const AskAi = () => {
  const [query, setquery] = useState("");
  const [result,setresult]=useState("");
  const handleSubmit = async (event) => {
    try{
        event.preventDefault();
        const {status,data}= await axios.post(
            "http://localhost:3000/ask-ai",
            {
              query: query,
            },
            {
              validateStatus: false,
              withCredentials: true,
            }
          );
          console.log(status,data);
          if(data.success){
              setresult(data.message);
          }
          setquery("");
    }
    catch(e){
        console.error("what is this",e);
    }
  };

  return (
    <div>
      <div className="chatbox">
        <div className="chatbox-header">
          <h1>ASK AI </h1>
        </div>
        <div className="chatbox-messages">
          <div>
            <div className="message-bubble">
              <div className="message-text">{result}</div>
            </div>
          </div>
        </div>
        <div className="chatbox-input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setquery(e.target.value);
              }}
              name="message"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskAi;
