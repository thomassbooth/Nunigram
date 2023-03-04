import Button from '../Components/Nav/Button'
import Title from '../Components/Nav/Title'

const Nav = () => {
  return (
    <div className=' fixed w-1/5 h-screen bg-white border-r-[1px]'>
      <nav className = 'flex flex-col px-3 pl-5 border-b-1'>
          <Title/>
          <Button text = {"Home"} icon = {"fa-home"}/>
          <Button text = {"Search"} icon = {"fa-search"}/>
          <Button text = {"Explore"} icon = {"fa-compass"}/>
          <Button text = {"Messages"} icon = {"fa-paper-plane-o"}/>
          <Button text = {"Notifications"} icon = {"fa-heart-o"}/>
          <Button text = {"Create"} icon = {"fa-plus-square-o"}/>
          <Button text = {"Profile"} icon = {""} img = {true}/>
      </nav>
    </div>
  )
}

export default Nav