import React from 'react'

function Messages() {
  document.body.style.overflow = 'hidden' 
  return (
    <div className = 'w-screen h-screen bg-gray-50'>
      <div className = 'py-6 h-full w-full flex justify-center'>
        <div className = 'flex h-full border border-gray-300 rounded-sm w-[1000px] bg-white'>
          <div className = 'w-[350px] border-r border-gray-300 h-full'>
            <div className = 'h-[60px] border-b border-gray-300'>
              
            </div>
          </div>
          <div className = 'w-[650px] h-full'>
            <div className = 'h-[60px] border-b border-gray-300'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages