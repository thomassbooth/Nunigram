import React from 'react'
import {useState} from 'react'

const Story = ({id}) => {
    let storyClass = "rounded-full ring-offset-2 ring-2 ring-rose-900 w-14 h-14 mx-3"
    const [watched, setWatch] = useState({
        id: id,
        state: false
    });
    const onWatch = () => {
        setWatch({id: id, state: true});
    }

  if (watched['state']) {
      storyClass = "rounded-full w-14 h-14 ring-offset-2 ring-grey-500 ring-1 mx-3"
  }

return (
    <div>
        <button onClick = {onWatch}>
            <img src = "images/cat.jpg" className = {storyClass}></img>  
            <div className = 'font-light mt-1'>
                test
            </div>
        </button>
    </div>
)
}

export default Story