import React from 'react'

function Filter({ clickEvent, icon, text, color}) {
  return (
    <>
      <div onClick={clickEvent} className=" p-2 flex-wrap justify-center items-center text-center text-gray-100 bg-cyan-500 rounded-md cursor-pointer items-center" style={{backgroundColor:color}}>
        <span className="text-center flex justify-center items-center ">
          {icon}
        </span>
        <span>
            {text} </span>
      </div>
    </>
  )
}

export default Filter
