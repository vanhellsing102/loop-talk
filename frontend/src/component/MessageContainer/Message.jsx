import { useAuthContext } from '../../ContextProviders/AuthContextProvider';
import useConversation from '../../zustand/useConversation';
import moment from "moment";

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const sendMessageFromMe = authUser?.id === message?.senderId;
    const sendMessageTime = moment(message.createdAt).format("HH:mm")
    // console.log(sendMessageTime);

    return (
        <div className={`chat ${sendMessageFromMe ? "chat-end" : "chat-start"}`}>
            <div className='chat-image'>
                <img className='w-10 rounded-full' src={sendMessageFromMe ? authUser.profilePic : selectedConversation.profilePic} alt="" />
            </div>
            <div className={`chat-bubble ${sendMessageFromMe ? "bg-green-500" : "bg-blue-500"}`}>
                <p className='text-white'>{message?.message}</p>
            </div>
            <div className='chat-footer text-sm text-slate-950'>
                <span>{sendMessageTime}</span>
            </div>
        </div>
    );
};

export default Message;