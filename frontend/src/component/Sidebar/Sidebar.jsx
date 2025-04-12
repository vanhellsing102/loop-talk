import React from 'react';
import SearchInput from './SearchInput';
import LogOut from './LogOut';
import Conversations from './Conversations';

const Sidebar = () => {
    return (
        <div className='bg-gray-300 p-7 sm:h-[350px] overflow-auto md:h-[400px] rounded-xl'>
            <SearchInput></SearchInput>
            <div className='divider'></div>
            <Conversations></Conversations>
            <LogOut></LogOut>
        </div>
    );
};

export default Sidebar;