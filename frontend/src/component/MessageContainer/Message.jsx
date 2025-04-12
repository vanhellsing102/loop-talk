import image from '../../assets/images/download.png'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image'>
                <img className='w-10 rounded-full' src={image} alt="" />
            </div>
            <div className='chat-bubble bg-blue-500'>
                <p className='text-white'>hi how are you</p>
            </div>
            <div className='chat-footer text-sm text-slate-950'>
                10:30
            </div>
        </div>
    );
};

export default Message;