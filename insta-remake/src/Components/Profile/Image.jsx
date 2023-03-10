import React from 'react'

function Image({data, user, watchedStory}) {
    let storyClass = ''
    if (!data.story.watched){
        storyClass = 'ring-offset-[5px] ring-rose-900 ring-[3.5px]'
    } else {
        storyClass = 'ring-offset-[5px] ring-grey-500 ring-[2px]'
    }
  return (
    <div>
        {data.story.exists ? 
            <button onClick = {() => {watchedStory()}} className = 'mr-20 ml-20'>
                <img src = 'images/cat.jpg' className = {'w-[175px] rounded-full border border-gray-500 ' + storyClass}></img>
            </button> : <div className = 'mr-20 ml-20'><img src = 'images/cat.jpg' className = 'w-[175px] rounded-full border border-gray-500'></img></div>}
    </div>
  )
}

export default Image