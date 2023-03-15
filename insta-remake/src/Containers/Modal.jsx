import React from 'react'
import ReactDom from 'react-dom'
import { useEffect, useRef } from 'react'

function Modal({open, onClose, children}) {
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
        <div className = 'fixed flex h-full w-full top-0 left-0 right-0 bottom-0 justify-center items-center bg-black/70'>
            <div ref = {ref} className = 'bg-white'>
                <div>
                {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal