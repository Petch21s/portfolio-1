import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className='w-auto h-[600px] mt-[150px] bg-opacity-70'>
      <h1 className='text-white text-4xl font-bold text-center'>
        Experience
      </h1>

      <div className='h-[400px] w-auto flex items-center justify-center mt-[60px]'>
        <div className='h-[400px] w-[900px] grid grid-cols-3 
            sm:grid-cols-4 gap-6
            md:grid-cols-5'>

          {/* Python */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/python.png"  
                alt="Python Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">80%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>Python</h1>
          </div>

          {/* HTML */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/html.png"  
                alt="HTML Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">90%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>HTML</h1>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/css.png"  
                alt="CSS Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">85%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>CSS</h1>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/js.png"  
                alt="JavaScript Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">75%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>JavaScript</h1>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/ts.png"  
                alt="TypeScript Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">80%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>TypeScript</h1>
          </div>

          {/* React */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/react.png"  
                alt="React Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">80%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>React</h1>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/next.png" 
                alt="Next.js Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">80%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>Next.js</h1>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/java.png"  
                alt="Java Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">80%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>Java</h1>
          </div>

          {/* Canva */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/canva.png" 
                alt="Canva Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">80%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>Canva</h1>
          </div>

          {/* Figma */}
          <div className="flex flex-col items-center">
            <div className="relative w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
              <Image
                src="/icon/figma.png"  
                alt="Figma Icon"
                layout="fill"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">80%</span>
              </div>
            </div>
            <h1 className='text-white font-bold mt-2'>Figma</h1>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Experience;
