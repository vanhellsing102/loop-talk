import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetConversations = (id) => {
    const aixosPublic = useAxiosPublic();
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