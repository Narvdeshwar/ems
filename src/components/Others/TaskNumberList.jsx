import React from 'react'

function TaskNumberList() {
  return (
    <div className='flex gap-10 p-10 '>
      <div className='bg-red-400 flex justify-center items-center flex-col gap-5 p-5 w-1/2 rounded-xl'>
        <h1 className='font-bold text-2xl'>0</h1>
        <h1 className='font-bold text-xl'>Pending</h1>
      </div>
      <div className='bg-red-400 flex justify-center items-center flex-col gap-5 p-5 w-1/2 rounded-xl'>
        <h1 className='font-bold text-2xl'>0</h1>
        <h1 className='font-bold text-xl'>Pending</h1>
      </div>
      <div className='bg-red-400 flex justify-center items-center flex-col gap-5 p-5 w-1/2 rounded-xl'>
        <h1 className='font-bold text-2xl'>0</h1>
        <h1 className='font-bold text-xl'>Pending</h1>
      </div>
      <div className='bg-red-400 flex justify-center items-center flex-col gap-5 p-5 w-1/2 rounded-xl'>
        <h1 className='font-bold text-2xl'>0</h1>
        <h1 className='font-bold text-xl'>Pending</h1>
      </div>
    </div>
  )
}

export default TaskNumberList
