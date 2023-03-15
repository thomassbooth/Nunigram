import Navlink from '../Components/Nav/Navlink'
import Title from '../Components/Nav/Title'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import Modal from './Modal'

const Nav = () => {
  const {user, isAuthenticated} = useAuth0()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=' fixed w-1/6 h-screen bg-white border-gray-300 border-r-[1px]'>
      {isAuthenticated ? <nav className = 'flex flex-col px-3 pl-5 border-b-1'>
          <Title/>
          <Navlink text = {"Home"} icon = {"fa-home"} link = '/' />
          <Navlink text = {"Search"} icon = {"fa-search"} link = '/' />
          <Navlink text = {"Explore"} icon = {"fa-compass"} link = '/explore' />
          <Navlink text = {"Messages"} icon = {"fa-paper-plane-o"} link = '/message' />
          <Navlink text = {"Notifications"} icon = {"fa-heart-o"} link = '/' />
          <Navlink text = {"Create"} icon = {"fa-plus-square-o"} link = '/' />
          <Navlink text = {"Profile"} icon = {""} img = {true} link = {user.nickname} />
          
        </nav> : <div className = 'pl-5 border-b-1'></div>}

        
    </div>
  )
}

export default Nav