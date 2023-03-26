import Navlink from '../Components/Nav/Navlink'
import Title from '../Components/Nav/Title'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useRef } from 'react'
import { motion, sync, useCycle, useInView } from "framer-motion";
import Modal from './Modal'
import CreateModal from '../Components/Nav/CreateModal'
import Notifications from '../Components/Nav/Notifications';
import More from '../Components/Nav/More';

const Nav = () => {
  const {user, isAuthenticated} = useAuth0()
  const moreRef = useRef()
  const [createOpen, setCreateOpen] = useState(false)
  const [smallNav, setSmall] = useState(true)
  const [more, setMore] = useState(false)

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

  const closeMore = () => {
    setMore(!more)
  }

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
      <motion.div className='fixed w-1/6 max-w-[380px] z-20 h-screen dark:bg-black bg-white dark:border-gray-500 border-gray-300 border-r-[1px]'
        initial={false}
        animate={smallNav ? "open" : "closed"}
        variants = {itemVariants}>
            {isAuthenticated 
            ? <nav className = 'flex flex-col justify-between h-full pl-3 mr-2'>
                <div>
                  <Title/>
                  <Navlink setSmall = {() => {setSmall(true)}} text = {"Home"} icon = {"fa-home"} link = '/' />
                  <Navlink setSmall = {() => {setSmall(true)}} text = {"Search"} icon = {"fa-search"} link = '/' />
                  <Navlink setSmall = {() => {setSmall(true)}} text = {"Explore"} icon = {"fa-compass"} link = '/explore' />
                  <Navlink setSmall = {() => {setSmall(true)}} text = {"Messages"} icon = {"fa-paper-plane-o"} link = '/message' />
                  <Navlink setSmall = {makeNavSmall} text = {"Notifications"} icon = {"fa-heart-o"}/>
                  <Navlink setSmall = {() => {}} text = {"Create"} icon = {"fa-plus-square-o"} setCreateOpen = {setCreateOpen}/>
                  <Navlink setSmall = {() => {setSmall(true)}} text = {"Profile"} icon = {""} img = {true} link = {user.nickname} />
                </div>
                {more ? <More open = {more} closeMore = {closeMore} buttonRef = {moreRef}/> : ''}
                <button ref = {moreRef} onClick = {closeMore}>
                  <motion.div className='hover:bg-slate-50 my-2 h-[50px] rounded-full py-2 px-3 button flex items-center'>
                    <div className = 'w-[24px]'><i className = 'fa text-2xl fa-bars'></i></div>
                    <motion.span className = 'ml-5'
                    variants={{
                      open: { opacity: 100 },
                      closed: { opacity: 0, fontSize: 0}
                    }}
                    transition={{ duration: 0.1 }}>
                      More
                    </motion.span>
                  </motion.div>
                </button>
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