import React, { useState } from 'react';

import axios from 'axios';
import { authObject, projectID, setAuthenticated } from "../util/ChatEngineUtils";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginDisabled, setLoginDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoginDisabled(true);

        try {
            // send username & password to ChatEngine
            const options = { headers: authObject(username, password) };
            await axios.get('https://api.chatengine.io/chats', options);
            // (SUCCESS) = Returns messages for user => login 
            setAuthenticated(username, password);
            window.location.reload();
        } catch (authError) {
            // (UNSUCCESSFUL) = No Messages returned => error: try again 
            setError('Oops, those credentials aren\'t quite right...');
        }

        setLoginDisabled(false);
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
                        <button type="submit" className="button" disabled={loginDisabled}>
                            <span>Login</span>
                        </button>
                    </div>
                    {error && <h2 className="error">{error}</h2>}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
