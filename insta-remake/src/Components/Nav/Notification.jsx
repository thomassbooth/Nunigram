import React from 'react'

function Notification({img, account, follow, type, text}) {


    const typeRender = () => {
        switch (type){
            case 'like':
                break;
            
            case 'comment':
                
                break;

            case 'follow':
                if (!follow){
                    return <button className = 'px-5 py-3 rounded-lg font-medium bg-blue-400 hover:bg-blue-500 text-white'>Follow</button>
                } else {
                    return <button className = 'px-5 py-2 rounded-lg font-medium bg-gray-400'>Following</button>
                }
                
            
            default:
                break;
        }
    }

  return (
    <div className = 'flex'>
        <img className = 'w-9 h-9 rounded-full' src = {img}></img>
        <div>
            <span></span>
        </div>
        {typeRender()}
    </div>
  )
}

export default Notification