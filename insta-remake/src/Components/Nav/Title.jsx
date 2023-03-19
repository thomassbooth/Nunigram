import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../Auth0/Auth0login'
const Title = ({type}) => {
  return (
    <div className = 'flex items-center h-20 pl-3'>
        <Link className = 'w-52'>
            Nunigram
        </Link>
    </div>
  )
}

export default Title