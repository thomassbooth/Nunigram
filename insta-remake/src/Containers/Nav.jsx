import Navlink from '../Components/Nav/Navlink'
import Title from '../Components/Nav/Title'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useRef } from 'react'
import { motion, sync, useCycle, useInView } from "framer-motion";
import Modal from './Modal'
import CreateModal from '../Components/Nav/CreateModal'
import Notifications from '../Components/Nav/Notifications';
import useDarkMode from '../Hooks/useDarkMode';

const Nav = () => {
  const {user, isAuthenticated} = useAuth0()
  const navRef = useRef(null)
  const isInView = useInView(navRef, {once: true})
  const [createOpen, setCreateOpen] = useState(false)
  const [smallNav, setSmall] = useState(true)
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  const itemVariants = {
    open: {
      opacity: 1,
      transition: {type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {width: 70, transition: { duration: 0.2 } }
  };
  const makeNavSmall = () => {
    console.log('woorkkkk')
    setSmall(!smallNav)
  }
  console.log(isInView)
  return (  
    // <div ref = {navRef} className=' fixed w-1/6 max-w-[380px] h-screen bg-white border-gray-300 border-r-[1px]'
    //     style = {{transform: isInView ? 'none' : 'translateX(-200px)',
    //     opacity: isInView ? 1 : 0,
    //     transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}}>
    //       {isAuthenticated ? <nav className = 'flex flex-col px-3 pl-5 border-b-1'>
    //           <Title/>
    //           <Navlink text = {"Home"} icon = {"fa-home"} link = '/' />
    //           <Navlink text = {"Search"} icon = {"fa-search"} link = '/' />
    //           <Navlink text = {"Explore"} icon = {"fa-compass"} link = '/explore' />
    //           <Navlink text = {"Messages"} icon = {"fa-paper-plane-o"} link = '/message' />
    //           <Navlink text = {"Notifications"} icon = {"fa-heart-o"} link = '/' />
    //           <Navlink text = {"Create"} icon = {"fa-plus-square-o"} setCreateOpen = {setCreateOpen}/>
    //           <Navlink text = {"Profile"} icon = {""} img = {true} link = {user.nickname} />
    //         </nav> : <div className = 'pl-5 border-b-1'></div>}
    //         {createOpen ? 
    //         <Modal modalClass = {'bg-white rounded-lg'} open = {createOpen} onClose = {() => {setCreateOpen(false)}}>
    //           <CreateModal/>
    //         </Modal> : null}
    //   </div>
    <div className = 'flex'>
      <motion.div ref = {navRef} className='fixed w-1/6 max-w-[380px] z-20 h-screen bg-white border-gray-300 border-r-[1px]'
        initial={false}
        animate={smallNav ? "open" : "closed"}
        variants = {itemVariants}>
            {isAuthenticated ? <nav className = 'flex flex-col pl-3 mr-2'>
                <Title/>
                {/* <button onClick = {handleMode}>Dark</button> */}
                <Navlink setSmall = {() => {setSmall(true)}} text = {"Home"} icon = {"fa-home"} link = '/' />
                <Navlink setSmall = {() => {setSmall(true)}} text = {"Search"} icon = {"fa-search"} link = '/' />
                <Navlink setSmall = {() => {setSmall(true)}} text = {"Explore"} icon = {"fa-compass"} link = '/explore' />
                <Navlink setSmall = {() => {setSmall(true)}} text = {"Messages"} icon = {"fa-paper-plane-o"} link = '/message' />
                <Navlink setSmall = {makeNavSmall} text = {"Notifications"} icon = {"fa-heart-o"}/>
                <Navlink setSmall = {() => {}} text = {"Create"} icon = {"fa-plus-square-o"} setCreateOpen = {setCreateOpen}/>
                <Navlink setSmall = {() => {setSmall(true)}} text = {"Profile"} icon = {""} img = {true} link = {user.nickname} />
              </nav> : <div className = 'pl-5 border-b-1'></div>}
              {createOpen ? 
              <Modal modalClass = {'bg-white rounded-lg'} open = {createOpen} onClose = {() => {setCreateOpen(false)}}>
                <CreateModal/>
              </Modal> : null}
      </motion.div>
      {<motion.div
      className = 'z-10'
      initial={false}
      animate={smallNav ? "open" : "closed"}>
        <Notifications/>
      </motion.div>}
    </div>
  )
}

export default Nav