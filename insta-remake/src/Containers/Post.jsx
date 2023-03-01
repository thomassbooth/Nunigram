import React from 'react'
import Image from '../Components/Posts/Image'
import Comment from '../Components/Posts/Comment'
import Profile from '../Components/Posts/Profile'
import Reactions from '../Components/Posts/Reactions'
import {useState} from 'react'

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
    <div className = "">
        <Profile name = {postData.profile.name} location = {postData.profile.location} picture = {postData.image} />
        <Image image = {postData.image} onLike = {onLike}/>
        <Reactions bookmark = {bookmarked} onMark = {onMark} liked = {liked} onLike = {onLike} likes = {postData.likes} name = {postData.profile.name} caption = {postData.caption}/>
        <Comment commentCount = {postData.comments.count} comment = {"Hot cat man"}/>
        <hr className = "my-10"></hr>
    </div>
  )
}

export default Post