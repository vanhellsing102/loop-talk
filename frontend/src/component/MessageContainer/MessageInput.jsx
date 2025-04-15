import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
    const axiosPublic = useAxiosPublic();
    const {messages, setMessages, selectedConversation} = useConversation();
    // console.log(selectedConversation._id)

    const handleSendMessage = e =>{
        e.preventDefault();
        const message = e.target.message.value;
        if(!message){
            return toast.error("Please enter your message");
        }
        setMessages(message);
        axiosPublic.post(`/messages/send/${selectedConversation?._id}`, {message: messages}, {
            withCredentials: true
        })
        .then(res =>{
            console.log(res.data)
        })
    }
    return (
        <form onSubmit={handleSendMessage} className='flex items-center justify-center py-3 border-t border-gray-400'>
            <div className='w-full mx-14 relative'>
                <input type="text" name="message" placeholder="Enter your message" className='bg-gray-600 text-white outline-none w-full px-5 py-2 text-sm rounded-sm'/>
                <button type='submit' className="absolute inset-y-0 right-1 cursor-pointer">
                    <IoIosSend className="text-xl"></IoIosSend>
                </button>
            </div>
        </form>
    );
};

export default MessageInput;