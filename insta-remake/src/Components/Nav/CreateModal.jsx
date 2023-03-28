import React from 'react'

import {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'
import TagIcon from './TagIcon';

function CreateModal() {
    const {isAuthenticated, isLoading, user} = useAuth0();
    const fileInputRef = useRef(null)
    const altTextRef = useRef(null)
    const imgRef = useRef(null)
    const [showTags, setShowTags] = useState(true)
    const [tags, setTags] = useState([])
    const [selectedFile, setSelectedFile] = useState({picFile: '', imagePreviewUrl: ''})
    const [imageSelected, setSelected] = useState(false)
    const [caption, setCaption] = useState('')
    const [accessibility, setAccessibility] = useState(false)
    const [advanced, setAdvanced] = useState(false)


    const caption_change = (e) => {setCaption(e.target.value)}

    const add_tag = (e) => {
        if (tags.length > 0){
            let last = tags[tags.length - 1]
            if (last.submitted == false){tags.pop()}
        }
        
        let coords = e.target.getBoundingClientRect()
        setTags([...tags, {x: e.clientX - coords.left, y: e.clientY - coords.bottom, account: {},  submitted: false}])
    }
    const toggleTags = () => {setShowTags(!showTags)}

    const submit_tag = (id, account) => {
        let test = tags[id]
        test.submitted = true
        setTags(tags.map((tag, index) => {
            if(index == id){
                tag.submitted = true
                tag.account = {name: account.name, nick: account.nick}
            }
            return tag
        }))
    }
    const removeTag = (id) => {
        setTags(tags.filter((tag, index) => {
            return index !== id
        }))
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
                <div className = 'border-black border-[2.7px] bg-white dark:bg-black rounded-lg translate-x-[-15px] translate-y-[5px] rotate-[10deg]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-[45px] h-[45px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </div>
            </div>
            <p className = 'mt-4'>Drag photos and videos here</p>
            <input ref = {fileInputRef} type="file" style={{ display: "none" }} onChange = {fileHandler}/>
            <button className = 'py-1 px-2 rounded-lg hover:bg-blue-600 bg-blue-500 mt-4' onClick={() => fileInputRef.current.click()}>
                <span className = 'text-sm text-white font-medium'>Select from computer</span>
            </button>
            
        </div>
        :   <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} className = 'flex'>
                {/* Check if we show the tags if true then we render them */}
                {showTags && tags.map((tag, index) => {
                    let coords = imgRef.current.getBoundingClientRect()
                    return <TagIcon removeTag = {removeTag} account = {tag.account} key = {index} id = {index} x = {tag.x + (coords.left)} y = {tag.y + (coords.bottom)} submitted = {tag.submitted} submit_tag = {submit_tag}/>
                })}
                {/* Show tags or not (only appears when one is in list) */}
                {tags.length !== 0 && 
                <button onClick = {toggleTags} id = 'tag icon' className = 'm-4 absolute bg-gray-800 flex items-center justify-center w-8 h-8 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                </button>}
                <img ref = {imgRef} onClick = {add_tag} className = 'border-r-[1px] border-gray-300 h-[560px] w-[560px]'src = {selectedFile.imagePreviewUrl}></img>
                <div className = 'h-[560px] overflow-y-auto w-[340px]'>
                    {isAuthenticated 
                    ? <button className = 'h-[40px] m-3 flex items-center'>
                        <img className = 'w-8 h-8 rounded-full border border-gray-400' src = {user.picture}></img>
                        <span className = 'ml-3 text-sm font-medium'>{user.nickname}</span>
                    </button> 
                    : <div>
                        <div className = 'w-8 h-8 rounded-full bg-gray-400 dark:bg-black'></div>
                        <span className = 'ml-3 text-sm font-medium'>{user.nickname}</span>
                    </div>}
                    <textarea onChange = {caption_change} rows = {1} maxLength = '2200' placeHolder = 'Write a caption...' className = 'h-[150px] mx-3 font-light outline-none resize-none'/>
                    <div className = 'flex items-center justify-between m-3 text-xs opacity-30'>
                        <button className = 'z-0'>
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
                    <button onClick = {() => {setAccessibility(!accessibility)}} className = 'w-[340px] px-3 h-[50px] flex justify-between items-center'>
                        <span className = {!accessibility ? 'font-light' : 'font-medium'}>Accessibility</span>
                        <i className = {'ml-2 text-[25px] fa fa-lg fa-angle-down ' + (accessibility && 'rotate-180')} ></i>
                    </button>
                    {accessibility 
                    && <div className = 'mx-3'>
                        <p className = 'font-light text-xs opacity-40 leading-tight'>Alt text describes your photos for people with visual impairments. Alt text
                            will be automatically created for your photos or you can chose to write your own.</p>
                        <div className = 'flex mt-3 mb-4'>
                            <img className = 'ml-1 h-12 w-12'src = {selectedFile.imagePreviewUrl}></img>
                            <input ref = {altTextRef} placeholder = 'Write alt text...' className = 'text-sm ml-2 pl-3 border-gray-300 outline-gray-300 border rounded-lg w-full font-light'/>
                        </div>
                    </div>}
                    <button className = 'px-3 border-y h-[50px] w-[340px] flex justify-between items-center'>
                        <span className = 'font-light'>Advanced Settings</span>
                        <i className = {'ml-2 text-[25px] fa fa-lg fa-angle-down' }></i>
                    </button>
                    
                </div>
            </motion.div>}
    </div>
  )
}

export default CreateModal