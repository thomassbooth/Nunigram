import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useEffect } from 'react'

function Messages() {
  const {isAuthenticated, user} = useAuth0()

  useEffect(() => {
    //on mount set the scrolling to none
    document.body.style.overflow = 'hidden' 
    //on unmount we need to set it to scrolling
    return () => {document.body.style.overflow = 'scroll' }
  }, [])

  return (
    <div className = 'w-screen h-screen bg-gray-50'>
      <div className = 'py-6 h-full w-full flex justify-center'>
        <div className = 'flex h-full border border-gray-300 rounded-sm w-[1000px] bg-white'>
          <div className = 'w-[350px] border-r border-gray-300 h-full'>
            <div className = 'flex  items-center h-[60px] border-b border-gray-300'>
              <div className = 'w-1/5'></div>
              <div className = 'w-3/5 flex justify-center'>
                {user && <button><span className = 'font-medium'>{user.nickname} <i className = 'text-[28px] fa fa-lg fa-angle-down'></i></span></button>}
              </div>
              <div className = 'w-1/5 flex justify-center'>
                <button><span><i className = 'text-[30px] fa fa-pencil-square-o'></i></span></button>
              </div>
            </div>
          </div>
          <div className = 'w-[650px] h-full'>
            <div className = 'h-[60px] border-b border-gray-300'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages