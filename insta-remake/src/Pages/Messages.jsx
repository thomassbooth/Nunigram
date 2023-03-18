import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useState, useEffect } from 'react'
import Message from '../Components/Messages/Message'

function Messages() {
  const {isAuthenticated, user} = useAuth0()
  const [messages, setMessages] = useState([{},{},{},{},{},{},{},{},{},])
  const [openMessage, setOpenMessage] = useState('')

  useEffect(() => {
    //on mount set the scrolling to none
    document.body.style.overflow = 'hidden' 
    //on unmount we need to set it to scrolling
    return () => {document.body.style.overflow = 'scroll' }
  }, [])

  return (
    <div className = 'w-screen h-screen bg-gray-50'>
      {/* make a margin around the page and make it flex so it sits in the middle*/}
      <div className = 'py-6 h-full w-full flex justify-center'>

        <div className = 'flex h-full border border-gray-300 rounded-sm w-[1000px] bg-white'>
          {/* left hand side */}
          <div className = 'w-[350px] border-r border-gray-300 h-full'>
            {/* the box for the top left, name and create new message */}
            <div className = 'flex items-center h-[60px] border-b border-gray-300'>
              <div className = 'w-1/5'></div>
              <div className = 'w-3/5 flex justify-center'>
                {user && <button><span className = 'font-medium'>{user.nickname} <i className = 'ml-2 text-[30px] fa fa-lg fa-angle-down'></i></span></button>}
              </div>
              <div className = 'w-1/5 flex justify-center'>
                <button>
                  <span><i className = 'text-[27px] fa fa-pencil-square-o opacity-90 mt-1'></i></span>
                </button>
              </div>
            </div>
            {/* box for left messages */}
            
            <div className = 'mt-2 h-[88%] overflow-y-auto'>
              {messages.map(() => {
                return <Message/>
              })
              }
            </div>
          </div>
          {/* right hand side */}
          <div className = 'w-[650px] h-full'>
            {openMessage === ''
              ? <div className = 'flex h-full justify-center items-center'>
                  <div className = 'flex flex-col items-center'>
                    <div className = 'rotate-[-30deg] flex items-center justify-center h-[100px] w-[100px] rounded-full border-2 border-black'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-[60px] h-[60px] translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </div>
                    <p className = 'text-[23px] font-[350]'>Your Messages</p>
                    <p className = 'text-sm font opacity-50'>Send private photos and messages to a friend or group.</p>
                    <button className = 'text-white text-sm font-medium px-3 py-2 bg-blue-400 hover:bg-blue-500 rounded-lg mt-4'> 
                      Send Message 
                    </button>
                  </div>
                </div>
              : <div className = 'h-[60px] border-b border-gray-300'>

              </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages