import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useConversation from "../../zustand/useConversation";
import { useState } from "react";

const MessageInput = () => {
    const axiosPublic = useAxiosPublic();
    const {setMessages, selectedConversation} = useConversation();
    const [inputMessage, setInputMessage] = useState("");
    // console.log(message)
    // console.log(selectedConversation._id)

    const handleSendMessage = async(e) =>{
        e.preventDefault();
        if(!inputMessage){
            return toast.error("Please enter your message");
        }
        // setMessages(inputMessage);
        await axiosPublic.post(`/messages/send/${selectedConversation?._id}`, {message: inputMessage}, {
            withCredentials: true
        })
        .then(res =>{
            // console.log(res.data);
            setMessages("");
            setInputMessage("");
        })
        
    }
    return (
        <form onSubmit={handleSendMessage} className='flex items-center justify-center py-3 border-t border-gray-400'>
            <div className='w-full md:mx-10 mx-3 relative'>
                <input value={inputMessage} onChange={(e) =>setInputMessage(e.target.value)} type="text" name="message" placeholder="Enter your message" className='bg-gray-600 text-white outline-none w-full px-5 py-2 text-sm rounded-sm'/>
                <button type='submit' className="absolute inset-y-0 right-1 cursor-pointer">
                    <IoIosSend className="text-xl text-white"></IoIosSend>
                </button>
            </div>
        </form>
    );
};

export default MessageInput;