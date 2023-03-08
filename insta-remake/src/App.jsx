import './App.css'
import Nav from './Containers/Nav'
import {createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Messages from './Pages/Messages'
import Profile from './Pages/Profile'
import { useAuth0 } from '@auth0/auth0-react';
import Explore from './Pages/Explore'
import Login from './Pages/Login'
import { AuthenticationGuard } from './Components/Auth0/Authentication-guard'


function App() {
  const {isAuthenticated, isLoading} = useAuth0();

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<Root isLoading = {isLoading} isAuthenticated = {isAuthenticated}/>}>
        <Route index element = {<Home/>} />
        <Route path = '/message' element = {<AuthenticationGuard component = {Messages}/>} />
        <Route path = '/explore' element = {<Explore/>} />
        <Route path = ':handle' element = {<Profile/>} />
      </Route>
    )
  )
  return (
    <div className = 'flex'>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App

const Root = ({isLoading, isAuthenticated}) => {
  return(
    
    <>
      {isAuthenticated || isLoading? 
      <div>
        <Nav/>
        <div className = 'w-screen flex justify-center '>
          <div className = 'w-1/5'>
          </div>
          <Outlet/>
        </div> 
      </div> : <Login/>}
    </>
  )
}
