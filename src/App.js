import { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { ChatFeed } from "./components/ChatFeed";
import {
  projectID,
  getCredentials,
  clearCredentials,
} from "./util/ChatEngineUtils";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      setUser(getCredentials());
    } catch (err) {}
    return setTimeout(() => clearCredentials(), 1000);
  }, []);

  if (user && user.username && user.password)
    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={user.username} // admin user
        userSecret={user.password} /// admin password
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  else return <LoginForm />;
};

export default App;
