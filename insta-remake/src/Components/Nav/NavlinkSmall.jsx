import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';


function NavlinkSmall({icon, link}) {

    let className = "fa w-[2.5rem] text-2xl "
    className += icon;
    console.log(className)
    console.log(icon)
return (
    <Link to = {link}>
        <div className='hover:bg-slate-50 my-2 rounded-full py-2 px-3 button flex items-center'>
            <i className={className}></i>
        </div>
    </Link>
  )
}

export default NavlinkSmall