import React from 'react'
import Profile from '../Auth0/Auth0profile'

function User() {
  return (
    <div className = 'v-[100px] flex'>
        <div className = 'ml-10 w-[250px]'>
        {/* <LoginButton/> */}
        {/* <LogoutButton/> */}
            <Profile/>
        </div>
        <button className = 'text-xs font-semibold tracking-tight text-blue-500 hover:text-blue-900'>Switch</button>
  </div>
  )
}

export default User