import React from 'react'
import Image from '../Components/Posts/Image'
import Comment from '../Components/Posts/Comment'
import User from '../Components/Posts/User'
import Reactions from '../Components/Posts/Reactions'
import {useState} from 'react'
import { Link } from 'react-router-dom'

const Post = ({postData}) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setMarked] = useState(false);

  const onMark = () => {
    setMarked(!bookmarked)
  }

  const onLike = () => {
    setLiked(!liked);
  }

  return (
    <div className = "mx-10">
        <User name = {postData.profile.name} linkName = {postData.profile.name} location = {postData.profile.location} picture = {postData.image} />
        <img src={postData.image} className = "rounded-sm" alt = 'This is meant to be a cat' onDoubleClick={onLike}/>
        <Reactions bookmark = {bookmarked} onMark = {onMark} liked = {liked} onLike = {onLike} likes = {postData.likes} name = {postData.profile.name} caption = {postData.caption}/>
        <div className = "text-sm"> 
            <Link to = {postData.profile.name} className = "font-semibold">{postData.profile.name}</Link> {postData.caption}
        </div>
        <div className = "text-sm opacity-50 p">
          <button>
              View all {postData.comments.count} comments
          </button>
        </div>
        <hr className = "my-5"></hr>
    </div>
  )
}

export default Post