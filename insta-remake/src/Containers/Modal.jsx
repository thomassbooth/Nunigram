import React from 'react'
import ReactDom from 'react-dom'
import { useEffect, useRef } from 'react'

function Modal({open, onClose, children}) {
    const ref = useRef()
    useEffect(() => {
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
        <div className = 'fixed origin-center top-0 left-0 right-0 bottom-0 bg-black/70'>
            <div ref = {ref} className = 'fixed top-1/2 left-1/2 p-10 bg-white'>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal