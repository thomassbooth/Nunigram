import React from 'react'

const Image = ({image}) => {
  console.log(image);
  return (
    <div>
      <img src={image} className = "rounded-sm" alt = 'This is meant to be a cat'/>
    </div>
  )
} 

export default Image