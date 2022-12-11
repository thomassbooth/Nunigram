import React from 'react'
import Image from './Image'
import Comment from './Comment'
import Profile from './Profile'
import Reactions from './Reactions'

const Post = ({postData}) => {
    console.log(postData);
  return (
    <div className = "">
        <Profile name = {postData.profile.name} location = {postData.profile.location} picture = {postData.image} />
        <Image image = {postData.image}/>
        <Reactions likes = {postData.likes} name = {postData.profile.name} caption = {postData.caption}/>
        <Comment commentCount = {postData.comments.count} comment = {"Hot cat man"}/>

        <hr className = "my-10"></hr>
    </div>
  )
}

export default Post