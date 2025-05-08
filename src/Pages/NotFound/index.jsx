import { DisplayText, Heading, BodyText } from '../../Components/typography'
import { Container, Grid, Section } from '../../Components/layout'
import { NavigationCard, QuickLink, Button } from '../../Components/interactive'

const NotFound = () => {
  const navigationCards = [
    {
      title: 'Home',
      description: 'Return to our homepage',
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
            strokeWidth='1.5'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
      link: '/',
    },
    {
      title: 'About Us',
      description: 'Learn more about our mission',
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
            strokeWidth='1.5'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      link: '/about',
    },
    {
      title: 'Contact',
      description: 'Get in touch with our team',
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
            strokeWidth='1.5'
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
      link: '/contact',
    },
  ]

  const quickLinks = [
    { name: 'Resources', href: '/resources' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Donate', href: '/donate' },
    { name: 'News', href: '/news' },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section className='bg-blue-50'>
        <Container>
          <div className='text-center py-16'>
            <DisplayText className='mb-4'>404 - Page Not Found</DisplayText>
            <BodyText className='max-w-2xl mx-auto mb-8'>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </BodyText>
            <div className='flex justify-center space-x-4'>
              <Button variant='primary'>Go Home</Button>
              <Button variant='outline'>Contact Support</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className='text-center mb-16'>
            <Heading className='mb-4'>Where would you like to go?</Heading>
            <BodyText className='max-w-2xl mx-auto'>
              Here are some helpful links to get you back on track.
            </BodyText>
          </div>
          <Grid>
            {navigationCards.map((card) => (
              <NavigationCard
                key={card.title}
                to={card.link}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className='bg-gray-50'>
        <Container>
          <div className='text-center mb-16'>
            <Heading className='mb-4'>Quick Links</Heading>
            <BodyText className='max-w-2xl mx-auto'>
              Explore other important sections of our website.
            </BodyText>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>
            {quickLinks.map((link) => (
              <QuickLink key={link.name} to={link.href}>
                {link.name}
              </QuickLink>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default NotFound
