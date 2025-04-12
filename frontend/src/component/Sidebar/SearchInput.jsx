import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-3'>
            <input type="text" className='outline-none bg-gray-700 text-white text-sm px-5 py-2 rounded-xl'/>
            <button type='submit' className='bg-gray-700 p-[8px] rounded-full hover:scale-[104%] cursor-pointer text-white hover:bg-blue-500'>
                <IoSearchOutline className='text-xl'></IoSearchOutline>
            </button>
        </form>
    );
};

export default SearchInput;