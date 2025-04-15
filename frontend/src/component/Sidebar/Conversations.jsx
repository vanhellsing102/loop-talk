import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
    const {conversations} = useGetConversations();
    // console.log(conversations);
    return (
        <div className='flex flex-col'>
            {
                conversations.map((conversation) => <Conversation key={conversation?._id} conversation={conversation}></Conversation>)
            }
        </div>
    );
};

export default Conversations;