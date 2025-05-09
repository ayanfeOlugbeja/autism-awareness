import { Routes, Route, Link } from 'react-router-dom'
import Mission from './Mission'
import Team from './Team'
import Impact from './Impact'
import Careers from './Careers'
import { BodyText, DisplayText } from '../../Components/typography'

const About = () => {
  const subPages = [
    { name: 'Our Mission', path: '/about/mission' },
    { name: 'Our Team', path: '/about/team' },
    { name: 'Our Impact', path: '/about/impact' },
    { name: 'Careers', path: '/about/careers' },
  ]

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <DisplayText className='mb-4'>About</DisplayText>
            <BodyText className='max-w-2xl mx-auto'>
              We are dedicated to creating a more inclusive and supportive
              environment for individuals with autism across Africa.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Navigation and Content */}
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
                <Route path='mission' element={<Mission />} />
                <Route path='team' element={<Team />} />
                <Route path='impact' element={<Impact />} />
                <Route path='careers' element={<Careers />} />
                <Route index element={<Mission />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
