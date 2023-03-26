import React from 'react'
import { Link } from 'react-router-dom';

function Notification({img, account, follow, type, text}) {


    const typeRender = () => {
        switch (type){
            case 'like':
                break;
            
            case 'comment':
                
                break;

            case 'follow':
                if (!follow){
                    return <button className = 'h-9 text-sm px-4 rounded-lg font-medium bg-blue-400 hover:bg-blue-500 text-white'>Follow</button>
                } else {
                    return <button className = 'h-9 text-sm px-4 rounded-lg font-medium bg-gray-200 hover:bg-gray-300'>Following</button>
                }
                
            
            default:
                break;
        }
    }

  return (
    <div className = 'flex items-center justify-between hover:bg-gray-100 px-5 py-2'>
        <img className = 'w-12 h-12 rounded-full' src = {img}></img>
        <p className = 'leading-tight ml-2  '>
            <span className = 'text-sm font-medium'><a href = {`/${account}`}>{account + ' '}</a></span>
            <span className = 'text-sm'>{text}</span>
        </p>
        {typeRender()}
    </div>
  )
}

export default Notification