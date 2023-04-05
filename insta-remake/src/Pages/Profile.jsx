import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Suspense } from 'react'
import { setup } from '../features/profile/profileSlice'
import ImageTypes from '../Components/Profile/ImageTypes'
import Post from '../Components/Profile/Post'
import About from '../Containers/About'

function Profile() {
    const profileData = useSelector((state) => state.profile.value.profile)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const posts = useSelector((state) => state.profile.value.posts)
    const { handle } = useParams();
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
        icon: 'fa-address-book-o',
      }}
      
    const updateTab = (tabName) => {setActive(tabName)}
    
    function renderPosts() {
      switch(activeTab){
        case 'POSTS':
          return (
            <div className = 'flex flex-wrap justify-between'>
              {posts.map((post, index) => {
                  return <Post src = {post.src} comments = {post.comments} likes = {post.likes} index = {index} profileType = {'posts'}/>})}
            </div>
          )
        case 'SAVED':
          return 'SAVED'

        case 'TAGGED':
          let tags= [{likes: 50, comments: 10, src: 'images/storm.jpeg', nickname: 'hamad'},{likes: 50, comments: 10, src: 'images/storm.jpeg', nickname: 'hamad'},{likes: 50, comments: 10, src: 'images/storm.jpeg', nickname: 'hamad'},{likes: 50, comments: 10, src: 'images/storm.jpeg', nickname: 'hamad'},{likes: 50, comments: 10, src: 'images/storm.jpeg', nickname: 'hamad'},{likes: 50, comments: 10, src: 'images/storm.jpeg', nickname: 'hamad'}]
          console.log('hello im inside the tagged part')
          return (
            <div className = 'flex flex-wrap justify-between'>
              {tags.map((tag, index) => {
                  return <Post src = {tag.src} likes = {tag.likes} comments = {tag.comments} index = {index} />})}
            </div>
          )
        default:
          break;
      }
    }

    useEffect(() => {
      dispatch(setup({profile: {
          nickname: 'thomassboothh',
          name: 'Tom Booth',
          pronouns: 'he/him',
          about: 'test datatest data123',
          occupation: 'Software Engineer',
          mutualFollowers: ['Dave', 'bigtimmy', 'stevenHawk', 'stinkyPeter'],
          posts: 15,
          followers: 388,
          following: 384,
          followed: false,
          story: {
            exists: true,
            watched: false
          },},
          posts:[{likes: 50, comments: 10, src:'images/cat.jpg', caption: 'Home sweet home',
          
          
          liked: false,
          location: 'Hatta Dam, Dubai, UAE',
          posted: 'JANUARY 20',
          fromToday: '8w'},{likes: 50, comments: 10, src:'images/cat.jpg', caption: 'Home sweet home',
          
          
          liked: false,
          location: 'Hatta Dam, Dubai, UAE',
          posted: 'JANUARY 20',
          fromToday: '8w'},{likes: 50, comments: 10, src:'images/cat.jpg', caption: 'Home sweet home',
          
          
          liked: false,
          location: 'Hatta Dam, Dubai, UAE',
          posted: 'JANUARY 20',
          fromToday: '8w'},{likes: 50, comments: 10, src:'images/cat.jpg', caption: 'Home sweet home',
          
          
          liked: false,
          location: 'Hatta Dam, Dubai, UAE',
          posted: 'JANUARY 20',
          fromToday: '8w'},{likes: 50, comments: 10, src:'images/cat.jpg', caption: 'Home sweet home',
          
          
          liked: false,
          location: 'Hatta Dam, Dubai, UAE',
          posted: 'JANUARY 20',
          fromToday: '8w'},{likes: 50, comments: 10, src:'images/cat.jpg', caption: 'Home sweet home',
          
          
          liked: false,
          location: 'Hatta Dam, Dubai, UAE',
          posted: 'JANUARY 20',
          fromToday: '8w'}]
        }))
        setLoading(false)
      
    }, [])
    
    const watchedStory = () => {setProfile({...profileData, story:{exists: true, watched: true}})}
    const followedUser = () => {setProfile({...profileData,followed: !profileData.followed})}


  return (
    !loading && <div className = 'w-5/6 flex justify-center'>
      <title>{profileData.name}</title>
      <div className = 'w-[1000px]'>
        <About handle = {handle} data = {profileData} watchedStory = {watchedStory} followedUser = {followedUser}/>
        <div className = 'border-t mt-10'>
          <div className = 'flex justify-center space-x-20'>
            {Object.keys(postTypes).map((tab) => {
              return <ImageTypes key = {tab} tab = {postTypes[tab]} activeTab = {activeTab} updateTab = {updateTab}/>
            })}
          </div>
          {renderPosts()}
        </div>
      </div>
        
    </div>
  )
}

export default Profile