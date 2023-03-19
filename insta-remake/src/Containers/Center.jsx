import React from 'react'
import Post from './Post'
import Story from '../Components/Stories/Story'
import Suggestion from '../Components/Suggestions/Suggestion'
import Auth0Profile from '../Components/Auth0/Auth0profile'

const Center = () => {
    let storyId = 0;
    let postId = 0;
    let postsData = [{
        "src": "images/cat.jpg",
        "likes": 123,
        "liked": false,
        "caption": "its me dave guys",
        "profile": {
            "name": "thomassboothh",
            "src": "images/cat.jpg",
            "location": "Brighton"
        },
        "comments": {
            "count": 123
            
        }
    },
    {
        "src": "images/cat.jpg",
        "likes": 123,
        "liked": false,
        "caption": "wagwan my drilla",
        "profile": {
            "name": "defo not dave",
            "src": "images/storm.jpeg",
            "location": ""
        },
        "comments": {
            "count": 111
            
        }
    }]
    
    let suggestions = [{img: 'images/cat.jpg', name: 'poonineedstoilet', followedBy: 'bigd'},
    {img: 'images/cat.jpg', name: 'hedgetrimuk', followedBy: 'davepaynedave'}, 
    {img: 'images/cat.jpg', name: 'bigdave', followedBy: 'davepaynedave'},
    {img: 'images/cat.jpg', name: 'danlockk10', followedBy: 'davepaynedave'} ]

    
    let storiesData = [{},{},{},{},{},{},{},]

  return (
    <div className = 'flex mt-7'>
        <div className = 'w-[550px]'>
            {/* stories bar */}
            <div className = 'flex justify-center space-x-6'>
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
        <div className = 'ml-20 '>
            <Auth0Profile/>
            <div className = 'flex my-4'>
                <p className = 'w-[250px] text-[13px] font-semibold opacity-50'>Suggestions for you</p>
                <button className = 'text-xs tracking-tight hover:opacity-40'> See All</button>
            </div>
            <div className = 'space-y-3'>
                {suggestions.map((suggestion) => {
                return <Suggestion img = {suggestion.img} name = {suggestion.name} followedBy = {suggestions.followedBy}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Center