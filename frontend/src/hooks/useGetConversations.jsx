import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetConversations = () => {
    const aixosPublic = useAxiosPublic();
    const {data: conversations = []} = useQuery({
        queryKey: ['conversations'],
        queryFn: async() =>{
            const res = await aixosPublic.get(`/users`);
            return res.data;
        }
    })
    return {conversations};
};

export default useGetConversations;