import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="1ddc2650-e4a3-49b2-a059-2d9efac5bfb2"
      userName="fooBar" // admin user
      userSecret="fooBar" /// admin password
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
