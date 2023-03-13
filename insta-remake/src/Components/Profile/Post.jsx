import React from 'react'
import { useState, useRef } from 'react'
import Modal from '../../Containers/Modal'
import Reactions from '../Posts/Reactions'
import User from '../Posts/User'


function Post({postData, account}) {
  const [isOpen, setIsOpen] = useState(false)
  const commentRef = useRef()

  function handleCommentClick() {
    commentRef.current.focus()
  }

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
          <div className = 'flex-col w-[450px] m-2'>
            <User  name = {account} location = {postModalData.location} picture = 'images/cat.jpg'/>
            <hr className = 'mt-3'></hr>
            <div className='h-[380px]'>

            </div>
            <hr></hr>
            <Reactions likes = {postData.likes} commentHandle = {handleCommentClick}/>
            <p className = 'text-[10px] opacity-50 mb-2'>{postModalData.posted}</p>
            <hr></hr>
            <div className = 'mt-3 flex text-sm align-center'>
              <button><i className = 'mx-2 text-lg fa fa-smile-o'></i></button>
              <form action="POST" className = 'flex'>
                <textarea ref = {commentRef} rows = {1} placeholder = 'Add a comment...' className = 'w-[380px] mt-1 font-light outline-none resize-none'></textarea>
                <button type = 'submit' className = 'text-blue-500 text-sm px-1'>Post</button>
              </form>
            </div>
          </div>
        </div>
          
        
      </Modal> : null}
    </>
  )
}

export default Post