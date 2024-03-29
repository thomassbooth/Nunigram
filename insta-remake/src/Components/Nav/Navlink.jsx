import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { motion, sync, useCycle, useInView } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux'
import { navigate } from '../../features/nav/navSlice'

const Navlink = ({setSmall, text, icon, img, link, setCreateOpen, selected = false}) => {
    const nav = useSelector((state) => state.nav.value)
    console.log(nav)

    const dispatch = useDispatch();
    const { user, isAuthenticated, isLoading } = useAuth0();
    let profileImg = ''
    if (isLoading && img === true) {
      profileImg =  <div className = 'mr-4 w-[1.5rem]'>...</div>;
    } else if (img === true && isAuthenticated) {
      profileImg = <img src={user.picture} className = 'rounded-full border border-gray-400 w-[24px]'/>
    }

    let className = "fa text-2xl "
    // if (nav.open === link){
    //   className += 'bg-pink-500'
    // }
    className += icon;
  
    let borderVarients = (selected) ? {
      open: {},
      closed: { border: '1px solid rgba(0, 0, 0, 0.2)', width: 51}
    } : {open: {},
        closed: { width: 51}}

    
  return (
    <Link to = {link} onClick = {() => {
      if(!(['Create', 'Search', 'Notifications'].includes(text))) {dispatch(navigate({open: text}))}
      if (text === 'Create'){
        setCreateOpen(true)
      }
      setSmall()}}>
      <motion.div className='hover:bg-slate-50 dark:hover:bg-neutral-900/75 my-2 h-[50px] rounded-full py-2 px-3 button flex items-center'
      variants={borderVarients}
      transition={{ duration: 0.2 }}>
      {img === true ? profileImg : <div className = 'w-[24px]'><i className={className}></i></div>}
        <motion.span className = {(nav.open === text)? 'ml-5 font-bold' : 'ml-5'}
        variants={{
          open: { opacity: 100 },
          closed: { opacity: 0, fontSize: 0}
        }}
        transition={{ duration: 0.2 }}>
          {text}
        </motion.span>
      </motion.div>
    </Link>
  )
}

export default Navlink