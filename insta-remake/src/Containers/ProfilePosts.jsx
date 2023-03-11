import React, { useState } from 'react'
import ImageTypes from '../Components/Profile/ImageTypes'

function ProfilePosts() {
  const [activeTab, setActive] = useState('POSTS')
  const postTypes = {
    1: {
      name: 'POSTS',
      icon: 'fa-th',
    },
    2: {
      name: 'SAVED',
      icon: 'fa-bookmark-o',
    },
    3: {
      name: 'TAGGED',
      icon: 'fa-th',
    }
}

  function updateTab(tabName) {
    setActive(tabName)
  }
  
  function renderPosts() {
    switch(activeTab){
      case 'POSTS':
        return 'POSTS'
      case 'SAVED':
        return 'SAVED'
      case 'TAGGED':
        return 'TAGGED'
      default:
        break;
    }
  }

  return (
    <div className = 'border-t mt-10'>
      <div className = 'flex justify-center space-x-20'>
        {Object.keys(postTypes).map((tab) => {
          return <ImageTypes key = {tab} tab = {postTypes[tab]} activeTab = {activeTab} updateTab = {updateTab}/>
        })}
      </div>
      {renderPosts()}
    </div>
  )
}

export default ProfilePosts 