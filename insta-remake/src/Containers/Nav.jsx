import Button from '../Components/Nav/Button'
import Title from '../Components/Nav/Title'
import { useAuth0 } from '@auth0/auth0-react'


const Nav = () => {
  const {user, isAuthenticated} = useAuth0()

  return (
    <div className=' fixed w-1/5 h-screen bg-white border-r-[1px]'>
      {isAuthenticated ? <nav className = 'flex flex-col px-3 pl-5 border-b-1'>
          <Title/>
          <Button text = {"Home"} icon = {"fa-home"} link = '/' />
          <Button text = {"Search"} icon = {"fa-search"} link = '/' />
          <Button text = {"Explore"} icon = {"fa-compass"} link = '/explore' />
          <Button text = {"Messages"} icon = {"fa-paper-plane-o"} link = '/message' />
          <Button text = {"Notifications"} icon = {"fa-heart-o"} link = '/' />
          <Button text = {"Create"} icon = {"fa-plus-square-o"} link = '/' />
          <Button text = {"Profile"} icon = {""} img = {true} link = {user.nickname} />
        </nav> : <div className = 'pl-5 border-b-1'></div>}
    </div>
  )
}

export default Nav