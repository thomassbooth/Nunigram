import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { motion, sync, useCycle, useInView } from "framer-motion";

const Navlink = ({setSmall, text, icon, img, link, setCreateOpen}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    let profileImg = ''
    if (isLoading && img === true) {
      profileImg =  <div className = 'mr-4 w-[1.5rem]'>...</div>;
    } else if (img === true && isAuthenticated) {
      profileImg = <img src={user.picture} className = 'rounded-full border border-gray-400 w-[1.5rem] mr-4'/>
    }

    let className = "fa mr-5 text-2xl "
    className += icon;

  return (
    <Link to = {link} onClick = {() => {if (text === 'Create'){
      setCreateOpen(true)
      }
      setSmall()}}>
      <div className='hover:bg-slate-50 my-2 rounded-full py-2 px-3 button flex items-center'>
      {img === true ? profileImg : <i className={className}></i>}
      <motion.span
      variants={{
        open: { opacity: 100 },
        closed: { opacity: 0, fontSize: 0 }
      }}
      transition={{ duration: 0.1 }}>
        {text}
      </motion.span>
      </div>
    </Link>
  )
}

export default Navlink