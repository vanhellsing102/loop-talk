import React, { useEffect } from 'react';
import { useSocketContext } from '../ContextProviders/SocketContextProvider';
import useConversation from '../zustand/useConversation';

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();
    // console.log(messages);
    useEffect(() =>{
        socket?.on("newMessage", (newMessage) =>{
            setMessages((messages) =>[...messages, newMessage]);
        })
        return () => socket?.off("newMessage");
    }, [socket, messages, setMessages])
};

export default useListenMessages;