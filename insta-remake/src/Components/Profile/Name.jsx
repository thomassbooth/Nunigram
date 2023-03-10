import React from 'react'

function Name({personalAcc, handle, data, followedUser}) {
    
    let userButtons = 
    <div className = 'flex items-center'>
        <button className = 'bg-gray-200 hover:bg-gray-300 font-[450] text-[14.5px] text-black-100 py-1.5 px-5 ml-10 rounded-lg items-center'>Edit Profile</button>
        <button><i className = 'fa text-[20px] fa-cog ml-3'></i></button>
    </div>
    
    if(!personalAcc){
        userButtons = 
        <div className = 'flex items-center'>{!data.followed 
        ? <button onClick = {() => {followedUser()}} className = 'bg-blue-500 hover:bg-blue-600 font-[450] text-[14.5px] text-white py-1.5 px-5 ml-10 rounded-lg items-center'>Follow</button>
        : <button onClick = {() => {followedUser()}}className = 'bg-gray-200 hover:bg-gray-300 font-[450] text-[14.5px] text-black-100 py-1.5 px-5 ml-10 rounded-lg items-center'>Following <i className = 'fa fa-lg fa-angle-down'></i></button>}
            <button className = 'bg-gray-200 hover:bg-gray-300 font-[450] text-[14.5px] text-black-100 py-1.5 px-5 ml-2 rounded-lg items-center'>Message</button>
            <button className = 'bg-gray-200 hover:bg-gray-300 font-[450] text-[14.5px] text-black-100 py-1.5 px-1.5 ml-2 rounded-lg items-center'><i className = 'fa fa-user-o px-1'></i></button>
            <button className = 'ml-4 flex items-center'>
                <i className = 'fa text-[4px] fa-circle '></i>
                <i className = 'fa text-[4px] fa-circle pl-1'></i>
                <i className = 'fa text-[4px] fa-circle pl-1'></i>
            </button>
        </div>
    }
  return (
    <div>
        <div className = 'flex items-center'>
            <span className = 'text-xl tracking-wide font-light'>{handle}</span>
            {userButtons}
            
        </div>
    </div>
  )
}

export default Name