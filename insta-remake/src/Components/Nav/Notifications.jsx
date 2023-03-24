import React from 'react'
import { motion} from "framer-motion";

function Notifications() {
  return (
    <div className = 'fixed flex h-full'>
        <div className = 'w-[100px]'>
        </div>
        <motion.div className = 'bg-white border-r '
        variants = {{
            open: { opacity: 0, font: 0, width: 0},
            closed: { opacity: 100, width: 250}
          }}
          transition={{ duration: 0.2 }}>
            Notifications
        </motion.div>
    </div>
  )
}

export default Notifications