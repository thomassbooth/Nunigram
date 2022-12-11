import React from 'react'

const Reactions = ({likes, name, caption}) => {
  return (
    <div>
        <div className = "my-2 text-2xl flex justify-between">
            <div>
                <button className = "hover:opacity-40 reaction-heart"><i className = "fa fa-heart-o mr-4"></i></button>
                <button className = "hover:opacity-40"><i className = "fa fa-comment-o mr-4"></i></button>
                <button className = "hover:opacity-40"><i className = "fa fa-paper-plane-o"></i></button>
            </div>
            <button className = "hover:opacity-50"><i className = "fa fa-bookmark-o"></i></button>
        </div>
        <button className = "mb-1 text-sm font-semibold">
            {likes} likes
        </button>
        <div className = "text-sm">
            <a href = "" className = "font-semibold">{name}</a> {caption}
        </div>
    </div>
    
  )
}

export default Reactions