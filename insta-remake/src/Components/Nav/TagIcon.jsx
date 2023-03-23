import React from 'react'

function TagIcon({id, x, y, submitted, submit_tag}) {
  return (
    <div>
    {submitted 
    ? <div className = 'h-[30px] w-[100px] bg-gray-700 rounded-lg absolute flex' style ={{left: x-50, top: y}}>
        <input placeholder = 'Tag a friend' className = 'w-full font-light bg-transparent text-white outline-none'/>
        <button onClick = {() => {submit_tag(id)}}><i className = 'fa fa-check'></i></button>
    </div>
    : <div className = 'w-[250px] shadow-xl z-10 bg-white rounded-lg absolute flex border' style ={{left: x-29, top: y+8}}>
        <div className = 'h-[40px] w-full border-b flex items-center'>
          <div className = ' bg-white w-[15px] h-[11px] rotate-45 -translate-y-5 translate-x-5'>
          </div>
          <span className = 'ml-2 mr-2 font-medium'>Tag:</span>
          <input placeHolder = 'Search' className = 'placeholder-gray-500 w-full placeholder-opacity-30 text-sm outline-none'></input>
          <span className = 'mx-2 opacity-25'><i className = 'fa fa-times-circle'></i></span>
        </div>
        <div className = 'h-[200px]'>
        </div>
      </div>}
    </div>
    
  )
}

export default TagIcon