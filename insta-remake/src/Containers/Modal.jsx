import React from 'react'
import ReactDom from 'react-dom'
import { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import useCloseComponent from '../Hooks/useCloseComponent'

function Modal({open, onClose, children, modalClass = 'bg-white'}) {
    const ref = useRef()
    useCloseComponent(open, onClose, ref)
    
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