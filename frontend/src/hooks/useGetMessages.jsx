import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
    const axiosPublic = useAxiosPublic();
    const {selectedConversation} = useConversation();
    const id = selectedConversation?._id;

    const {data: messages = [], refetch} = useQuery({
        queryKey: ["messages", id],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/messages/get/${id}`)
            return res.data;
        }
    })
    return {messages, refetch};
};

export default useGetMessages;