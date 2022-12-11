import React from 'react'

const Button = ({text, icon}) => {
    let className = "fa w-[2.5rem] text-2xl "
    className += icon;
    console.log(className);
  return (
    <a href = "">
      <div className='hover:bg-slate-50 my-2 rounded-full py-2 px-3 button flex items-center'>
          <i className={className}></i>{text}
      </div>
    </a>
  )
}

export default Button