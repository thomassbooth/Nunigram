import React from 'react'
import { Link } from 'react-router-dom'

const Comment = ({account, image, likes, comment, date, onClose, caption = false}) => {

  

  return (
      <div className = "justify-between flex items-center h-10 my-5 text-sm">
          <div className = "flex">
              <a href = {account} onClick = {() => {onClose()}} to = {account} className = 'mx-3'><img src = {image} className = "rounded-full w-9 h-9"></img></a>
              <div>
                  <a href = {account} onClick = {() => {onClose()}} to = {'../' + account} relative = 'path' className = "font-semibold">
                      {account}
                  </a>
                  <span> {comment}</span>
                  <div className = 'text-sm mt-1 space-x-3 opacity-50'>
                    <span>{date}</span>
                    {(!caption || likes == 0)
                      ? <span className = 'font-medium'>{likes} {(likes == 1) ? 'like' : 'likes'}</span>
                      : ''}
                  </div>
              </div>
          </div>

          {!caption 
            ? (<button className = 'mx-5'><i className = "fa fa-heart-o"></i></button>)
            : ''}
      </div>
  )
}

export default Comment