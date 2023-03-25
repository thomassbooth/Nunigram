import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useState, useEffect } from 'react'
import Message from '../Components/Messages/Message'

function Messages() {
  const {isAuthenticated, user} = useAuth0()
  const [messages, setMessages] = useState([{nickname: 'domhedgetrim', active: '8m ago', name: 'Dom Hedges', image: 'images/cat.jpg' }, 
  {nickname: 'poopni', name: 'poopni', active: '3h ago', image: 'images/storm.jpeg' }, {nickname: 'thomassbooth', name: 'Thomas Booth', active: '2h ago', image: 'images/cat.jpg' }, 
  {nickname: 'DaveyP', name: 'Dave Payne', active: '1w ago', image: 'images/cat.jpg' }, {nickname: 'marioLinderrr', name: 'Marius Lindberg', active: '1d ago', image: 'images/cat.jpg' }])
  const [openMessage, setOpenMessage] = useState('')

  useEffect(() => {
    //on mount set the scrolling to none
    document.body.style.overflow = 'hidden' 
    //on unmount we need to set it to scrolling
    return () => {document.body.style.overflow = 'scroll' }
  }, [])

  return (
    <div className = 'h-screen'>
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
            
            <div className = 'mt-2 h-[89%] overflow-y-auto'>
              {messages.map((messageData) => {
                return <Message messageData = {messageData} openMessage = {openMessage} setOpenMessage = {(name)=> {setOpenMessage(name)}}/>
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
              : <div className = 'h-full'>
                  <div className = 'h-[60px] border-b border-gray-300 flex justify-between items-center'>
                    <div className = 'flex items-center ml-9'>
                      <img src = {openMessage.image} className = 'mr-3 rounded-full w-7 h-7'></img>
                      <div>
                        <span className = 'font-medium'>{openMessage.name}</span>
                        <p className = 'font-light text-xs opacity-40 '>Active {openMessage.active}</p>
                      </div>
                    </div>
                    <div className = 'flex space-x-4 mr-6'>
                      <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg></button>
                      <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                      </svg></button>
                      <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg></button>
                    </div>
                  </div>
                </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages