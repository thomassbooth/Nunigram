import React from 'react'

function ProfilePosts() {
  return (
    <div className = 'border-t mt-16'>
      <div className = 'flex justify-center space-x-20'>
        <div className = 'flex items-center border-t-[0.5px] border-black'>
          <i className = 'fa fa-th mr-2'></i>
          <p>POSTS</p>
        </div>
        <div className = 'flex items-center border-t-[0.5px] border-black'>
          <p>SAVED</p>
        </div>
        <div className = 'flex items-center border-t-[0.5px] border-black'>
          <p>TAGGED</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePosts 