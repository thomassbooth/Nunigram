import React from 'react'

function ImageTypes({tab, activeTab, updateTab}) {
  
  let tabClass = 'text-sm py-4 '
  if (activeTab === tab.name){
    tabClass += 'border-t-[1px] border-black'
  } else {
    tabClass += 'opacity-50 '
  }

  
  return (
    <div className = {tabClass}>
      <button onClick = {() => {updateTab(tab.name)}} className = 'flex items-center'>
          <i className = {tab.icon + ' fa mr-2'}></i>
          <p className = 'tracking-tight'>{tab.name}</p>
      </button>
    </div>
  )
}

export default ImageTypes