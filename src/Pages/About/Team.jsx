const Team = () => {
  const teamMembers = [
    {
      name: 'Aiyedogbon Abraham',
      role: 'Executive Director',
      bio: 'With over 15 years of experience in autism advocacy and healthcare management, John Doe leads our organization with passion and expertise.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Posi Ad',
      role: 'Program Director',
      bio: 'John Doe brings extensive experience in community development and has been instrumental in expanding our programs across West Africa.',
      image:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'John Doe',
      role: 'Research Director',
      bio: 'John Doe leads our research initiatives, focusing on understanding the unique needs of the autism community in African contexts.',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'John Doe',
      role: 'Community Outreach Coordinator',
      bio: 'John Doe works closely with local communities to develop and implement support programs for families affected by autism.',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

  return (
    <div className='prose prose-lg max-w-none'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8'>Our Team</h2>

      <p className='text-gray-600 mb-12'>
        Our diverse team of professionals is dedicated to making a difference in
        the lives of individuals with autism and their families across Africa.
        With expertise in healthcare, education, research, and community
        development, we work together to create lasting positive change.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className='bg-white rounded-lg shadow-sm overflow-hidden'
          >
            <div className='p-6'>
              <div className='flex items-center space-x-4'>
                <img
                  className='h-16 w-16 rounded-full object-cover'
                  src={member.image}
                  alt={member.name}
                />
                <div>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {member.name}
                  </h3>
                  <p className='text-blue-600'>{member.role}</p>
                </div>
              </div>
              <p className='mt-4 text-gray-600'>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 bg-gray-50 rounded-lg p-8'>
        <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
          Join Our Team
        </h3>
        <p className='text-gray-600 mb-6'>
          We&apos;re always looking for passionate individuals who want to make
          a difference. Check out our current openings and join our mission to
          create a more inclusive Africa.
        </p>
        <a
          href='/about/careers'
          className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
        >
          View Open Positions
        </a>
      </div>
    </div>
  )
}

export default Team
