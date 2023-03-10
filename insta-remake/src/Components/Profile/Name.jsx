import React from 'react'

function Name({personalAcc, handle, data, followedUser}) {
    
  return (
    <div>
        <div className = 'flex items-center'>
            
            <span className = 'text-xl tracking-wide font-light'>{handle}</span>
            {!data.followed 
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
        <div className='my-10'></div>
        <ul className = 'flex text-lg tracking-wide '>
            <li className = 'mr-12'>
                <div>
                    <span>{data.posts}</span>
                    <span className = 'font-extralight'> posts</span>
                </div>
            </li>
            <li className = 'mr-8'>
                <div>
                    <span>{data.followers}</span>
                    <span className = 'font-extralight '> follwers</span>
                </div>
            </li>
            <li>
                <div>
                    <span>{data.following}</span>
                    <span className = 'font-extralight '> following</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Name