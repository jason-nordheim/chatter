import React, { useState } from 'react';

import axios from 'axios';
import { authObject, projectID, setAuthenticated } from "../util/ChatEngineUtils";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObj = authObject(username, password);

        try {
            // send username & password to ChatEngine
            const options = { headers: authObj };
            const res = await axios.get('https://api.chatengine.io/chats', options);
            // (SUCCESS) = Returns messages for user => login 
            setAuthenticated(username, password);
            window.location.reload();
        } catch (error) {
            // (UNSUCCESSFUL) = No Messages returned => error: try again 

        }

    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chatter</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="input"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <input type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
