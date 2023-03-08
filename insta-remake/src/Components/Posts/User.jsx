import React from 'react'
import { Link } from 'react-router-dom'

const User = ({name, location, picture}) => {
  return (
        <div className = "justify-between flex items-center h-10 my-2 text-sm">
            <div className = "flex items-center">
                <Link to = {name} className = 'mx-3'><img src = {picture} className = "rounded-full w-9 h-9"></img></Link>
                <div>
                    <div>
                        <Link to = {name} className = "font-semibold">
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
            <a href="">
                <i className = "fa fa-ellipsis-h"></i>
            </a>
        </div>
  )
}

export default User