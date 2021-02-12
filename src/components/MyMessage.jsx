import React from 'react';
import { isImage } from "../util/ChatEngineUtils";

const MyImage = ({ message }) =>
    <img src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }} />;


const MyText = ({ message }) =>
    <div className="message"
        style={{
            float: 'right',
            marginRight: '18px',
            color: 'white',
            backgroundColor: '#3B2A50'
        }} >
        {message.text}
    </div>;


const MyMessage = ({ message }) => {
    if (isImage(message)) return <MyImage message={message} />;
    else return <MyText message={message} />;
};

export default MyMessage;
