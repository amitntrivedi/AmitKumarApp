import React, {useState, useEffect} from 'react';

// Please optimize this file by using react and ts best practices

type Props = {

};


const ChatItem = (props: Props) => {
    const {chatId} = props;

    useEffect(() => {
        window.addEventListener("resize", handleWindowsResize);
    }, [])


    const handleWindowsResize = (args) => {
        console.log("do something when resized", args);
    }

    const handleStartChat = () => {
        console.log("Open the chat", chatId);
    }


    return (
        <div>
            <h4 style={{backgroundColor: '#f0f0f0'}}>Chat</h4>
            <button onClick={handleStartChat}>
                Start
            </button>
        </div>
    );
};



export default ChatItem;