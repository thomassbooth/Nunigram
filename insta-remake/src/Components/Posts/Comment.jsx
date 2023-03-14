import React from 'react'
import { Link } from 'react-router-dom'

const Comment = ({account, image, likes, comment, date}) => {

  return (
      <div className = "justify-between flex items-center h-10 my-2 text-sm">
          <div className = "flex items-center">
              <Link to = {account} className = 'mx-3'><img src = {image} className = "rounded-full w-9 h-9"></img></Link>
              <div>
                  <div>
                      <Link to = {'../' + account} relative = 'path' className = "font-semibold">
                          {account}
                      </Link>
                  </div>
              </div>
          </div>      
          <button className = 'mx-5'>
              <i className = "fa fa-heart-o"></i>
          </button>
      </div>
  )
}

export default Comment