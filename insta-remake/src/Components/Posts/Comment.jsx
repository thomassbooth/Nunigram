import React from 'react'

const Comment = ({commentCount, comments}) => {

  return (
    <div className = "text-sm opacity-50 p">
        <button>
            View all {commentCount} comments
        </button>
        
    </div>
  )
}

export default Comment