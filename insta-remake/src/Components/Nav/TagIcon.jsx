import React from 'react'

function TagIcon({id, x, y, submit_tag}) {
  return (
    <div className = 'h-[30px] w-[100px] bg-gray-700 rounded-lg absolute flex' style ={{left: x-50, top: y}}>
        
        <input placeholder = 'Tag a friend' className = 'w-full font-light bg-transparent text-white outline-none'/>
        <button onClick = {() => {submit_tag(id)}}><i className = 'fa fa-check'></i></button>
        
    </div>
    
  )
}

export default TagIcon