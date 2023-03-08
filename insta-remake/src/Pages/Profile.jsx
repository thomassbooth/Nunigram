import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {handle} = useParams()

  return (
    <div>
        {handle}
        
    </div>
  )
}

export default Profile