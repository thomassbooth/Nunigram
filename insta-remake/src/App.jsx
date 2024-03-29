import './App.css'
import Nav from './Containers/Nav'
import {createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Messages from './Pages/Messages'
import Profile from './Pages/Profile'
import { useAuth0 } from '@auth0/auth0-react';
import Explore from './Pages/Explore'
import Login from './Pages/Login'
import useDarkMode from './Hooks/useDarkMode'
import { AuthenticationGuard } from './Components/Auth0/Authentication-guard'
import { Provider } from 'react-redux'
import { store } from './store'

  function App() {
    const {isAuthenticated, isLoading} = useAuth0();
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    
    console.log(isAuthenticated)
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path = '/' element = {<Root/>}>
          <Route index element = {<Home/>} />
          <Route path = '/message' element = {<AuthenticationGuard component = {Messages}/>} />
          <Route path = '/explore' element = {<Explore/>} />
          <Route path = ':handle' element = {<Profile/>} />
        </Route>
      )
    )
    return (
      <div className = 'flex'>
        {isAuthenticated || isLoading ? <RouterProvider router = {router} />: <Login/>}
      </div>
    )
  }
  
  export default App
  
  const Root = () => {
    return(
      <Provider store = {store}>
        <>
          <div className = 'dark:bg-black dark:text-white overflow-x-hidden '>
            <Nav/>
            <div className = 'w-screen flex justify-center'>
              <div className = 'w-1/6 '>
              </div>
              <Outlet/>
            </div> 
          </div>
        </>
      </Provider>
    )
  }
