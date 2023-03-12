import React from 'react'
import { useState } from 'react'
import Modal from '../../Containers/Modal'
import User from '../Posts/User'

function Post({likes, comments, src}) {
  const [isOpen, setIsOpen] = useState(false)
  if (isOpen){
    
  }
  let size = String(Math.floor(((window.screen.availHeight/5)*4)/100)*100)
  let modalHeightClass = 'h-[' + size + 'px]'
  console.log(modalHeightClass)
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
        <div className = 'flex'>
          <img className = {modalHeightClass} src = {src}></img>
          <div className = 'w-[450px] m-3'>
            <User  name = {'thomassbooth'} location = {'Hatta Dam'} picture = 'images/cat.jpg'/>
          </div>
        </div>
          
        
      </Modal> : null}
    </>
  )
}

export default Post