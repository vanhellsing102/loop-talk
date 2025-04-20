import React from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
    const {messages} = useGetMessages();
    useListenMessages();
    // console.log(messages);
    return (
        <div>
            {
                messages.length > 0 
                ?
                messages.map(message => <Message key={message?._id} message={message}></Message>)
                :
                <p className='text-center font-medium text-xl'>Start a new conversation</p>
            }
        </div>
    );
};

export default Messages;