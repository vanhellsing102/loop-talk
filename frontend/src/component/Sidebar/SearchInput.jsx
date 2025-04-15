import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import toast from "react-hot-toast";
import useGetConversations from '../../hooks/useGetConversations';

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();
    // console.log(selectedConversation)
    // console.log(conversations);

    const handleSearch = e =>{
        e.preventDefault();
        if(!searchValue){
            toast.error("Please enter username");
        }
        const searchConversation = conversations.find((conversation) => conversation.userName.toLowerCase().includes(searchValue.toLowerCase()));
        if(searchConversation){
            setSelectedConversation(searchConversation);
            setSearchValue("");
        }else{
            toast.error("User not found")
        }
    }
    return (
        <form onSubmit={handleSearch} className='flex items-center gap-3 w-full'>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search' className='outline-none w-full bg-gray-700 text-white text-sm px-5 py-2 rounded-xl'/>
            <button type='submit' className='bg-gray-700 p-[8px] rounded-full hover:scale-[104%] cursor-pointer text-white hover:bg-blue-500'>
                <IoSearchOutline className='text-xl'></IoSearchOutline>
            </button>
        </form>
    );
};

export default SearchInput;