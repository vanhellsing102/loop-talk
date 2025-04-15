import React from 'react';
import SearchInput from './SearchInput';
import LogOut from './LogOut';
import Conversations from './Conversations';

const Sidebar = () => {
    return (
        <div className='p-7 sm:h-[350px] overflow-auto md:h-[400px] bg-gray-300 rounded-tl-xl rounded-bl-xl w-[200px] sm:w-[300px] md:w-[400px]'>
            <SearchInput></SearchInput>
            <div className='divider'></div>
            <Conversations></Conversations>
            <LogOut></LogOut>
        </div>
    );
};

export default Sidebar;