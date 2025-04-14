import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import useConversation from '../../zustand/useConversation';
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../ContextProviders/AuthContextProvider';

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const {authUser} = useAuthContext()

    useEffect( () =>{
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className='md:w-[500px] sm:h-[350px] overflow-auto md:h-[400px] rounded-tr-xl rounded-br-xl bg-blue-200 relative flex flex-col'>
            {
                selectedConversation 
                ?
                <div>
                    <div className='bg-slate-500 text-white text-sm py-2 px-5 fixed md:w-[500px] z-10 rounded-tr-xl'>
                    <p>To: <span className='capitalize'>{selectedConversation?.userName}</span></p>
                </div>
                <div className='p-3 overflow-auto'>
                    <Messages></Messages>
                </div>
                <div className=''>
                    <MessageInput></MessageInput>
                </div>
                </div>
                :
                <div className='flex items-center justify-center flex-col h-full gap-1'>
                    <h3 className='text-lg font-medium'>Welcome, <span className='text-2xl font-semibold'>{authUser?.userName}</span></h3>
                    <p className='text-lg font-medium'>Start chat with <span className='text-red-600'>Loop Talk</span></p>
                    <TiMessages className='text-xl'></TiMessages>
                </div>
            }
        </div>
    );
};

export default MessageContainer;