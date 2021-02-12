import React from 'react';
import { isImage } from "../util/ChatEngineUtils";

const TheirImg = ({ message, isFirstMessageByUser }) =>
    <img src={message.attachements[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }} />;

const TheirTxt = ({ message, isFirstMessageByUser }) =>
    <div className="message"
        style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px'
        }} >
        {message.text}
    </div>;

export const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            { isFirstMessageByUser && (
                <div className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {
                isImage(message)
                    ? <TheirImg message={message} isFirstMessageByUser={isFirstMessageByUser} />
                    : <TheirTxt message={message} isFirstMessageByUser={isFirstMessageByUser} />
            }
        </div >
    );
};

export default TheirMessage;