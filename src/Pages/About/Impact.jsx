const Impact = () => {
  const impactStats = [
    {
      number: '10,000+',
      label: 'Families Supported',
      description: 'Through our various programs and initiatives',
    },
    {
      number: '50+',
      label: 'Communities Reached',
      description: 'Across 15 African countries',
    },
    {
      number: '500+',
      label: 'Professionals Trained',
      description: 'In autism awareness and support',
    },
    {
      number: '100+',
      label: 'Partner Organizations',
      description: 'Working together for change',
    },
  ]

  const successStories = [
    {
      title: 'Community Support Program',
      location: 'Lagos, Nigeria',
      description:
        'Established a network of support groups and resources for families affected by autism.',
      impact:
        'Over 1,000 families now have access to regular support meetings and resources.',
    },
    {
      title: 'Teacher Training Initiative',
      location: 'Nairobi, Kenya',
      description:
        'Developed and implemented autism awareness training for educators.',
      impact:
        'More than 200 teachers trained, benefiting over 500 students with autism.',
    },
    {
      title: 'Healthcare Access Program',
      location: 'Accra, Ghana',
      description:
        'Created partnerships with healthcare providers to improve autism diagnosis and support.',
      impact:
        'Reduced diagnosis wait times by 60% and improved access to specialized care.',
    },
  ]

  return (
    <div className='prose prose-lg max-w-none'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8'>Our Impact</h2>

      <p className='text-gray-600 mb-12'>
        Through our dedicated work and the support of our partners, we&apos;ve
        made significant progress in improving the lives of individuals with
        autism and their families across Africa. Here&apos;s a look at our
        impact and success stories.
      </p>

      {/* Impact Statistics */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
        {impactStats.map((stat) => (
          <div
            key={stat.label}
            className='bg-white rounded-lg shadow-sm p-6 text-center'
          >
            <div className='text-4xl font-bold text-blue-600 mb-2'>
              {stat.number}
            </div>
            <div className='text-lg font-semibold text-gray-900 mb-2'>
              {stat.label}
            </div>
            <p className='text-gray-600 text-sm'>{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <h3 className='text-2xl font-semibold text-gray-900 mb-8'>
        Success Stories
      </h3>
      <div className='space-y-8'>
        {successStories.map((story) => (
          <div key={story.title} className='bg-gray-50 rounded-lg p-6'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
              <h4 className='text-xl font-semibold text-gray-900'>
                {story.title}
              </h4>
              <span className='text-blue-600 font-medium'>
                {story.location}
              </span>
            </div>
            <p className='text-gray-600 mb-4'>{story.description}</p>
            <div className='bg-blue-50 rounded-lg p-4'>
              <p className='text-blue-800 font-medium'>Impact:</p>
              <p className='text-blue-700'>{story.impact}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='mt-16 bg-blue-600 rounded-lg p-8 text-center'>
        <h3 className='text-2xl font-semibold text-white mb-4'>
          Help Us Make an Even Bigger Impact
        </h3>
        <p className='text-blue-100 mb-6'>
          Your support can help us reach more communities and create lasting
          change for individuals with autism in Africa.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='/donate'
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50'
          >
            Donate Now
          </a>
          <a
            href='/get-involved'
            className='inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700'
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  )
}

export default Impact
