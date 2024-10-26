import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello <span className='font-bold'>User👋 !</span></h1>
      <button className='bg-red-500 px-6 py-2 rounded-xl font-semibold'>logout</button>
    </div>
  )
}

export default Header
