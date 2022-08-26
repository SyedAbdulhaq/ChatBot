// import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import AdminForm from "../Components/AdminForm";

import Options from "../Components/Options/Options";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: () => <AdminForm />,
    },
  ],
};

export default config;
