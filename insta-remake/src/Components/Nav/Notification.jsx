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
                    return <button className = 'h-7 text-xs px-4 rounded-lg font-medium bg-blue-400 hover:bg-blue-500 text-white'>Follow</button>
                } else {
                    return <button className = 'h-7 text-xs px-3 rounded-lg font-medium bg-gray-200 hover:bg-gray-300'>Following</button>
                }
                
            
            default:
                break;
        }
    }

  return (
    <div className = 'flex items-center justify-between'>
        <img className = 'w-9 h-9 rounded-full' src = {img}></img>
        <div>
            <span><Link to = {`/${account}`}>{account}</Link></span>
        </div>
        {typeRender()}
    </div>
  )
}

export default Notification