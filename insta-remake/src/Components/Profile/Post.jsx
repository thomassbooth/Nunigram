import React from 'react'
import { useState, useRef } from 'react'
import Modal from '../../Containers/Modal'
import Comment from '../Posts/Comment'
import PostModal from '../Posts/PostModal'
import Reactions from '../Posts/Reactions'
import User from '../Posts/User'


function Post({src, likes, comments, index, profileType}) {
  const [isOpen, setIsOpen] = useState(false)
  

  let postModalData = {
    caption: 'Home sweet home',
    likes: 10,
    src: 'images/cat.jpg',
    location: 'Hatta Dam, Dubai, UAE',
    posted: 'JANUARY 20',
    fromToday: '8w'
  }

  return (
    <>
      <button onClick = {() => {setIsOpen(true)}} className = 'relative group mb-7'>
          <img className = 'w-[314px] h-[314px]' src = {src}></img>
          <div className = 'bg-black/30 text-[16px] font-bold text-white cursor-pointer flex justify-center items-center invisible group-hover:visible bottom-0 absolute w-full h-full'>
            <i className = {'fa fa-heart mr-1'}></i>
            <span className = 'mr-6'>{likes}</span>
            <i className = {'fa fa-comment mr-1'}></i>
            <span>{comments}</span>
          </div>
      </button>
      {isOpen ? <Modal open = {isOpen} onClose = {() => {setIsOpen(false)}}>
        <PostModal index = {index} type = {'profile'} profileType = {profileType}/>
      </Modal> : null}
    </>
  )
}

export default Post