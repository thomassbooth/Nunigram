import React from 'react'

const Image = ({image, onLike}) => {
  return (
    <div>
      <img src={image} className = "rounded-sm" alt = 'This is meant to be a cat' onDoubleClick={onLike}/>
    </div>
  )
} 

export default Image