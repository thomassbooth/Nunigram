import React from 'react'
import Post from './Post'
import Story from '../Components/Stories/Story'
import Auth0login from '../Components/Auth0/Auth0login'
import Auth0logout from '../Components/Auth0/Auth0logout'
import Auth0profile from '../Components/Auth0/Auth0profile'
import Center_Right from './Center_Right'

const Center = () => {
    let storyId = 0;
    let postId = 0;
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
            "location": ""
        },
        "comments": {
            "count": 123
            
        }
    }]
    
    let storiesData = [{},{},{},{},{},{},{}]
  return (
    <div className = 'flex mt-7'>
        <div className = 'w-[500px]'>
            {/* stories bar */}
            <div className = 'flex justify-center'>
                {storiesData.map((story) => {
                    storyId += 1;
                    return <Story id = {storyId} storyData = {story}/>
                })}    
            </div>
            <div className = 'mt-10'>
                {/* all posts */}
                {postsData.map((post) => {
                    postId += 1;
                    return <Post id = {postId} postData = {post}/>
                })}    
            </div>
            
        </div>
        <Center_Right/>
    </div>
  )
}

export default Center