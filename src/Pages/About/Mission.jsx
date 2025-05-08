import React from 'react'

const Mission = () => {
  return (
    <div className='prose prose-lg max-w-none'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8'>Our Mission</h2>

      <div className='space-y-8'>
        <div>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Vision</h3>
          <p className='text-gray-600'>
            To create a world where individuals with autism in Africa are fully
            accepted, supported, and empowered to reach their full potential.
          </p>
        </div>

        <div>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Mission</h3>
          <p className='text-gray-600'>
            Autism Awareness Africa is dedicated to improving the lives of
            individuals with autism and their families across the African
            continent through:
          </p>
          <ul className='list-disc pl-6 mt-4 space-y-2 text-gray-600'>
            <li>
              Raising awareness and understanding of autism spectrum disorders
            </li>
            <li>
              Providing support and resources to families affected by autism
            </li>
            <li>
              Advocating for inclusive policies and better healthcare access
            </li>
            <li>Supporting research and professional development</li>
            <li>Building strong, supportive communities</li>
          </ul>
        </div>

        <div>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
            Core Values
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                Inclusion
              </h4>
              <p className='text-gray-600'>
                We believe in creating inclusive communities where everyone is
                valued and respected.
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                Empowerment
              </h4>
              <p className='text-gray-600'>
                We empower individuals with autism and their families through
                knowledge and support.
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                Advocacy
              </h4>
              <p className='text-gray-600'>
                We advocate for the rights and needs of the autism community in
                Africa.
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                Collaboration
              </h4>
              <p className='text-gray-600'>
                We work together with communities, organizations, and
                governments to create lasting change.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
            Our Approach
          </h3>
          <p className='text-gray-600'>
            We take a comprehensive approach to supporting the autism community
            in Africa, focusing on:
          </p>
          <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                Education
              </h4>
              <p className='text-gray-600'>
                Providing accurate information and resources about autism
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
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
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                Support
              </h4>
              <p className='text-gray-600'>
                Offering practical support to families and individuals
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                Advocacy
              </h4>
              <p className='text-gray-600'>
                Working to create systemic change and better policies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
