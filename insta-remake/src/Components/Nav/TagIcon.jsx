import React from 'react'

function TagIcon({x, y}) {
  return (
    <div className = 'h-[20px] w-[100px] bg-gray-700 absolute flex' style ={{left: x-50, top: y-10}}>
        <input placeholder = 'Tag a friend' className = 'w-full font-light outline-none'/>
        <button></button>
    </div>
  )
}

export default TagIcon