import React from 'react'

const Header = () => {
  return (
    <div className='py-4 w-full'>
      <div className='flex justify-between container mx-auto w-[70%]'>
        <h1 className='sm:text-2xl font-semibold'>Programming Hub</h1>
        <ul className='flex gap-5'>
          <li className='font-semibold opacity-80 hover:opacity-100 sm:text-lg'>
            <a href="#">Home</a>
          </li>
          <li className='font-semibold opacity-80 hover:opacity-100 sm:text-lg'>
            <a href="#">About</a>
          </li>
          <li className='font-semibold opacity-80 hover:opacity-100 sm:text-lg'>
            <a href="#">Pages</a>
          </li>
          <li className='font-semibold opacity-80 hover:opacity-100 sm:text-lg'>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <hr className='bg-rose-300 w-[70%] mx-auto my-5'/>
    </div>
  );
}

export default Header