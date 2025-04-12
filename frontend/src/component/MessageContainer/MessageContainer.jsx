import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
    return (
        <div className='md:w-[500px] sm:h-[350px] overflow-auto md:h-[400px] rounded-tr-xl rounded-br-xl bg-blue-200 relative flex flex-col'>
            <div className='bg-slate-500 text-white text-sm py-2 px-5 fixed md:w-[500px] z-10 rounded-tr-xl'>
                <p>To: <span>Md Murad</span></p>
            </div>
            <div className='p-3 overflow-auto'>
                <Messages></Messages>
            </div>
            <div className=''>
                <MessageInput></MessageInput>
            </div>
        </div>
    );
};

export default MessageContainer;