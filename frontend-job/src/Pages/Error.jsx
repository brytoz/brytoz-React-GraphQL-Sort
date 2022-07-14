import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className='flex-wrap justify-center'>
        <div className="text-4xl font-bold">
          409 error!
        </div>
        <div className="text-xl pt-2">
          Search not found
        </div>
        <div className='flex justify-center items-center mt-12'>
          <Link to="/">
            <div className="bg-cyan-500 rounded p-3 text-white font-bold">Go Back</div>
          </Link>
        </div>
        </div>
      </div>
    </>
  )
}
