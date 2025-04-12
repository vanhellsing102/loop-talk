import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
    return (
        <form className='flex items-center justify-center py-3 border-t border-gray-400'>
            <div className='w-full mx-14 relative'>
                <input type="text" placeholder="Enter your message" className='bg-gray-600 text-white outline-none w-full px-5 py-2 text-sm rounded-sm'/>
                <button type='submit' className="absolute inset-y-0 right-1 cursor-pointer">
                    <IoIosSend className="text-xl text-white"></IoIosSend>
                </button>
            </div>
        </form>
    );
};

export default MessageInput;