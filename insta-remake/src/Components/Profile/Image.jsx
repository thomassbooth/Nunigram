import React from 'react'

function Image({data, user, watchedStory}) {
    let storyClass = ''
    if (!data.story.watched){
        storyClass = 'rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5'
    } else {
        storyClass = 'rounded-full p-0.5 bg-gray-500'
    }
  return (
    <div>
        {data.story.exists ? 
            <button onClick = {() => {watchedStory()}} className = 'mr-20 ml-20 p-0.5'>
                <div className = {storyClass}>
                    <img src = 'images/cat.jpg' className = {'w-[175px] dark:bg-black bg-white p-1 rounded-full'}></img>
                </div>
            </button> : <div className = 'mr-20 ml-20'><img src = 'images/cat.jpg' className = 'w-[175px] rounded-full border border-gray-500'></img></div>}
    </div>
  )
}

export default Image