import React, { useEffect, useRef } from 'react'
import useDarkMode from '../../Hooks/useDarkMode'

function More({open, closeMore, buttonRef}) {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    const ref = useRef()

    useEffect(() => {
        /*
        setup an event listener and remove it and let user scroll on
        */
        const checkIfOutside = (e) => {
            if(!ref.current.contains(e.target) && !buttonRef.current.contains(e.target)){
                closeMore()
            }
        }
        document.addEventListener("mousedown", checkIfOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfOutside)
        }
    }, [open])
    
  return (
    <section ref = {ref} className = 'border-0 absolute h-fit w-[250px] cursor-pointer rounded-lg left-2 bottom-[65px] bg-white dark:bg-zinc-800 text-black bg- dark:text-white'
        style = {{boxShadow: '0px 0px 4px 4px #9991'}}>
        <div className = ' text'>
            <div className = 'flex justify-between p-3 border-b'>
                <span className = 'ml-2'>Settings</span>
                <i className = 'fa fa-cog text-lg'></i>
            </div>
            <div onClick = {handleMode} className = 'flex justify-between p-3 '>
                <span className = 'ml-2'>Switch appearance</span>
                <i className = 'fa fa-cog text-lg'></i>
            </div>
        </div>
    </section>
  )
}

 
export default More