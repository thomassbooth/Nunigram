import React from 'react'
import { useState } from 'react'

function Message({messageData, openMessage, setOpenMessage}) {
    
    console.log(messageData)
    
    if (openMessage.name === messageData.name){var backgroundStyle = 'bg-gray-100 py-3'}

  return (
    <div onClick = {() => {setOpenMessage(messageData)}} className = {backgroundStyle ? backgroundStyle : 'hover:bg-gray-50 py-3'}>
        <div className = 'flex items-center'>
            <img src = {messageData.image} className = ' h-14 rounded-full ml-5 mr-3 border border-gray-400'></img>
            <div>
                <p className = 'font-normal text-sm'>{messageData.name}</p>
                <p className = 'font-normal text-sm opacity-40'>Active {messageData.active}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Message