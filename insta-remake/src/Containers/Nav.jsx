import Navlink from '../Components/Nav/Navlink'
import Title from '../Components/Nav/Title'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useRef } from 'react'
import { motion, sync, useCycle, useInView } from "framer-motion";
import Modal from './Modal'
import CreateModal from '../Components/Nav/CreateModal'
import Notifications from '../Components/Nav/Notifications';
import More from '../Components/Nav/More';
import Search from '../Components/Nav/Search';
import MoreButton from '../Components/Nav/MoreButton';
import useCloseComponent from '../Hooks/useCloseComponent';

const Nav = () => {
  const {user, isAuthenticated} = useAuth0()
  const moreRef = useRef()
  const navRef = useRef()
  const [createOpen, setCreateOpen] = useState(false)
  const [smallNav, setSmall] = useState({notifications: true, search: true, base: true})
  const [more, setMore] = useState(false)
  const itemVariants = {
    open: {
      opacity: 1,
      transition: {type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {width: 70, transition: { duration: 0.2 } }
  };

  const makeNavSmall = (type) => {
    switch (type){
      case 'base': 
        setSmall({...smallNav, base: !smallNav.base,})
        break;

      case 'notif':
        if(smallNav.notifications){
          setSmall({search: true, base: false, notifications: false})
        } else {
          setSmall({search: true, base: true, notifications: true})
        }
        break;

      case 'search':
        if(smallNav.search){
          setSmall({notifications: true, base: false, search: false})
        } else {
          setSmall({notifications: true, base: true, search: true})
        }
        break;

      default:
        setSmall({notifications: true, search: true, base: true})
        break;
    }
  }

  const closeMore = () => {
    setMore(!more)
  }

  //useCloseComponent(smallNav, makeNavSmall, navRef)
  
  return (  
    <div className = 'flex'>
      <motion.div ref = {navRef} className='fixed w-1/6 max-w-[380px] z-20 h-screen dark:bg-black bg-white dark:border-gray-500 border-gray-300 border-r-[1px]'
        initial={false}
        animate={smallNav.base ? "open" : "closed"}
        variants = {itemVariants}>
            {isAuthenticated 
            ? <nav className = 'flex flex-col justify-between h-full pl-3 mr-2'>
                <div>
                  <Title/>
                  <Navlink setSmall = {() => {makeNavSmall()}} text = {"Home"} icon = {"fa-home"} link = '/' />
                  <Navlink setSmall = {() => {makeNavSmall('search')}} text = {"Search"} icon = {"fa-search"} />
                  <Navlink setSmall = {() => {makeNavSmall()}} text = {"Explore"} icon = {"fa-compass"} link = '/explore' />
                  <Navlink setSmall = {() => {makeNavSmall()}} text = {"Messages"} icon = {"fa-paper-plane-o"} link = '/message' />
                  <Navlink setSmall = {() => {makeNavSmall('notif')}} text = {"Notifications"} icon = {"fa-heart-o"}/>
                  <Navlink setSmall = {() => {}} text = {"Create"} icon = {"fa-plus-square-o"} setCreateOpen = {setCreateOpen}/>
                  <Navlink setSmall = {() => {makeNavSmall()}} text = {"Profile"} icon = {""} img = {true} link = {user.nickname} />
                </div>
                {more ? <More open = {more} closeMore = {closeMore} buttonRef = {moreRef} setSmall = {() => {makeNavSmall()}}/> : ''}
                <MoreButton moreRef = {moreRef} closeMore = {closeMore}/>
              </nav> : <div className = 'pl-5 border-b-1'></div>}
              {createOpen ? 
              <Modal modalClass = {'bg-white dark:bg-black rounded-lg'} open = {createOpen} onClose = {() => {setCreateOpen(false)}}>
                <CreateModal/>
              </Modal> : null}
      </motion.div>
      {<motion.div
      className = 'z-10'
      initial={false}
      animate={smallNav.notifications ? "open" : "closed"}>
        <Notifications smallNav = {smallNav} setSmall = {() => {makeNavSmall()}}/>
      </motion.div>}
      {<motion.div
      className = 'z-10'
      initial={false}
      animate={smallNav.search ? "open" : "closed"}>
        <Search smallNav = {smallNav} setSmall = {() => {makeNavSmall()}}/>
      </motion.div>}
    </div>
  )
}

export default Nav
