import './App.css'
import Nav from './Containers/Nav'
import {createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Messages from './Pages/Messages'
import Profile from './Pages/Profile'
import { useState } from 'react'
import Explore from './Pages/Explore'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<Root />}>
        <Route index element = {<Home/>} />
        <Route path = '/message' element = {<Messages/>} />
        <Route path = '/explore' element = {<Explore/>} />
        <Route path = '/profile' element = {<Profile/>} />
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

const Root = () => {
  return(
    <>
      <Nav/>
      <div className = 'w-screen flex justify-center '>
        <div className = 'w-1/5'>
        </div>
        <Outlet/>
      </div>
    </>
  )
}
