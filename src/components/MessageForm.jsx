import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

// import { isTyping } from 'react-chat-engine';

// const authObject = {'Project-ID': '0000-00-00-0000', 'User-Name': 'adam', 'User-Secret': 'pass1234'}
// const chatID = 1
// const username = 'adam'

// isTyping(authObject, chatID, username)

export const MessageForm = (props) => {
    const { activeChat, creds, chatId } = props;
    const [value, setValue] = useState('');
    const authObject = { 'Project-ID': '', 'User-Name': '', 'User-Secret': '' };

    console.log(creds, chatId);


    const handleSubmit = (e) => {
        e.preventDefault();
        const text = value.trim();
        if (text.length > 0) {
            sendMessage(creds, chatId, { text });
            setValue('');
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        let sendTyping = true;
        if (sendTyping) {
            isTyping({ ...props, activeChat }, activeChat);
            sendTyping = false;
            setTimeout(() => {
                sendTyping = true;
            }, 250);
        }

    };

    const handleUpload = (e) => {
        sendMessage(creds, chatId, { files: e.target.files, text: '' });
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
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                id="upload-button"
                type="file"
                multiple={false}
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
};;
