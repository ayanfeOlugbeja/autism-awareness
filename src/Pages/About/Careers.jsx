import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Grid, Card, Section } from '../../components/layout'
import { Heading, BodyText, SmallText } from '../../components/typography'
import { Button } from '../../components/interactive'

const Careers = () => {
  const openPositions = [
    {
      title: 'Program Coordinator',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description:
        'Coordinate and manage autism support programs across West Africa.',
      requirements: [
        "Bachelor's degree in Social Work, Psychology, or related field",
        '3+ years of program management experience',
        'Experience working with autism or developmental disabilities',
        'Strong communication and organizational skills',
      ],
    },
    {
      title: 'Research Associate',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description:
        'Conduct research on autism in African contexts and contribute to our knowledge base.',
      requirements: [
        "Master's degree in Psychology, Public Health, or related field",
        '2+ years of research experience',
        'Experience with qualitative and quantitative research methods',
        'Strong analytical and writing skills',
      ],
    },
    {
      title: 'Community Outreach Specialist',
      location: 'Accra, Ghana',
      type: 'Full-time',
      description:
        'Develop and maintain relationships with communities and partner organizations.',
      requirements: [
        "Bachelor's degree in Community Development or related field",
        '2+ years of community engagement experience',
        'Experience working with diverse communities',
        'Strong interpersonal and networking skills',
      ],
    },
  ]

  const benefits = [
    {
      title: 'Professional Development',
      description:
        'Access to training, workshops, and conferences to enhance your skills and knowledge.',
    },
    {
      title: 'Health & Wellness',
      description:
        'Comprehensive health insurance and wellness programs to support your wellbeing.',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and generous leave policies.',
    },
    {
      title: 'Impact',
      description:
        'Make a meaningful difference in the lives of individuals with autism and their families.',
    },
  ]

  // Structured data for job postings
  const jobPostingsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: openPositions.map((position, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'JobPosting',
        title: position.title,
        description: position.description,
        employmentType: position.type,
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: position.location.split(',')[0],
            addressCountry: position.location.split(',')[1].trim(),
          },
        },
        requirements: position.requirements.join(' '),
      },
    })),
  }

  return (
    <>
      <Helmet>
        <title>Careers at Autism Awareness Africa | Join Our Team</title>
        <meta
          name='description'
          content="Join Autism Awareness Africa's mission to create a more inclusive environment for individuals with autism across Africa. Explore our open positions and make a difference."
        />
        <meta
          name='keywords'
          content='autism careers, autism jobs, program coordinator, research associate, community outreach, Africa, autism awareness'
        />
        <link rel='canonical' href='https://autismawareness.africa/careers' />
        <script type='application/ld+json'>
          {JSON.stringify(jobPostingsSchema)}
        </script>
      </Helmet>

      <main className='min-h-screen bg-white'>
        <Section className='bg-blue-50'>
          <Container>
            <div className='max-w-3xl mx-auto text-center'>
              <Heading className='text-4xl md:text-5xl mb-6'>
                Join Our Team
              </Heading>
              <BodyText className='text-lg text-gray-600 mb-8'>
                Help us create a more inclusive and supportive environment for
                individuals with autism across Africa.
              </BodyText>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <Heading className='text-3xl mb-12 text-center'>
              Open Positions
            </Heading>
            <Grid>
              {openPositions.map((position) => (
                <Card key={position.title} className='p-6'>
                  <Heading className='text-xl mb-2'>{position.title}</Heading>
                  <div className='flex items-center gap-4 mb-4'>
                    <SmallText className='text-gray-600'>
                      {position.location}
                    </SmallText>
                    <SmallText className='text-gray-600'>
                      {position.type}
                    </SmallText>
                  </div>
                  <BodyText className='text-gray-600 mb-4'>
                    {position.description}
                  </BodyText>
                  <div className='mb-6'>
                    <Heading className='text-lg mb-2'>Requirements:</Heading>
                    <ul className='list-disc pl-6 space-y-1'>
                      {position.requirements.map((req, index) => (
                        <li key={index} className='text-gray-600'>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant='primary' className='w-full'>
                    Apply Now
                  </Button>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section className='bg-gray-50'>
          <Container>
            <Heading className='text-3xl mb-12 text-center'>
              Why Join Us?
            </Heading>
            <Grid>
              {benefits.map((benefit) => (
                <Card key={benefit.title} className='p-6'>
                  <Heading className='text-xl mb-3'>{benefit.title}</Heading>
                  <BodyText className='text-gray-600'>
                    {benefit.description}
                  </BodyText>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className='max-w-3xl mx-auto text-center'>
              <Heading className='text-3xl mb-6'>
                Don&apos;t See a Perfect Match?
              </Heading>
              <BodyText className='text-lg text-gray-600 mb-8'>
                We&apos;re always looking for talented individuals who are
                passionate about making a difference. Send us your resume and
                we&apos;ll keep you in mind for future opportunities.
              </BodyText>
              <Button variant='outline'>Submit Resume</Button>
            </div>
          </Container>
        </Section>
      </main>
    </>
  )
}

export default Careers
