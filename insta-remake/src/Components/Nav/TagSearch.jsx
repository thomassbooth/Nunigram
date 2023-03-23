import React from 'react'

function TagSearch({tagId, account, submitTag}) {
  return (
    <div onClick = {() => {submitTag(tagId, account)}} className = 'hover:bg-gray-100 flex items-center'>
        <img className = 'rounded-full mx-3 my-2 w-12 h-12 border border-gray-400' src = {account.image}></img>
        <div className = 'flex flex-col justify-center'>
            <span className = 'text-sm font-medium'>{account.nick}</span>
            <span className = 'text-sm text-gray-400 font-light'>{account.name}</span>
        </div>
    </div>
  )
}

export default TagSearch