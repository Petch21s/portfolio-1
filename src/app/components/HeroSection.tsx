"use client";

// Import necessary modules
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="col-span-7 translate-y-[50px] mt-[240px] ">
          <h1 className="text-white  font-extrabold text-center 
          text-[55px]
          sm:text-[80px] 
          md:text-[50px] md:text-start md:ml-10
          lg:text-[70px] lg:text-start lg:ml-[60px]
          xl:text-[85px] >
          2xl:text-[100px] ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 
            
            text-[50px] 
            sm:text-[70px] 
            md:text-[80px] 
            lg:text-[60px] 
            xl:text-[80px]
            2xl:text-[95px]">
              Hello, I&apos;m{" "}
            </span>
            <div className="py-5 text-white">
              <TypeAnimation 
                sequence={[
                  'Developer',
                  1000,
                  'Fullstack',
                  1000,
                  'UX/UI Designer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          <div className="flex flex-col md:flex-row items-center space-y-0 md:space-y-0 
                          md:space-x-4 md:justify-start md:ml-10 lg:ml-[60px] ">
            <Link href="#about" passHref>
              <button className="group relative px-6 py-3 w-[240px] h-[70px] 
              
                    md:w-[170px] md:h-[60px] md:text-xl 
                    lg:w-[200px] lg:h-[70px]  lg:text-2xl
                    xl:w-[240px] xl:h-[70px]
                    2xl:w-[240px] 2xl:h-[70px]
                    rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white mt-10 text-2xl font-bold overflow-hidden">
                <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500">
                  About me
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              </button>
            </Link>

            <Link href="#projects" passHref>
              <button className="group relative px-6 py-3 w-60 h-[70px] 
                md:w-[170px] md:h-[60px] md:text-xl 
                lg:w-[200px] lg:h-[70px] lg:text-2xl
                xl:w-[240px] xl:h-[70px]
                2xl:w-[240px] 2xl:h-[70px]
              
              
              
                rounded-full bg-transparent text-white mt-10 text-2xl font-bold border-4 border-white overflow-hidden hover:shadow-lg hover:bg-transparent hover:border-purple-500 transition duration-300 ease-in-out">
                <span className="relative z-10 text-white bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500">
                  View Work
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-5 place-self-center lg:mr-14 lg:mt-0 hidden md:block ">
          <div className="rounded-full bg-white bg-opacity-10 
          w-[300px] h-[300px] mt-[300px] 
          lg:w-[350px] lg:h-[350px]
          xl:w-[400px] xl:h-[400px]
          2xl:w-[450px] 2xl:h-[450px] 2xl:mr-[100px] 
          
          relative">
            <Image
              src="/images/heroimage.png"
              alt="Description of the image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110 transition-transform"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
