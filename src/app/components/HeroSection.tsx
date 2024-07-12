"use client";

// Import necessary modules
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';




const Herosection = () => {
  return (
    <section>
      <div className="  grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 ">
        <div className="col-span-7 place-self-start justify-items-end  translate-y-[50px] ">
          <h1 className=" text-white  text-[100px] mt-[240px] ml-[300px]  font-extrabold ">
            <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-pink-500 ">
              Hello, I'm{" "}</span>
            <div className="py-5 text-white">
            <TypeAnimation 
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Deverloper',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
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
          
          
          <div>
            {/* w-full */}
            <button className="px-6 py-3 w-60 h-[70px] rounded-full   
             
             bg-gradient-to-r from-purple-400 hover:bg-white
              to-pink-500
              text-white
               ml-[300px] mt-10 text-2xl font-bold"
              >About me</button>
              <button className="px-1 py-1  w-60 h-[70px] rounded-full   
                  
                  bg-transparent text-white  
                  ml-[50px] mt-10 text-2xl font-bold border-4"
              >
                View Work
                </button>
            

          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mr-14 lg:mt-0">
          {/* Replace 
          /images/heroimage.png
          
          'path_to_your_image' with the actual path to your image */}
          <div className=" rounded-full bg-white bg-opacity-10  w-[500px] h-[500px] mt-[300px]
          
          
          relative " >
            <Image
                src="/images/heroimage.png"
                alt="Description of the image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
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
