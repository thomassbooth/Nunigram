import React from 'react'
import { useState } from 'react'
import TagSearch from './TagSearch'

function TagIcon({removeTag, account, id, x, y, submitted, submit_tag}) {
  const [search, setSearch] = useState([{nick: 'nuni24', name:'Nuni smells', image: 'images/cat.jpg'}, {nick: 'DavidDP', name:'Dave Payne', image: 'images/storm.jpeg'}, {nick: 'nuni24', name:'', image: 'images/cat.jpg'}, {nick: 'nuni24', name:'', image: 'images/cat.jpg'}, {nick: 'nuni24', name:'', image: 'images/cat.jpg'}])

  return (
    <div>
    {submitted 
    ? <div className = ' text-white bg-black opacity-80 flex items-center rounded-lg absolute' style ={{left: x-50, top: y-5}}>
        <div className = 'ml-3 mr-2 my-1 flex items-center'>
          <span className = 'font-medium text-sm'>{account.nick}</span>
          <button onClick = {() => {removeTag(id)}}><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w- h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg></span></button>
        <div className = ' bg-black w-[15px] h-[11px] rotate-45 absolute -translate-y-3 translate-x-10 -z-10'>
        </div>
        </div> 
    </div>

    : <div className = 'w-[300px] shadow-xl z-10 bg-white rounded-lg absolute border' style ={{left: x-29, top: y+8}}>
        <div className = 'h-[40px] w-full border-b flex items-center'>
          <div className = ' bg-white border-t border-l w-[15px] h-[11px] rotate-45 -translate-y-5 translate-x-5'>
          </div>
          <span className = 'ml-2 mr-2 font-medium'>Tag:</span>
          <input placeHolder = 'Search' className = 'placeholder-gray-500 w-full placeholder-opacity-30 text-sm outline-none'></input>
          <div onClick = {() => {removeTag(id)}} className = 'mx-2 text-gray-300 hover:text-gray-400'><i className = 'fa fa-times-circle'></i></div>
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