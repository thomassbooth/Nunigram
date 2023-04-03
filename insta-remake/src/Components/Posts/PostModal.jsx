import React, { useRef } from 'react'
import Comment from './Comment'
import Reactions from './Reactions'
import User from './User'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../../features/posts/postsSlice'

function PostModal({index, type, profileType}) {
    const dispatch = useDispatch();
    const commentRef = useRef();

    switch (type){
      case 'posts':
        var postModalData = useSelector((state) => state[type].value)[index];
        var profile = postModalData.profile
        break;

      case 'profile':
        var postModalData = useSelector((state) => state[type].value)[profileType][index];
        var profile = useSelector((state) => state.profile.value.profile)
        break;
    }
    const comments =  [{account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'davepayne52', image: 'images/cat.jpg', likes: 1, comment: 'looking sexy my friend', date: '5w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}]

  function handleCommentClick() {
    commentRef.current.focus()
  }

  return (
    <div className = 'flex'>
        <img onDoubleClick = {() => {dispatch(like({index: index, type: type}))}} className = 'h-[600px]' src = {postModalData.src}></img>
        <div className = 'flex-col w-[450px] m-2'>
        <User name = {profile.name} location = {postModalData.location} picture = 'images/cat.jpg'/>
        <hr className = 'mt-3'></hr>
        <div className='h-[370px] overflow-auto'>
            <div className = ''>
            {/* CAPTION OF THE POST  */}
            <Comment account = {profile.name} image = {'images/cat.jpg'} comment = {postModalData.caption} caption = {true} date = {postModalData.fromToday}/>
            {comments.map((comment) => {
                return <Comment account = {comment.account} image = {comment.image} likes = {comment.likes} comment = {comment.comment} date = {comment.date} onClose = {() => {setIsOpen(false)}}/>})}
            </div>
        </div>
        <hr className = 'my-1'></hr>
        <Reactions index = {index} likes = {postModalData.likes} type = {type} profileType = {profileType} liked = {postModalData.liked} commentHandle = {handleCommentClick} />
        <p className = 'text-[10px] opacity-50 mb-2'>{postModalData.posted}</p>
        <hr className = ''></hr>
        <div className = 'mt-3 flex text-sm align-center'>
            <button><i className = 'mx-2 text-lg fa fa-smile-o'></i></button>
            <form action="POST" className = 'flex'>
            <textarea ref = {commentRef} rows = {1} placeholder = 'Add a comment...' className = 'w-[380px] mt-1 font-light outline-none resize-none'></textarea>
            <button type = 'submit' className = 'text-blue-500 text-sm px-1'>Post</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default PostModal