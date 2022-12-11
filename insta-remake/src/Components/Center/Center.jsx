import React from 'react'
import Post from './Posts/Post'

const Center = () => {
    let postsData = [{
        "image": "images/cat.jpg",
        "likes": 123,
        "liked": false,
        "caption": "its me dave guys",
        "profile": {
            "name": "thomassboothh",
            "picture": "",
            "location": "Brighton"
        },
        "comments": {
            "count": 123
            
        }
    },
    {
        "image": "images/cat.jpg",
        "likes": 123,
        "liked": false,
        "caption": "wagwan my drilla",
        "profile": {
            "name": "defo not dave",
            "picture": "",
            "location": "Brighton"
        },
        "comments": {
            "count": 123
            
        }
    }]

  return (
    <div className='flex'>
        <div className = "ml-[20%]">
            
        </div>
        <div className='flex justify-center w-[80%]'>
            <div className = 'w-[500px]'>
                {postsData.map((post) => {
                    return <Post postData = {post}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Center