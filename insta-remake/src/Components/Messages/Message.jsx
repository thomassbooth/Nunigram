import React from 'react'

function Message({image = 'images/cat.jpg'}) {
  return (
    <div>
        <img src = {image} className = ' h-14 rounded-full'></img>
    </div>
  )
}

export default Message