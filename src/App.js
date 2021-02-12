import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import {
  projectID,
  isAuthenticated,
  authenticatedUser,
} from "./util/ChatEngineUtils";

const App = () => {
  if (!isAuthenticated()) return <LoginForm />;
  else {
    const { username, password } = authenticatedUser();
    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={username} // admin user
        userSecret={password} /// admin password
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  }
};

export default App;
