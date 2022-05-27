import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [menuView, setMenuView] = useState(false);

  function iconToggler() {
    setMenuView(!menuView);
  }
  return (
    <div>
      <nav className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between items-center'>
        <div className='flex cursor-default'>
          <img
            src={require('../logo.svg').default}
            alt=''
            className='w-16 pl-4'
          />
          <h1 className=' text-2xl font-bold text-white py-2'>
            Meme Generator
          </h1>
        </div>
        <div className='px-4 hidden md:block mx-5'>
          <ul className='flex space-x-3 text-lg text-white'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
          </ul>
        </div>
        <div className='px-4 mx-2 md:hidden'>
          {!menuView && (
            <AiOutlineMenu
              size={20}
              className='hover:text-yellow-300 text-white'
              onClick={iconToggler}
            />
          )}
          {menuView && (
            <AiOutlineClose
              size={20}
              className='hover:text-yellow-300 text-white'
              onClick={iconToggler}
            />
          )}
        </div>
      </nav>
      {menuView && (
        <div className='px-4 md:hidden bg-blue-500 text-center  border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2 py-2'>
          <ul className='flex flex-col space-y-3 text-lg text-white justify-center items-center'>
            <li className='cursor-pointer hover:text-xl hover:font-semibold hover:text-yellow-300'>
              Home
            </li>

            <li className='cursor-pointer hover:text-xl hover:font-semibold hover:text-yellow-300'>
              About
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
