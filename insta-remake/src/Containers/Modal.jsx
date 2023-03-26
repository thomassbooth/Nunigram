import React from 'react'
import ReactDom from 'react-dom'
import { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'

function Modal({open, onClose, children, modalClass = 'bg-white'}) {
    const ref = useRef()
    useEffect(() => {
        /*
        setup an event listener and remove it and let user scroll on
        */
        const checkIfOutside = (e) => {
            if(!ref.current.contains(e.target)){
                onClose()
            }
        }
        document.body.style.overflow = 'hidden'
        document.addEventListener("mousedown", checkIfOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfOutside)
            document.body.style.overflow = 'scroll'
        }
    }, [open])
    return ReactDom.createPortal(
        <motion.div className = 'fixed flex h-screen w-screen z-20 top-0 left-0 right-0 bottom-0 justify-center items-center bg-black/70'
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0}}>
            <div ref = {ref} className = {modalClass}>
                
                {children}
                
            </div>
        </motion.div>,
        document.getElementById('modal')
    )
}

export default Modal