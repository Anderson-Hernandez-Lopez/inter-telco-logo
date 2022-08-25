import React, { useState }  from 'react'
import './nav.css'
import {TbHome} from 'react-icons/tb'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt, BiMessageDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><TbHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBookAlt /></a>
      <a href="#services"  onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine /></a>
      <a href="#contact"  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav