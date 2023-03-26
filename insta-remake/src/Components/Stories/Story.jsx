import React from 'react'
import {useState} from 'react'

const Story = ({id}) => {
    let storyClass = "rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5"
    const [watched, setWatch] = useState({
        id: id,
        state: false
    });
    const onWatch = () => {
        setWatch({id: id, state: true});
    }

  if (watched['state']) {
      storyClass = "rounded-full  p-0.5"
  }

return (
    <div className = 'flex content-center'>
        <button onClick = {onWatch}>
            <div className = {storyClass}>
                <img src = "images/cat.jpg" className = 'dark:bg-black bg-white p-0.5 rounded-full'></img>
            </div>
            <p className = 'text-center tracking-tight font-light text-xs mt-1'>
                test
            </p>
            
        </button>
    </div>
)
}

export default Story