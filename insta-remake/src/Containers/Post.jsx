import React from 'react'

import User from '../Components/Posts/User'
import Reactions from '../Components/Posts/Reactions'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import PostModal from '../Components/Posts/PostModal'
import { useDispatch } from 'react-redux'
import { like } from '../features/posts/postsSlice'

const Post = ({postData, index}) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setMarked] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const onMark = () => {
    setMarked(!bookmarked)
  }

  const onLike = () => {
    dispatch(like(index))
  }

  return (
    <div className = "mx-10">
        <User name = {postData.profile.name} linkName = {postData.profile.name} location = {postData.profile.location} picture = {postData.src} />
        <img src={postData.src} className = "rounded-sm" alt = 'This is meant to be a cat' onDoubleClick={onLike}/>
        <Reactions index= {index} bookmark = {bookmarked} onMark = {onMark} liked = {liked} onLike = {onLike} likes = {postData.likes} name = {postData.profile.name} caption = {postData.caption}/>
        <div className = "text-sm"> 
            <Link to = {postData.profile.name} className = "font-semibold">{postData.profile.name}</Link> {postData.caption}
        </div>
        <div className = "text-sm opacity-50 p">
          <button onClick = {() => {setIsOpen(true)}}>
              View all {postData.comments.count} comments
          </button>
          {isOpen ? <Modal open = {isOpen} onClose = {() => {setIsOpen(false)}}>
          <PostModal type = {'feed'} index = {index}/>
          
        
      </Modal> : null}
        </div>
        <hr className = "my-5"></hr>
    </div>
  )
}

export default Post