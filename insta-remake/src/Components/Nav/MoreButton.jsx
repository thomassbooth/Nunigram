import { motion } from 'framer-motion'
import React from 'react'
const MoreButton = ({moreRef, closeMore}) => {
  return (
    <button ref = {moreRef} onClick = {closeMore}>
        <motion.div className='hover:bg-slate-50 dark:hover:bg-neutral-900/75 my-2 h-[50px] rounded-full py-2 px-3 button flex items-center'>
        <div className = 'w-[24px]'><i className = 'fa text-2xl fa-bars'></i></div>
        <motion.span className = 'ml-5'
        variants={{
            open: { opacity: 100 },
            closed: { opacity: 0, fontSize: 0}
        }}
        transition={{ duration: 0.1 }}>
            More
        </motion.span>
        </motion.div>
    </button>
  )
}

export default MoreButton