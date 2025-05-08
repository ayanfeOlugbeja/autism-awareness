import {
  DisplayText,
  Heading,
  BodyText,
  SmallText,
} from '../../Components/typography'
import { Container, Grid, Card, Section } from '../../Components/layout'
import { Button, NavigationCard } from '../../Components/interactive'

const GetInvolved = () => {
  const waysToHelp = [
    {
      title: 'Volunteer',
      description:
        'Share your time and skills to make a difference in the lives of individuals with autism.',
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
            strokeWidth='1'
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      link: '/volunteer',
    },
    {
      title: 'Donate',
      description:
        'Support our programs and initiatives through financial contributions.',
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
            strokeWidth='1'
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      link: '/donate',
    },
    {
      title: 'Partner With Us',
      description:
        'Collaborate with us to create lasting impact in the autism community.',
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
            strokeWidth='1'
            d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
          />
        </svg>
      ),
      link: '/partnerships',
    },
  ]

  const volunteerOpportunities = [
    {
      title: 'Program Support',
      description: 'Assist in our various programs and activities.',
      requirements: [
        'Background in education or healthcare preferred',
        'Commitment of at least 4 hours per week',
        'Patience and understanding of autism',
      ],
    },
    {
      title: 'Administrative Support',
      description: 'Help with office tasks and program coordination.',
      requirements: [
        'Strong organizational skills',
        'Proficiency in Microsoft Office',
        'Attention to detail',
      ],
    },
    {
      title: 'Community Outreach',
      description: 'Help raise awareness and build community connections.',
      requirements: [
        'Excellent communication skills',
        'Experience in event planning',
        'Networking abilities',
      ],
    },
  ]

  const partnershipOpportunities = [
    {
      title: 'Corporate Partnerships',
      description:
        'Partner with us to create inclusive workplaces and support our programs.',
      benefits: [
        'Employee engagement opportunities',
        'Corporate social responsibility impact',
        'Brand visibility in the community',
      ],
    },
    {
      title: 'Educational Institutions',
      description: 'Collaborate on research and training programs.',
      benefits: [
        'Access to research opportunities',
        'Student engagement programs',
        'Professional development',
      ],
    },
    {
      title: 'Healthcare Providers',
      description: 'Work together to improve autism care and support.',
      benefits: [
        'Professional networking',
        'Resource sharing',
        'Community impact',
      ],
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section>
        <Container>
          <div className='text-center mb-16'>
            <DisplayText className='mb-4'>Get Involved</DisplayText>
            <BodyText className='max-w-2xl mx-auto'>
              Join us in creating a more inclusive and supportive environment
              for individuals with autism across Africa.
            </BodyText>
          </div>

          {/* Ways to Help */}
          <Grid className='mb-16'>
            {waysToHelp.map((way) => (
              <NavigationCard
                key={way.title}
                to={way.link}
                icon={way.icon}
                title={way.title}
                description={way.description}
              />
            ))}
          </Grid>

          {/* Volunteer Opportunities */}
          <div className='mb-16'>
            <Heading className='text-center mb-8'>
              Volunteer Opportunities
            </Heading>
            <Grid>
              {volunteerOpportunities.map((opportunity) => (
                <Card key={opportunity.title} className='p-8'>
                  <Heading className='text-xl mb-4'>
                    {opportunity.title}
                  </Heading>
                  <BodyText className='mb-6'>
                    {opportunity.description}
                  </BodyText>
                  <div className='space-y-2'>
                    {opportunity.requirements.map((req, index) => (
                      <SmallText key={index} className='flex items-center'>
                        <span className='mr-2'>•</span>
                        {req}
                      </SmallText>
                    ))}
                  </div>
                  <Button variant='outline' className='mt-6'>
                    Apply Now
                  </Button>
                </Card>
              ))}
            </Grid>
          </div>

          {/* Partnership Opportunities */}
          <div>
            <Heading className='text-center mb-8'>
              Partnership Opportunities
            </Heading>
            <Grid>
              {partnershipOpportunities.map((partnership) => (
                <Card key={partnership.title} className='p-8'>
                  <Heading className='text-xl mb-4'>
                    {partnership.title}
                  </Heading>
                  <BodyText className='mb-6'>
                    {partnership.description}
                  </BodyText>
                  <div className='space-y-2'>
                    {partnership.benefits.map((benefit, index) => (
                      <SmallText key={index} className='flex items-center'>
                        <span className='mr-2'>•</span>
                        {benefit}
                      </SmallText>
                    ))}
                  </div>
                  <Button variant='outline' className='mt-6'>
                    Learn More
                  </Button>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default GetInvolved
