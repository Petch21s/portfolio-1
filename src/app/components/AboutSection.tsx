"use client";
import React from 'react';

import Image from 'next/image';

const AboutSection = () => {
  return ( 
    <div className='bg-[#0C0C0C] bg-opacity-70 mt-[250px] mx-auto max-w-[95%] 
          sm:max-w-[95%] 
          md:w-[95%]
          lg:w-[95%] 
          xl:w-[95%]
          2xl:w-[95%] h-auto self-center rounded-3xl relative p-5 shadow-lg transition-transform duration-500 '>
      <h1 className='text-white text-3xl font-bold p-4 text-center md:text-start '>
        ABOUT
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mt-9">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-black bg-opacity-10 relative overflow-hidden shadow-sm">
          <img
            src="/images/heroimage1.png"
            alt="Description of the image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110 transition-transform duration-500"
            width={500}
            height={500}
          />
        </div>

        <div className="text-white text-lg space-y-4 mt-5 md:mt-0 md:ml-10 w-full md:w-auto px-5 md:px-0 py-5 md:py-10">
          <p className="hover:scale-105 transition-transform duration-300">
            <span className="text-white font-semibold">Name: </span>
            <span className="text-white">Phestsuwaphat Thongsuk</span>
          </p>
          <p className="hover:scale-105 transition-transform duration-300">
            <span className="text-white font-semibold">Nickname: </span>
            <span className="text-white">Petch</span>
          </p>
          <p className="hover:scale-105 transition-transform duration-300">
            <span className="text-white font-semibold">Age: </span>
            <span className="text-white">24</span>
          </p>
          <p className="hover:scale-105 transition-transform duration-300">
            <span className="text-white font-semibold">Email: </span>
            <span className="text-white">phestsuwaphat.contact@gmail.com</span>
          </p>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-[10px] shadow-md rounded-md mt-6 text-center">
            <div className='py-8 md:py-6 animate-pulse flex justify-center'>
              <span className="text-white font-semibold tracking-widest text-xl md:text-2xl">EDU</span>
              <span className="text-white font-semibold tracking-widest text-xl md:text-2xl">CATION</span>
            </div>
          </div>

          <div className="py-10 md:py-14 text-center">
            <p className="text-white hover:scale-105 font-extralight transition-transform duration-300 text-lg md:text-xl">
              Information Technology and Innovation: Computer Science
            </p>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <span className="text-white hover:scale-110 transition-transform duration-300 font-semibold text-lg md:text-xl">GPA:</span>
              <span className="text-white hover:scale-110 transition-transform duration-300 text-lg md:text-xl">3.24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
