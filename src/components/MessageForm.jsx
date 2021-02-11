import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { act } from "react-dom/test-utils";

export const MessageForm = (props) => {
    const { activeChat } = props;
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = value.trim();
        if (text.length > 0) {
            sendMessage(props, activeChat, { text });
            setValue('');
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        isTyping({ ...props, activeChat }, activeChat);
    };

    return (
        <form
            className="message-form"
            onSubmit={handleSubmit}
        >
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button"></span>
            </label>
        </form>
    );
};
