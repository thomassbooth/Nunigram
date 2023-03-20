import React from 'react'

import {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'

function CreateModal() {
    const {isAuthenticated, isLoading, user} = useAuth0();
    const inputRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState({picFile: '', imagePreviewUrl: ''})
    const [imageSelected, setSelected] = useState(false)
    const [caption, setCaption] = useState('')
    
    const caption_change = (e) => {
        setCaption(e.target.value)
    }

    const fileHandler =  (e) => {
        setSelectedFile(e.target.files[0]);
        let reader = new FileReader();
        let inFile = e.target.files[0];
        reader.onloadend = () => {
            setSelectedFile({ 
                picFile: inFile, 
                imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(inFile);
        setSelected(true);
    }

  return (
    <div className = {!imageSelected ? 'w-[600px] h-[600px] rounded-lg overflow-hidden' : 'overflow-hidden w-[900px] h-600px rounded-lg'}>
        {/* Select our top bars depending what stage we are at */}
        {!imageSelected 
            ? <div className = 'flex justify-center items-center w-full h-[40px] border-b-[1px] border-gray-300'>
                <span className = 'font-medium text-sm'>Create new post</span>
             </div>
            : <motion.div className = 'flex justify-between items-center w-full h-[40px] border-b-[1px] border-gray-300'
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}>
                <div></div>
                <span className = 'font-medium text-sm'>Create new post</span>
                <button className = 'mr-4 text-sm text-blue-500 hover:text-blue-900'>Share</button>
              </motion.div>}

        {!imageSelected ? <div className = 'flex-col flex w-full h-full justify-center items-center'>
            <div className = 'flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-[70px] h-[70px] rotate-[-6deg]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <div className = 'border-black border-[2.7px] bg-white rounded-lg translate-x-[-15px] translate-y-[5px] rotate-[10deg]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-[45px] h-[45px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </div>
            </div>
            <p className = 'mt-4'>Drag photos and videos here</p>
            <input ref = {inputRef} type="file" style={{ display: "none" }} onChange = {fileHandler}/>
            <button className = 'py-1 px-2 rounded-lg hover:bg-blue-600 bg-blue-500 mt-4' onClick={() => inputRef.current.click()}>
                <span className = 'text-sm text-white font-medium'>Select from computer</span>
            </button>
            
        </div>
        :   <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} className = 'flex'>
                <img className = ' h-[560px] w-[560px]'src = {selectedFile.imagePreviewUrl}></img>
                <div className = 'flex flex-col w-[340px]'>
                    {isAuthenticated 
                    ? <button className = 'h-[40px] m-3 flex items-center'>
                        <img className = 'w-8 h-8 rounded-full border border-gray-400' src = {user.picture}></img>
                        <span className = 'ml-3 text-sm font-medium'>{user.nickname}</span>
                    </button> 
                    : <div>
                        <div className = 'w-8 h-8 rounded-full bg-gray-400'></div>
                        <span className = 'ml-3 text-sm font-medium'>{user.nickname}</span>
                    </div>}
                    <textarea onChange = {caption_change} rows = {1} placeholder = 'Write a caption' className = 'h-[150px] mx-3 font-light outline-none resize-none'/>
                    <div className = 'flex items-center justify-between m-3 text-xs opacity-30'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                        </button>
                        <span>{caption.length + '/2,200'}</span>
                    </div>
                    <hr></hr>
                    <div className = 'px-3 border-b h-[50px] flex justify-between items-center'>
                        <input placeholder = 'Add location' className = 'w-full font-light outline-none'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                    </div>
                    <button className = 'px-3 border-b h-[50px] flex justify-between items-center'>
                        <span className = 'font-light'>Accessibility</span>
                        <i className = 'ml-2 text-[25px] fa fa-lg fa-angle-down'></i>
                    </button>
                    <button className = 'px-3 border-b h-[50px] flex justify-between items-center'>
                        <span className = 'font-light'>Advanced Settings</span>
                        <i className = 'ml-2 text-[25px] fa fa-lg fa-angle-down'></i>
                    </button>
                </div>
            </motion.div>}
    </div>
  )
}

export default CreateModal