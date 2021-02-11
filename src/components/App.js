import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="1ddc2650-e4a3-49b2-a059-2d9efac5bfb2"
      userName="helloWorld" // admin user
      userSecret="helloWorld" /// admin password
    />
  );
};

export default App;
