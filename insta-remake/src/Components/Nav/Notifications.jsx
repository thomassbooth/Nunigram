import React from 'react'
import { motion} from "framer-motion";

function Notifications() {
    let screenWidth = screen.width/6
  return (
    <div className = 'fixed flex h-full'>
        <div className = 'w-[100px]'>
        </div>
        <motion.div className = 'bg-white border-r' 
        variants = {{
            open: { opacity: 100, font: 0, width: 0},
            closed: { opacity: 100, width: `${screen.width/7}px`}
          }}
          transition={{ duration: 0.2 }}>
            Notifications
        </motion.div>
    </div>
  )
}

export default Notifications