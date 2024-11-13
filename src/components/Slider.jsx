import React from 'react'

const Slider = () => {
  // const items = [
  //   "STUDIO CURIOSO",
  //   "-",
  //   "EFICIENTES",
  //   "-",
  //   "DIVERTIDOS",
  //   "-",
  //   "DIFERENTES",
  //   "-",
  //   <img className='w-[100px] max-w-none ' src={ratch} alt="Ratch" />,    
  //   "-",
  //   "STUDIO CURIOSO",
  //   "-",
  //   "EFICIENTES",
  //   "-",
  //   "DIVERTIDOS",
  //   "-",
  //   "DIFERENTES",
  //   "-",
  // ]
  return (
    <div className="relative flex overflow-x-hidden bg-rojo text-white justify-center">
      <div className="animate-slider whitespace-nowrap py-4 flex items-center justify-center translate-x-5">
        {items.map((item, index) => (
          <div key={index} className="mx-4 text-lg lg:text-2xl font-bold ">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider