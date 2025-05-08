import { Heading, BodyText } from '../../../Components/typography'
import { Container, Grid, Card, Section } from '../../../Components/layout'
import { Button } from '../../../Components/interactive'

const WhatIsAutism = () => {
  const keyFacts = [
    {
      title: 'What is Autism?',
      description:
        'Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by differences in social communication and interaction, and restricted or repetitive patterns of behavior, interests, or activities.',
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
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
    },
    {
      title: 'Early Signs',
      description:
        'Early signs may include delayed speech development, limited eye contact, repetitive behaviors, and challenges with social interaction. Early detection and intervention can significantly improve outcomes.',
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
    },
    {
      title: 'Prevalence',
      description:
        'According to the World Health Organization (WHO), approximately 1 in 100 children has autism. However, prevalence rates may vary across different regions and communities.',
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
  ]

  const commonCharacteristics = [
    {
      title: 'Social Communication',
      description:
        'Differences in understanding and using verbal and non-verbal communication, such as facial expressions, gestures, and tone of voice.',
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
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
      ),
    },
    {
      title: 'Sensory Processing',
      description:
        'Unusual responses to sensory input, such as being over or under-sensitive to sounds, lights, textures, or smells.',
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
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
          />
        </svg>
      ),
    },
    {
      title: 'Repetitive Behaviors',
      description:
        'Engagement in repetitive movements, routines, or interests, which can provide comfort and predictability.',
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
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      ),
    },
  ]

  const supportStrategies = [
    {
      title: 'Early Intervention',
      description:
        'Access to early diagnosis and intervention services can significantly improve developmental outcomes and quality of life.',
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
    },
    {
      title: 'Educational Support',
      description:
        'Individualized education plans and inclusive classroom environments can help children with autism thrive academically and socially.',
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
      title: 'Family Support',
      description:
        'Access to resources, support groups, and training can help families better understand and support their loved ones with autism.',
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
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section className='bg-blue-50'>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-4xl md:text-5xl mb-6'>
              Understanding Autism
            </Heading>
            <BodyText className='text-lg text-gray-600 mb-8'>
              Learn about autism spectrum disorder, its characteristics, and how
              to support individuals with autism in African contexts.
            </BodyText>
          </div>
        </Container>
      </Section>

      {/* Key Facts */}
      <Section>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>Key Facts</Heading>
          <Grid>
            {keyFacts.map((fact) => (
              <Card key={fact.title} className='p-6'>
                <div className='text-blue-600 mb-4'>{fact.icon}</div>
                <Heading className='text-xl mb-3'>{fact.title}</Heading>
                <BodyText className='text-gray-600'>
                  {fact.description}
                </BodyText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Common Characteristics */}
      <Section className='bg-gray-50'>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Common Characteristics
          </Heading>
          <Grid>
            {commonCharacteristics.map((characteristic) => (
              <Card key={characteristic.title} className='p-6'>
                <div className='text-blue-600 mb-4'>{characteristic.icon}</div>
                <Heading className='text-xl mb-3'>
                  {characteristic.title}
                </Heading>
                <BodyText className='text-gray-600'>
                  {characteristic.description}
                </BodyText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Support Strategies */}
      <Section>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Support Strategies
          </Heading>
          <Grid>
            {supportStrategies.map((strategy) => (
              <Card key={strategy.title} className='p-6'>
                <div className='text-blue-600 mb-4'>{strategy.icon}</div>
                <Heading className='text-xl mb-3'>{strategy.title}</Heading>
                <BodyText className='text-gray-600'>
                  {strategy.description}
                </BodyText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className='bg-blue-50'>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-3xl mb-6'>Need More Information?</Heading>
            <BodyText className='text-lg text-gray-600 mb-8'>
              Explore our resources, connect with support groups, or contact our
              team for personalized guidance.
            </BodyText>
            <div className='flex justify-center space-x-4'>
              <Button variant='primary'>View Resources</Button>
              <Button variant='outline'>Contact Us</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default WhatIsAutism
