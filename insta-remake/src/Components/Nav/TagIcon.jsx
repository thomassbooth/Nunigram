import React from 'react'
import { useState } from 'react'
import TagSearch from './TagSearch'

function TagIcon({account, id, x, y, submitted, submit_tag}) {
  const [search, setSearch] = useState([{nick: 'nuni24', name:'Nuni smells', image: 'images/cat.jpg'}, {nick: 'DavidDP', name:'Dave Payne', image: 'images/storm.jpeg'}, {nick: 'nuni24', name:'', image: 'images/cat.jpg'}, {nick: 'nuni24', name:'', image: 'images/cat.jpg'}, {nick: 'nuni24', name:'', image: 'images/cat.jpg'}])

  return (
    <div>
    {submitted 
    ? <div className = 'h-[30px] w-[100px] text-white bg-gray-700 rounded-lg absolute flex' style ={{left: x-50, top: y}}>
        <span>{account.nick}</span>
    </div>

    : <div className = 'w-[300px] shadow-xl z-10 bg-white rounded-lg absolute border' style ={{left: x-29, top: y+8}}>
        <div className = 'h-[40px] w-full border-b flex items-center'>
          <div className = ' bg-white border-t border-l w-[15px] h-[11px] rotate-45 -translate-y-5 translate-x-5'>
          </div>
          <span className = 'ml-2 mr-2 font-medium'>Tag:</span>
          <input placeHolder = 'Search' className = 'placeholder-gray-500 w-full placeholder-opacity-30 text-sm outline-none'></input>
          <span className = 'mx-2 opacity-25'><i className = 'fa fa-times-circle'></i></span>
        </div>
        <div className = 'h-[200px] overflow-auto'>
        {search.map((account) => {
          return <TagSearch  tagId = {id} account = {account} submitTag = {submit_tag}/>
        })

        }
        </div>
      </div>}
    </div>
    
  )
}

export default TagIcon