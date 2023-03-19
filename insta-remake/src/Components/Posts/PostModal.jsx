import React, { useRef } from 'react'
import Comment from './Comment'
import Reactions from './Reactions'
import User from './User'

function PostModal({postModalData, account}) {
    const commentRef = useRef()

    const comments =  [{account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'davepayne52', image: 'images/cat.jpg', likes: 1, comment: 'looking sexy my friend', date: '5w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}, {account: 'pooni', image: 'images/storm.jpeg', likes: 2, comment: 'this is a test comment', date: '7w'}]

  function handleCommentClick() {
    commentRef.current.focus()
  }

  return (
    <div className = 'flex'>
        <img className = 'h-[600px]' src = {postModalData.src}></img>
        <div className = 'flex-col w-[450px] m-2'>
        <User  name = {account} location = {postModalData.location} picture = 'images/cat.jpg'/>
        <hr className = 'mt-3'></hr>
        <div className='h-[370px] overflow-auto'>
            <div className = ''>
            {/* CAPTION OF THE POST  */}
            <Comment account = {account} image = {'images/cat.jpg'} comment = {postModalData.caption} caption = {true} date = {postModalData.fromToday}/>
            {comments.map((comment) => {
                return <Comment account = {comment.account} image = {comment.image} likes = {comment.likes} comment = {comment.comment} date = {comment.date} onClose = {() => {setIsOpen(false)}}/>})}
            </div>
        </div>
        <hr className = 'my-1'></hr>
        <Reactions likes = {postModalData.likes} commentHandle = {handleCommentClick}/>
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