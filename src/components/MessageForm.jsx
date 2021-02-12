import React, { useEffect, useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

export const MessageForm = (props) => {
    const delay = 1000;
    const { activeChat, creds, chatId, userName } = props;
    const [value, setValue] = useState('');
    const [typing, setTyping] = useState(false);
    const [shouldUpdateTypingStatus, setShouldUpdateTypingStatus] = useState(true);

    useEffect(() => {
        if (typing && shouldUpdateTypingStatus) {
            setShouldUpdateTypingStatus(false);
            isTyping({ ...props }, activeChat, userName);
            setTimeout(() => setShouldUpdateTypingStatus(true), delay);
        }
    }, [props, shouldUpdateTypingStatus, typing, activeChat, userName]);

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
        setTyping(true);
        setTimeout(() => setTyping(false), delay);
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

export default MessageForm;