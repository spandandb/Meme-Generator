import React from 'react';

export default function About() {
  return (
    <div className='flex flex-col md:flex-row dark:bg-[#1E2021]'>
      <div className='flex justify-center items-center w-full md:w-1/2 p-5'>
        <img
          src={require('./about.jpg')}
          alt='Not Available'
          className='w-[90%] p-5 rounded-3xl shadow-md shadow-purple-600'
        />
      </div>
      <div className='p-5'>
        <h2 className='text-purple-600 m-5 text-5xl font-bold text-center md:text-left'>
          About Me
        </h2>
        <p className='text-black m-5 text-2xl text-center md:text-left font-semibold md:m-10 md:ml-5 dark:text-white'>
          Just a Web Development aspirant who loves to make Simple and Beautiful
          things.
        </p>
        <p className='text-black m-5 dark:text-white text-center md:text-left'>
          Do connect with me if you want to team up for the creation of any
          other interesting project.
        </p>
      </div>
    </div>
  );
}
