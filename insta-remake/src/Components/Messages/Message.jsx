import React from 'react'

function Message({image = 'images/cat.jpg'}) {
  return (
    <div className = 'hover:bg-gray-100 py-3'>
        <img src = {image} className = ' h-14 rounded-full'></img>
    </div>
  )
}

export default Message