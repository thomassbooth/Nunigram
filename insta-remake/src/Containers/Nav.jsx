import Navlink from '../Components/Nav/Navlink'
import Title from '../Components/Nav/Title'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useRef } from 'react'
import Modal from './Modal'
import {useInView} from 'framer-motion'
import CreateModal from '../Components/Nav/CreateModal'

const Nav = () => {
  const {user, isAuthenticated} = useAuth0()
  const navRef = useRef(null)
  const isInView = useInView(navRef, {once: true})
  const [createOpen, setCreateOpen] = useState(false)

  console.log(isInView)
  return (  
    <div ref = {navRef} className=' fixed w-1/6 max-w-[380px] h-screen bg-white border-gray-300 border-r-[1px]'
        style = {{transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}}>
          {isAuthenticated ? <nav className = 'flex flex-col px-3 pl-5 border-b-1'>
              <Title/>
              <Navlink text = {"Home"} icon = {"fa-home"} link = '/' />
              <Navlink text = {"Search"} icon = {"fa-search"} link = '/' />
              <Navlink text = {"Explore"} icon = {"fa-compass"} link = '/explore' />
              <Navlink text = {"Messages"} icon = {"fa-paper-plane-o"} link = '/message' />
              <Navlink text = {"Notifications"} icon = {"fa-heart-o"} link = '/' />
              <Navlink text = {"Create"} icon = {"fa-plus-square-o"} setCreateOpen = {setCreateOpen}/>
              <Navlink text = {"Profile"} icon = {""} img = {true} link = {user.nickname} />
            </nav> : <div className = 'pl-5 border-b-1'></div>}
            {createOpen ? 
            <Modal modalClass = {'bg-white rounded-lg'} open = {createOpen} onClose = {() => {setCreateOpen(false)}}>
              <CreateModal/>
            </Modal> : null}
      </div>
  )
}

export default Nav