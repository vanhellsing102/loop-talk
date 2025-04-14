import { useQuery } from "@tanstack/react-query";
import useAixosPublic from "./useAixosPublic";


const useGetConversations = (id) => {
    const aixosPublic = useAixosPublic();
    const {data: conversations = []} = useQuery({
        queryKey: ['conversation', id],
        queryFn: async() =>{
            const res = await aixosPublic.get(`/users/${id}`);
            return res.data;
        }
    })
    return {conversations};
};

export default useGetConversations;