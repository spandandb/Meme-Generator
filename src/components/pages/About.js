import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function About() {
  return (
    <div className='flex flex-col md:flex-row dark:bg-[#1E2021]'>
      <div className='flex justify-center items-center w-full lg:w-1/2 md:w-3/5 p-5'>
        <img
          src={require('./about.jpg')}
          alt='Not Available'
          className='w-[90%] p-5 md:p-0 xl:p-5 rounded-3xl md:rounded-2xl md:h-full xl:rounded-3xl shadow-md shadow-purple-600'
        />
      </div>
      <div className='p-5'>
        <h2 className='text-purple-600 dark:text-purple-400 m-5 text-5xl h-1/6 font-bold text-center md:text-left '>
          About Me
        </h2>
        <div className='flex justify-evenly flex-col h-4/6'>
          <p className='text-black m-5 text-2xl xl:text-4xl text-center md:text-left font-semibold md:m-10 md:ml-5 dark:text-white'>
            Just a Web Development aspirant who loves to make Simple and
            Beautiful things.
          </p>
          <p className='text-black m-5 dark:text-yellow-300 text-lg text-center md:text-left'>
            Do connect with me if you want to team up for the creation of any
            other interesting project.
          </p>
          <div className='m-5 flex justify-around items-center'>
            <a
              href='https://github.com/spandandb'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub
                size={40}
                className='dark:text-white dark:hover:text-purple-400 hover:text-purple-500'
                title={'GitHub'}
              />
            </a>
            <a
              href='https://www.facebook.com/spandan.dasbarman'
              target='_blank'
              rel='noreferrer'
              title={'Facebook'}
            >
              <BsFacebook
                size={35}
                className='dark:text-white dark:hover:text-purple-400 hover:text-purple-500'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/spandan-das-barman-ba0970239/'
              target='_blank'
              rel='noreferrer'
              title={'LinkedIn'}
            >
              <BsLinkedin
                size={35}
                className='dark:text-white dark:hover:text-purple-400 hover:text-purple-500'
              />
            </a>
            <a
              href='https://www.instagram.com/spandy_db/'
              target='_blank'
              rel='noreferrer'
              title={'Instagram'}
            >
              <BsInstagram
                size={35}
                className='dark:text-white dark:hover:text-purple-400 hover:text-purple-500'
              />
            </a>
            <a
              href='mailto:spandandb94@gmail.com'
              target='_blank'
              rel='noreferrer'
              title='Gmail'
            >
              <SiGmail
                size={35}
                className='dark:text-white dark:hover:text-purple-400 hover:text-purple-500'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
