import { Link } from 'react-router-dom'
import { Container } from '../layout'
import { Heading, BodyText, SmallText } from '../typography'
import { Button } from '../interactive'

const Footer = () => {
  const navigation = {
    about: [
      { name: 'Our Mission', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Our Impact', href: '/about/impact' },
    ],
    resources: [
      { name: 'What is Autism', href: '/resources/what-is-autism' },
      { name: 'Support Services', href: '/resources/support-services' },
      { name: 'Research', href: '/resources/research' },
      { name: 'Publications', href: '/resources/publications' },
    ],
    getInvolved: [
      { name: 'Volunteer', href: '/get-involved/volunteer' },
      { name: 'Donate', href: '/donate' },
      { name: 'Partnerships', href: '/get-involved/partnerships' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  }

  return (
    <footer className='bg-gray-50 border-t border-gray-100'>
      <Container>
        <div className='py-12 md:py-16'>
          {/* Main Footer Content */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
            {/* About Section */}
            <div>
              <Heading className='text-lg mb-4'>About</Heading>
              <ul className='space-y-3'>
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <Heading className='text-lg mb-4'>Resources</Heading>
              <ul className='space-y-3'>
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved Section */}
            <div>
              <Heading className='text-lg mb-4'>Get Involved</Heading>
              <ul className='space-y-3'>
                {navigation.getInvolved.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='text-gray-600 hover:text-blue-600 transition-colors'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <Heading className='text-lg mb-4'>Contact</Heading>
              <BodyText className='text-gray-600 mb-4'>
                Have questions? We&apos;re here to help.
              </BodyText>
              <Button variant='outline' className='w-full'>
                Contact Us
              </Button>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className='border-t border-gray-100 pt-8 mb-8'>
            <div className='max-w-xl mx-auto text-center'>
              <Heading className='text-lg mb-4'>Stay Updated</Heading>
              <BodyText className='text-gray-600 mb-6'>
                Subscribe to our newsletter for the latest updates and
                resources.
              </BodyText>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <Button variant='primary'>Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='border-t border-gray-100 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <div className='flex items-center'>
                <Link to='/' className='text-xl font-bold text-blue-600'>
                  AAA
                </Link>
                <SmallText className='text-gray-500 ml-4'>
                  © {new Date().getFullYear()} Autism Awareness Africa. All
                  rights reserved.
                </SmallText>
              </div>
              <ul className='flex space-x-6'>
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='text-gray-500 hover:text-blue-600 transition-colors'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
