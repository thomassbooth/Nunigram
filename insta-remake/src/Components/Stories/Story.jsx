import React from 'react'
import {useState} from 'react'

const Story = ({id}) => {
    let storyClass = "rounded-full w-9 h-9 mx-3"
    const [watched, setWatch] = useState({
        id: id,
        state: false
    });
    const onWatch = () => {
        setWatch({id: id, state: true});
    }

  if (watched['state']) {
      storyClass = "rounded-full w-9 h-9 mx-3 opacity-10"
  }

return (
    <div>
        <button onClick = {onWatch}>
            <img src = "images/cat.jpg" className = {storyClass}></img>  
            <div className = 'font-light'>
                test
            </div>
        </button>
    </div>
)
}

export default Story