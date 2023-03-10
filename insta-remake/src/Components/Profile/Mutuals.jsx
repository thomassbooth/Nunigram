import React from 'react'

function Mutuals({mutualFollowers}) {
    console.log(mutualFollowers)
    let followedByMiddle = mutualFollowers.slice(0, 3).join(', ')
    
    let followedByEnd = ''
    if (mutualFollowers.length > 3){
      followedByEnd = ' + ' + String(mutualFollowers.length - 3) + ' more'
    }
  return (
    <div className = 'mt-3 text-xs'>
        <button>
            <span className = 'opacity-50'>Followed by </span>
            <span>{followedByMiddle}</span>
            <span className = 'opacity-50'>{followedByEnd}</span>
        </button>
    </div>
  )
}

export default Mutuals