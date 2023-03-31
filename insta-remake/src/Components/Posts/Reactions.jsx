import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../../features/posts/postsSlice'

const Reactions = ({onMark, commentHandle, index, type}) => {
    const dispatch = useDispatch()
    let postData = useSelector((state) => state.posts.value)[type][index]

    let likedClass = "fa fa-heart-o mr-5"
    let markedClass = "fa fa-bookmark-o"
    if (postData.liked == true) {
        likedClass = "fa fa-heart-o mr-5 bg-red-300"
    }
    
    if (postData.bookmark == true) {
        markedClass = "fa fa-bookmark-o bg-red-300"
    }
    
  return (
    <div>
        <div className = "my-2 text-2xl flex justify-between">
            <div>
                <button className = "hover:opacity-40" onClick={()=>dispatch(like(index))}><i className = {likedClass}></i></button>
                <button onClick = {() => {commentHandle ? commentHandle() : ''}} className = "hover:opacity-40"><i className = "fa fa-comment-o mr-5"></i></button>
                <button className = "hover:opacity-40"><i className = "fa fa-paper-plane-o"></i></button>
            </div>
            <button className = "hover:opacity-50" onClick = {onMark}><i className = {markedClass}></i></button>
        </div>
        <button className = "mb-1 text-sm font-semibold">
            {postData.likes} likes
        </button>
    </div>
    
  )
}

export default Reactions