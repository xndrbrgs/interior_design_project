import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://i.ibb.co/S6p0tdK/pexels-alex-staudinger-1732414.webp"
        fill
        style={{ objectFit: "cover" }}
        className='brightness-75'
      />
      <div className="absolute text-white top-[40%] w-full text-center">
        <p className="text-sm sm:text-lg lg:text-5xl text-bold">Unlock Your Dream Home</p>
        <p className="text-sm sm:text-lg lg:text-5xl text-bold">Where Luxury Meets Location</p>

        <button
          className="text-black bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 
        transition duration-150"
        >
          Explore homes
        </button>
      </div>
    </div>
  );
}

export default Banner;
