import React from 'react'
import { Link } from 'react-router-dom'

function Suggestion({img, name, followedBy}) {


  return (
    <div className = 'flex'>
      <div className = 'w-[250px] flex content-center '>
        <Link to = {name}><img src = {img} className = "border border-gray-400 rounded-full w-9 h-9 mr-3"></img></Link>
        <div>
          <Link to = {name} className = 'tracking-tight text-[13px] text-gray-800 font-medium'>{name}</Link>
          <p className = 'tracking-tight text-[11.5px] opacity-40'>Followed by {followedBy}</p>
        </div>
      </div>
      <button className = 'text-xs font-medium tracking-tight text-blue-500 hover:text-blue-900'>Follow</button>
    </div>
  )
}

export default Suggestion