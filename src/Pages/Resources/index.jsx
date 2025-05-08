import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import WhatIsAutism from './WhatIsAutism'
import SupportServices from './SupportServices'
import Research from './Research'
import Publications from './Publications'

const Resources = () => {
  const subPages = [
    { name: 'What is Autism?', path: '/resources/what-is-autism' },
    { name: 'Support Services', path: '/resources/support' },
    { name: 'Research', path: '/resources/research' },
    { name: 'Publications', path: '/resources/publications' },
  ]

  const quickLinks = [
    {
      title: 'Understanding Autism',
      description:
        'Learn about autism spectrum disorder and its characteristics.',
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
      link: '/resources/what-is-autism',
    },
    {
      title: 'Support Services',
      description:
        'Find support services and resources available in your area.',
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      link: '/resources/support',
    },
    {
      title: 'Research & Publications',
      description:
        'Access research findings and publications about autism in Africa.',
      icon: (
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
          />
        </svg>
      ),
      link: '/resources/research',
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Resources
            </h1>
            <p className='text-xl text-gray-600'>
              Access educational materials, support services, and research
              findings to better understand and support individuals with autism.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.link}
                className='bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow'
              >
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 text-blue-600'>{link.icon}</div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      {link.title}
                    </h3>
                    <p className='text-gray-600'>{link.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row gap-8'>
            {/* Sidebar Navigation */}
            <div className='md:w-64 flex-shrink-0'>
              <nav className='sticky top-24'>
                <ul className='space-y-2'>
                  {subPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className='block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className='flex-1'>
              <Routes>
                <Route path='what-is-autism' element={<WhatIsAutism />} />
                <Route path='support' element={<SupportServices />} />
                <Route path='research' element={<Research />} />
                <Route path='publications' element={<Publications />} />
                <Route index element={<WhatIsAutism />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
