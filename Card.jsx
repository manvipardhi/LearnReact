import React from 'react';

const card = () => {
  return (
    <div className='h-80 w-52  m-5  bg-black text-start  border-2 border-solid border-blue-400 rounded-xl '>
        <h1 className='font-extrabold font-s text-orange-500 text-center flex  items-center justify-center mt-8'><u>card</u></h1>
        <img src="barger4.jpeg" alt=""  className='ml-5'/>
        <p className='text-white text-sm mt-5 ml-6'> Barger :
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iusto,  ad!</p>
    </div>
  );
};

export default card