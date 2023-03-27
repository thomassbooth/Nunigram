import React, { useState, useRef, useEffect} from 'react'
import { motion} from "framer-motion";

function Search({}) {
    // TODO ONLY MAKE THIS RENDER ON THE FIRST OPEN -> no point in having all of this html sat in the background
    return (
    <div className = 'fixed flex h-screen dark:bg-black bg-white'>
        <div className = 'w-[70px]'>
        </div>
        <motion.div className = 'border-r dark:border-gray-500' 
        variants = {{
            open: { opacity: 0, font: 0, width: 0},
            closed: { opacity: 1, width: `400px`}
          }}
          transition={{ duration: 0.2}}>
            HELLO THERE
        </motion.div>
    </div>
  )
}

export default Search