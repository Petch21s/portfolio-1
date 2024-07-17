"use client";
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className='bg-[#0C0C0C] bg-opacity-70 mt-16 w-full max-w-[1200px] h-auto self-center rounded-3xl relative p-6 md:p-10'>
      <h1 className='text-white text-3xl font-bold p-4 md:p-10 md:ml-[73px]'>
        ABOUT
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-transparent relative overflow-hidden mb-8 md:mb-0">
          <Image
            src="/images/heroimage1.png"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            className="hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="text-white text-lg space-y-4 md:mr-[100px] mt-[20px] w-full md:w-[600px] px-4 md:px-8 py-6 md:py-10">
          <p>
            <span className="text-white font-semibold">Name: </span>
            <span className="text-white">Phestsuwaphat Thongsuk</span>
          </p>
          <p>
            <span className="text-white font-semibold">Nickname: </span>
            <span className="text-white">Petch</span>
          </p>
          <p>
            <span className="text-white font-semibold">Age: </span>
            <span className="text-white">24</span>
          </p>
          <p>
            <span className="text-white font-semibold">Email: </span>
            <span className="text-white">phestsuwaphat.contact@gmail.com</span>
          </p>

          {/* Gradient background with shadow */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-[10px] shadow-md rounded-md mt-6 text-center">
            <div className='py-10'>
              <span className="text-white font-semibold py-10">EDU</span>
              <span className="text-white font-semibold py-10">CATION</span>
            </div>
          </div>

          <div className="py-14">
            <p className="text-white">Information Technology and Innovation - Computer Science</p>
            <p className="text-white mt-2">GPA: 3.24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;