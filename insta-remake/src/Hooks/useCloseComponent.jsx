import {useEffect} from 'react';

const useCloseComponent = (open, closeComponent, ref) => {
    useEffect(() => {
        /*
        setup an event listener and remove it and let user scroll on
        */
        const checkIfOutside = (e) => {
            if(!ref.current.contains(e.target)){
                console.log(ref)
                closeComponent()
            }
        }
        document.body.style.overflow = 'hidden'
        document.addEventListener("mousedown", checkIfOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfOutside)
            document.body.style.overflow = 'scroll'
        }
    }, [open])

  return 
}

export default useCloseComponent