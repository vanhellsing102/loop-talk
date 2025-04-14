import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { useAuthContext } from '../../ContextProviders/AuthContextProvider';

const Conversations = () => {
    const {authUser} = useAuthContext();
    const {conversations} = useGetConversations(authUser?.id);
    // console.log(conversations)
    return (
        <div className='flex flex-col'>
            {
                conversations.map((conversation) => <Conversation key={conversation?._id} conversation={conversation}></Conversation>)
            }
        </div>
    );
};

export default Conversations;