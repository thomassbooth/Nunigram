import React from 'react'

const Profile = ({name, location, picture}) => {
  return (
        <div className = "justify-between flex items-center h-10 my-2 text-sm">
            <div className = "flex items-center">
                <img src = {picture} className = "rounded-full w-9 h-9 mx-3"></img>
                <div>
                    <div>
                        <a href = "" className = "font-semibold">
                            {name}
                        </a>
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

export default Profile