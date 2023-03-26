import React, { useState } from 'react'
import { motion} from "framer-motion";
import Notification from './Notification';

function Notifications() {
    const [notification, setNotification] = useState({today: [{img: 'images/cat.jpg', account: 'davePayne', text: 'started following you.', follow: true, type: 'follow'}], thisWeek: [{}], thisMonth: [{}], Earlier: [{}]})
  
    // TODO ONLY MAKE THIS RENDER ON THE FIRST OPEN -> no point in having all of this html sat in the background
    return (
    <div className = 'fixed flex h-screen bg-white'>
        <div className = 'w-[70px]'>
        </div>
        <motion.div className = 'border-r' 
        variants = {{
            open: { opacity: 0, font: 0, width: 0},
            closed: { opacity: 100, width: `400px`}
          }}
          transition={{ duration: 0.2 }}>
            <div className = 'h-full overflow-y-scroll'>
              <h1 className = 'font-medium text-2xl ml-5 my-5'>Notifications</h1>
              <section className = ''>
                <h2 className = 'font-medium ml-5'>Today</h2>
                {notification.today.map((notif) =>{
                  return <Notification account = {notif.account} img = {notif.img} text = {notif.text} follow = {notif.follow} type = {notif.type}/>
                })}
              </section>
              <hr></hr>
              <section className = 'ml-5'>
                <h2 className = 'font-medium'>This Week</h2>
                
              </section>
            </div>
        </motion.div>
    </div>
  )
}

export default Notifications