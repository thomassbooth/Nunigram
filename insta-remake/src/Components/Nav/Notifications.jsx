import React, { useState, useRef, useEffect} from 'react'
import { motion} from "framer-motion";
import Notification from './Notification';

function Notifications() {
    const [notification, setNotification] = useState({'Today': [{img: 'images/cat.jpg', account: 'davePayne', text: 'started following you.', follow: true, type: 'follow', ago: '5h'}, {img: 'images/storm.jpeg', account: 'definatelyNotDave', text: 'started following you.', follow: false, type: 'follow', ago: '11h'}], 
    'This Week': [{img: 'images/cat.jpg', account: 'davePayne', text: 'started following you.', follow: true, type: 'follow', ago: '5h'}, {img: 'images/cat.jpg', account: 'davePayne', text: 'started following you.', follow: true, type: 'follow', ago: '5h'}, {img: 'images/cat.jpg', account: 'davePayne', text: 'started following you.', follow: true, type: 'follow', ago: '5h'}, {img: 'images/cat.jpg', account: 'davePayne', text: 'started following you.', follow: true, type: 'follow', ago: '5h'}, {img: 'images/cat.jpg', account: 'davePayne', text: 'started following you.', follow: true, type: 'follow', ago: '5h'}], 
    })


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
              <h1 className = 'font-medium text-2xl ml-5 mt-5'>Notifications</h1>
              {Object.keys(notification).map((type, index) => {
                return (<section key = {index} className = ''>
                  <h2 className = 'font-medium ml-5 my-3'>{type}</h2>
                  {notification[type].map((notif, indx) =>{
                    return <Notification key = {indx} account = {notif.account} img = {notif.img} text = {notif.text} follow = {notif.follow} type = {notif.type} ago = {notif.ago}/>
                  })}
                  <hr className = 'my-2'></hr>
                </section>)
              })}
            </div>
        </motion.div>
    </div>
  )
}

export default Notifications