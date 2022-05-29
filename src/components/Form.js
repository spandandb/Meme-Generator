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

  console.log(image);

  function randomImageGenerator() {
    const rv = Math.floor(Math.random() * image.length);
    setMeme((prevMeme) => {
      return { ...prevMeme, url: image[rv].url };
    });
  }

  return (
    <div className='flex flex-col justify-center items-center bg-slate-100 p-10'>
      {/* <form action=''> */}
      <div className='space-x-4 w-full md:p-20 flex'>
        <input
          type='text'
          className=' p-2 rounded-lg border border-1 border-gray-500 md:w-1/2'
          placeholder='Top text'
        />
        <input
          type='text'
          className=' p-2 rounded-lg border border-1 border-gray-500 md:w-1/2'
          placeholder='Bottom text'
        />
      </div>
      <div className='flex items-center justify-center g-slate-100'>
        <button
          className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-fit my-6 mx-2 px-4 py-2 rounded-lg border border-1 border-gray-500 font-semibold hover:shadow-lg hover:shadow-purple-500'
          onClick={randomImageGenerator}
        >
          Change Meme Image 🖼️
        </button>
      </div>
      <div className='w-[80%] my-3 flex justify-center items-center'>
        <img src={meme.url} alt='' />
      </div>
      {/* </form> */}
    </div>
  );
}
