import { useAuthContext } from '../../ContextProviders/AuthContextProvider';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const sendMessageFromMe = authUser?.id === message?.senderId;
    // console.log(authUser, selectedConversation);
    return (
        <div className={`chat ${sendMessageFromMe ? "chat-end" : "chat-start"}`}>
            <div className='chat-image'>
                <img className='w-10 rounded-full' src={sendMessageFromMe ? authUser.profilePic : selectedConversation.profilePic} alt="" />
            </div>
            <div className='chat-bubble bg-blue-500'>
                <p className='text-white'>{message?.message}</p>
            </div>
            <div className='chat-footer text-sm text-slate-950'>
                10:30
            </div>
        </div>
    );
};

export default Message;