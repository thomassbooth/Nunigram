import React from 'react'
import User from '../Components/Posts/User'
import Reactions from '../Components/Posts/Reactions'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import PostModal from '../Components/Posts/PostModal'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../features/posts/postsSlice'

const Post = ({index, type, profileType}) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setMarked] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const onMark = () => {
    setMarked(!bookmarked)
  }

  switch (type){
    case 'posts':
      var postData = useSelector((state) => state[type].value)[index];
      break;

    case 'profile':
      var postData = useSelector((state) => state[type].value)[profileType][index];
      break;
  }

  const onLike = () => {
    dispatch(like({index: index, type: 'feed'}))
  }

  return (
    <div className = "mx-10">
        <User name = {postData.profile.name} linkName = {postData.profile.name} location = {postData.profile.location} picture = {postData.src} />
        <img src={postData.src} className = "rounded-sm" alt = 'This is meant to be a cat' onDoubleClick={onLike}/>
        <Reactions index= {index} onMark = {onMark} onLike = {onLike} type = {type}/>
        <div className = "text-sm"> 
            <Link to = {postData.profile.name} className = "font-semibold">{postData.profile.name}</Link> {postData.caption}
        </div>
        <div className = "text-sm opacity-50 p">
          <button onClick = {() => {setIsOpen(true)}}>
              View all {postData.comments.count} comments
          </button>
          {isOpen ? <Modal open = {isOpen} onClose = {() => {setIsOpen(false)}}>
          <PostModal index = {index} type = {'posts'}/>
          
        
      </Modal> : null}
        </div>
        <hr className = "my-5"></hr>
    </div>
  )
}

export default Post