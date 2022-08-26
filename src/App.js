import React from "react";
import Config from "./chatbot/Config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={Config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;
