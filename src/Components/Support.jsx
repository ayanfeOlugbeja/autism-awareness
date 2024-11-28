import React from 'react';
import image from './../assets/Tonya-and-Tyler.png';
function Support() {
  return (
    <div className='w-full h-[1600px] flex flex-col justify-between items-center p-10'>
      <div className='h-1/3 '>
        <h2 className='text-gray-500 font-bold text-3xl '>
          Autism information and support
        </h2>
        {/* <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-6'>
          {[
            {
              title: 'Autism Awareness Africa',
              image: image,
              alt: 'Autism Awareness Africa website',
              repo: 'https://github.com/ayanfeOlugbeja',
            },
            {
              title: 'Aim ProDrive Training Centre',
              image: image,
              alt: 'Aim Prodrive Training Centre booking website',
              repo: 'https://github.com/ayanfeOlugbeja/aim-pro',
            },
            {
              title: 'PASSI (Exeat/Pass System)',
              image: image,
              alt: 'Pass/Exeat application system',
              repo: 'https://github.com/ayanfeOlugbeja/exeat-app',
            },
          ].map((information, index) => (
            <div
              key={index}
              className='bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105'>
              <div className='relative group'>
                <img
                  className='w-full h-48 object-contain'
                  src={information.image}
                  alt={information.alt}
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                  <a
                    href={information.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white text-lg font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300'>
                    Visit Website
                  </a>
                </div>
              </div>
              <div className='p-6'>
                <h5 className='text-gray-900 font-bold text-xl mb-3 dark:text-white'>
                  {information.title}
                </h5>
                <p className='text-gray-700 dark:text-gray-400 mb-4 text-sm'>
                  {information.description}
                </p>
                <a
                  href={information.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center'>
                  <img
                    className='h-6 w-6 mr-2'
                    src={github}
                    alt='GitHub repository'
                  />
                  <span className='text-blue-600 hover:underline dark:text-blue-400'>
                    View Code
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <div className='h-1/3 '>
        <h2 className='text-gray-500 font-bold text-3xl '>
          Find autism services and events in your community
        </h2>
      </div>
      <div className='h-1/3'>
        <h2 className='text-gray-500 font-bold text-3xl '>
          Find the resources right for you
        </h2>
      </div>
    </div>
  );
}

export default Support;
