import React, { useState, useEffect } from 'react';

export default function Form() {
  const [image, setImage] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    url: 'https://i.imgflip.com/30b1gx.jpg'
  });

  useEffect(() => {
    const url = 'https://api.imgflip.com/get_memes';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImage(data.data.memes));
  }, []);

  function randomImageGenerator() {
    const rv = Math.floor(Math.random() * image.length);
    setMeme((prevMeme) => {
      return { ...prevMeme, url: image[rv].url };
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  };

  return (
    <div className='flex flex-col justify-center items-center bg-slate-100 p-10 dark:bg-[#1E2021] dark:text-white'>
      {/* <form action=''> */}
      <div className='sm:space-x-4 w-full md:p-20 flex flex-col sm:flex-row justify-center items-center'>
        <input
          type='text'
          className='flex my-2 justify-center sm:block p-2 rounded-lg border border-1 mx-auto border-gray-500 w-auto sm:w-1/2 dark:bg-[#3B3B3B]'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          className='flex justify-center my-2 sm:block p-2 rounded-lg border border-1 mx-auto border-gray-500 sm:w-1/2 dark:bg-[#3B3B3B]'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <div className='flex items-center justify-center g-slate-100'>
        <button
          className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-fit my-6 mx-2 px-4 py-2 rounded-lg border border-1 border-gray-500 font-semibold active:shadow-lg active:shadow-purple-500 sm:hover:shadow-lg sm:hover:shadow-purple-500'
          onClick={randomImageGenerator}
        >
          Change Meme Image 🖼️
        </button>
      </div>
      <div className='w-[80%] my-3 flex justify-center items-center relative overflow-hidden'>
        <h3 className='absolute top-0 m-5 p-1 text-sm uppercase bg-black/50 text-white font-extrabold md:text-lg overflow-hidden rounded-md'>
          {meme.topText}
        </h3>
        <img src={meme.url} alt='' />
        <h3 className='absolute bottom-0 m-5 p-1 text-sm uppercase bg-black/50 text-white font-extrabold md:text-xl overflow-hidden rounded-md'>
          {meme.bottomText}
        </h3>
      </div>
      {/* </form> */}
    </div>
  );
}
