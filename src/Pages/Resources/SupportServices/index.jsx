import {
  DisplayText,
  Heading,
  BodyText,
  // SmallText,
} from '../../../Components/typography'
import { Container, Grid, Card, Section } from '../../../Components/layout'
import { Button, NavigationCard } from '../../../Components/interactive'

const SupportServices = () => {
  const services = [
    {
      title: 'Early Intervention',
      description:
        'Comprehensive early intervention services for children with autism, including developmental assessment, therapy, and family support.',
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
            strokeWidth='1.5'
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      link: '/services/early-intervention',
    },
    {
      title: 'Educational Support',
      description:
        'Specialized educational programs and support services for students with autism, including individualized learning plans and classroom accommodations.',
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
            strokeWidth='1.5'
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
      link: '/services/education',
    },
    {
      title: 'Family Support',
      description:
        'Resources and support for families, including parent training, counseling, and access to community resources and support groups.',
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
            strokeWidth='1.5'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
      link: '/services/family-support',
    },
  ]

  const programs = [
    {
      title: 'Community Outreach',
      description:
        'Programs to raise awareness and provide support in local communities, including workshops, training sessions, and resource distribution.',
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
            strokeWidth='1.5'
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Professional Training',
      description:
        'Training programs for educators, healthcare providers, and other professionals working with individuals with autism.',
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
            strokeWidth='1.5'
            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
    },
    {
      title: 'Advocacy & Policy',
      description:
        'Efforts to promote policies and practices that support the rights and needs of individuals with autism in Africa.',
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
            strokeWidth='1.5'
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      ),
    },
  ]

  const resources = [
    {
      title: 'Information & Guides',
      description:
        'Comprehensive guides and resources for families, educators, and healthcare providers.',
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
            strokeWidth='1.5'
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
    },
    {
      title: 'Support Groups',
      description:
        'Connect with other families and individuals affected by autism through our support groups and community events.',
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
            strokeWidth='1.5'
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Online Resources',
      description:
        'Access our digital library of resources, including webinars, training materials, and research updates.',
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
            strokeWidth='1.5'
            d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section>
        <Container>
          <div className='text-center mb-16'>
            <DisplayText className='mb-4'>Support Services</DisplayText>
            <BodyText className='max-w-2xl mx-auto'>
              Comprehensive support services designed to meet the unique needs
              of individuals with autism and their families.
            </BodyText>
          </div>

          {/* Main Services */}
          <Grid className='mb-16'>
            {services.map((service) => (
              <NavigationCard
                key={service.title}
                to={service.link}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </Grid>

          {/* Programs */}
          <div className='mb-16'>
            <Heading className='text-center mb-8'>Our Programs</Heading>
            <Grid>
              {programs.map((program) => (
                <Card key={program.title} className='p-8'>
                  <Heading className='text-xl mb-4'>{program.title}</Heading>
                  <BodyText className='mb-6'>{program.description}</BodyText>
                  {/* <div className='space-y-2'>
                    {program.features.map((feature, index) => (
                      <SmallText key={index} className='flex items-center'>
                        <span className='mr-2'>•</span>
                        {feature}
                      </SmallText>
                    ))}
                  </div> */}
                  <Button variant='outline' className='mt-6'>
                    Learn More
                  </Button>
                </Card>
              ))}
            </Grid>
          </div>

          {/* Additional Resources */}
          <div>
            <Heading className='text-center mb-8'>Additional Resources</Heading>
            <Grid>
              {resources.map((resource) => (
                <Card key={resource.title} className='p-8'>
                  <div className='text-blue-600 mb-4'>{resource.icon}</div>
                  <Heading className='text-xl mb-4'>{resource.title}</Heading>
                  <BodyText className='mb-6'>{resource.description}</BodyText>
                  <Button variant='outline'>Access Resources</Button>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default SupportServices
