import React from 'react'
import { useState } from 'react'
import Modal from '../../Containers/Modal'
import User from '../Posts/User'

function Post({postData, account}) {
  const [isOpen, setIsOpen] = useState(false)

  let postModalData = {
    comments: [],
    caption: 'Home sweet home',
    location: 'Hatta Dam, Dubai, UAE',
    posted: 'JANUARY 20',
  }

  return (
    <>
      <button onClick = {() => {setIsOpen(true)}} className = 'relative group mb-7'>
          <img className = 'w-[314px] h-[314px]' src = {postData.src}></img>
          <div className = 'bg-black/30 text-[16px] font-bold text-white cursor-pointer flex justify-center items-center invisible group-hover:visible bottom-0 absolute w-full h-full'>
            <i className = {'fa fa-heart mr-1'}></i>
            <span className = 'mr-6'>{postData.likes}</span>
            <i className = {'fa fa-comment mr-1'}></i>
            <span>{postData.comments}</span>
          </div>
      </button>
      {isOpen ? <Modal open = {isOpen} onClose = {() => {setIsOpen(false)}}>
        <div className = 'flex'>
          <img className = 'h-[600px]' src = {postData.src}></img>
          <div className = 'w-[450px] m-3'>
            <User  name = {account} location = {postModalData.location} picture = 'images/cat.jpg'/>
            <hr></hr>
          </div>
        </div>
          
        
      </Modal> : null}
    </>
  )
}

export default Post