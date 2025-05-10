import { useNavigate } from 'react-router-dom'
import { Container } from '../../Components/layout'
import { Heading, BodyText, DisplayText } from '../../Components/typography'
import { Button } from '../../Components/interactive'
import { QuickLink } from '../../Components/interactive'

const Home = () => {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleNavigation = (path) => {
    navigate(path)
    scrollToTop()
  }

  // const impactStats = [
  //   {
  //     number: '1M+',
  //     label: 'People Reached',
  //     description: 'Through awareness campaigns and educational programs',
  //   },
  //   {
  //     number: '50+',
  //     label: 'Communities',
  //     description: 'Served across multiple African countries',
  //   },
  //   {
  //     number: '10K+',
  //     label: 'Families Supported',
  //     description: 'With resources, training, and direct assistance',
  //   },
  // ]

  const featuredPrograms = [
    {
      title: 'Early Intervention',
      description:
        'Comprehensive early intervention services for children with autism, including developmental assessment and therapy.',
      icon: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
    },
    {
      title: 'Family Support',
      description:
        'Resources and support for families, including parent training, counseling, and access to community resources.',
      icon: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Professional Training',
      description:
        'Training programs for healthcare providers, educators, and community workers to better support individuals with autism.',
      icon: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
          />
        </svg>
      ),
    },
  ]

  const quickLinks = [
    {
      title: 'What is Autism?',
      description:
        'Learn about autism spectrum disorder and its characteristics',
      to: '/resources/what-is-autism',
      icon: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
    },
    {
      title: 'Support Services',
      description: 'Access our range of support services and resources',
      to: '/resources/support-services',
      icon: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Get Involved',
      description: 'Find ways to support our mission and make a difference',
      to: '/get-involved',
      icon: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
    },
  ]
  return (
    <div className='min-h-screen bg-white text-gray-900 font-sans'>
      {/* Hero Section */}
      <section className='bg-white border-b border-gray-200'>
        <Container className='py-24 text-left md:text-center max-w-5xl mx-auto'>
          <DisplayText className='text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter'>
            Inspiring Autism Awareness in Africa
          </DisplayText>
          <BodyText className='mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mt-8'>
            Driving inclusion and empowerment through support, education, and
            advocacy for individuals with autism.
          </BodyText>
          <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='primary'
              size='lg'
              onClick={() => handleNavigation('/get-involved')}
            >
              Get Involved
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() => handleNavigation('/about')}
            >
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className='py-16 border-b border-gray-100'>
        <Container className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
          {[
            ['1M+', 'People Reached'],
            ['50+', 'Communities Served'],
            ['10K+', 'Families Supported'],
          ].map(([value, label]) => (
            <div key={label}>
              <Heading className='text-5xl font-bold text-blue-600 mb-2'>
                {value}
              </Heading>
              <BodyText className='text-gray-700'>{label}</BodyText>
            </div>
          ))}
        </Container>
      </section>

      {/* Featured Programs */}
      <section className='py-16 bg-gray-50'>
        <Container>
          <div className='text-center mb-12'>
            <Heading className='text-3xl mb-4'>Our Programs</Heading>
            <BodyText className='text-gray-600 max-w-2xl mx-auto'>
              We offer a range of programs designed to support individuals with
              autism and their families across Africa.
            </BodyText>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredPrograms.map((program) => (
              <div key={program.title} className=' p-6 rounded-lg shadow-sm'>
                <div className='text-blue-600 mb-4'>{program.icon}</div>
                <Heading className='text-xl mb-3'>{program.title}</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  {program.description}
                </BodyText>
                <Button variant='outline' className='text-blue-600'>
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* Quick Links */}
      <section className='py-16 bg-gray-50'>
        <Container>
          <div className='text-center mb-12'>
            <Heading className='text-3xl mb-4'>Quick Links</Heading>
            <BodyText className='text-gray-600 max-w-2xl mx-auto'>
              Access our most popular resources and information.
            </BodyText>
          </div>
          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            onClick={scrollToTop}
          >
            {quickLinks.map((link) => (
              <QuickLink key={link.title} {...link} />
            ))}
          </div>
        </Container>
      </section>
      {/* Final CTA */}
      <section className='bg-black text-white py-24'>
        <Container className='text-center max-w-3xl mx-auto'>
          <Heading className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Make a Difference Today
          </Heading>
          <BodyText className='text-lg mb-8 text-white'>
            Join our mission to create inclusive environments for people with
            autism. Every effort counts.
          </BodyText>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='primary'
              size='lg'
              onClick={() => handleNavigation('/donate')}
            >
              Donate Now
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() => handleNavigation('/get-involved')}
            >
              Get Involved
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Home
