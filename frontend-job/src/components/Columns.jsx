import React from 'react'

const Columns = ({ date, country, status, fullname }) => {
  return (
    <div className="w-full border bg-gray-100 rounded-md px-4  mb-12">
      <div className="flex-wrap">
        <div className="w-1/5 py-2 text-left border border-gray-200/50 rounded">
          Date Returned <span className="italic"> {date}/12/2020 </span>
        </div>
        <div className="w-full   py-6 flex mt-3">
          <div className="font-bold text-base md:text-xl  border-r w-1/5 text-left">
            Fullname
          </div>
          <div className="capitalize  w-4/5 pl-2"> {fullname} </div>
        </div>

        <div className="w-full  py-6 flex mt-3">
          <div className="capitalize font-bold text-base md:text-xl opacity-50   w-1/5 text-left border-r ">
            {country}
          </div>
          <div className=" w-4/5 pl-2 capitalize">{status} </div>
        </div>
      </div>
    </div>
  )
}

export default Columns
