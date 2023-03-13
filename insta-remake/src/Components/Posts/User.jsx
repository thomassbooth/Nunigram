import React from 'react'
import { Link } from 'react-router-dom'

const User = ({name, linkName, location, picture}) => {
  return (
        <div className = "justify-between flex items-center h-10 my-2 text-sm">
            <div className = "flex items-center">
                <Link to = {name} className = 'mx-3'><img src = {picture} className = "rounded-full w-9 h-9"></img></Link>
                <div>
                    <div>
                        <Link to = {linkName} className = "font-semibold">
                            {name}
                        </Link>
                    </div>
                    <div className = "font-light">
                        <a href = "">
                            {location}
                        </a>
                    </div>
                </div>
            </div>      
            <button className = 'mx-5'>
                <i className = "fa fa-ellipsis-h"></i>
            </button>
        </div>
  )
}

export default User