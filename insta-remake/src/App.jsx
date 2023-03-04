import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Containers/Nav'
import Center from './Containers/Center'
import Right from './Containers/Center_Right'


function App() {
  return (
    <div>
      <div className = 'flex'>
        <Nav/>
        <div className = 'w-screen flex justify-center'>
          <div className = 'w-1/5'>
          </div>
          <Center/>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default App
