import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { MdHomeRepairService } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { Nav } from './Navbar.styled.js';


const Navbar = () => {
  return (
    <Nav >
      <a href='#home'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBookOpen/></a>
      <a href='#services'><MdHomeRepairService/></a>
      <a href='#contacts'><BiMessageDetail/></a>
    </Nav>
  )
}

export default Navbar