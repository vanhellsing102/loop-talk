import React from 'react'
import Sidebar from '../component/Sidebar/Sidebar';
import MessageContainer from '../component/MessageContainer/MessageContainer';

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <MessageContainer></MessageContainer>
    </div>
  )
}

export default Home;