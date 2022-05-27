import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

export default function Navbar(props) {
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
        <div className='px-4 hidden md:flex mx-5'>
          <div className='flex items-center justify-center mx-10'>
            {props.lightMode ? (
              <BsFillSunFill
                size={30}
                className='text-white cursor-pointer'
                onClick={props.modeToggler}
              />
            ) : (
              <MdDarkMode
                size={30}
                className='cursor-pointer'
                onClick={props.modeToggler}
              />
            )}
          </div>
          <ul className='flex space-x-5 text-lg text-white'>
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
        <div className='md:hidden bg-blue-500 text-center  border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2 py-2'>
          <div className='flex items-center justify-center mx-10'>
            {props.lightMode ? (
              <BsFillSunFill
                size={30}
                className='text-white cursor-pointer'
                onClick={props.modeToggler}
              />
            ) : (
              <MdDarkMode
                size={30}
                className='cursor-pointer'
                onClick={props.modeToggler}
              />
            )}
          </div>
          <hr className='my-2 mx-0 w-[100%]' />
          <ul className='flex flex-col space-y-3 text-lg justify-center items-center'>
            <li className='cursor-pointer hover:text-xl text-white hover:font-semibold hover:text-yellow-300'>
              Home
            </li>

            <li className='cursor-pointer hover:text-xl text-white hover:font-semibold hover:text-yellow-300'>
              About
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
