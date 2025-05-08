import React from 'react'
import {
  DisplayText,
  Heading,
  BodyText,
  SmallText,
} from '../../../components/typography'
import { Container, Grid, Card, Section } from '../../../components/layout'
import { Button } from '../../../components/interactive'

const Publications = () => {
  const categories = [
    {
      title: 'Research Papers',
      description:
        'Peer-reviewed academic publications on autism research in African contexts.',
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
      title: 'Policy Briefs',
      description:
        'Evidence-based recommendations for policy makers and stakeholders.',
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
            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      ),
    },
    {
      title: 'Educational Materials',
      description:
        'Resources for educators, families, and healthcare professionals.',
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
  ]

  const recentPublications = [
    {
      title:
        'Prevalence and Characteristics of Autism Spectrum Disorder in Africa',
      authors: 'Bakare, M.O., et al.',
      year: '2023',
      journal: 'Journal of Autism and Developmental Disorders',
      doi: '10.1007/s10803-023-05948-1',
      link: 'https://doi.org/10.1007/s10803-023-05948-1',
    },
    {
      title:
        'Cultural Adaptation of Autism Interventions in Sub-Saharan Africa',
      authors: 'Franz, L., et al.',
      year: '2022',
      journal: 'Autism Research',
      doi: '10.1002/aur.2756',
      link: 'https://doi.org/10.1002/aur.2756',
    },
    {
      title: 'Early Detection and Intervention in Rural African Communities',
      authors: 'Tekola, B., et al.',
      year: '2023',
      journal: 'Global Health Action',
      doi: '10.1080/16549716.2023.2166457',
      link: 'https://doi.org/10.1080/16549716.2023.2166457',
    },
  ]

  const policyBriefs = [
    {
      title: 'Inclusive Education for Children with Autism in Africa',
      authors: 'UNESCO & WHO',
      year: '2023',
      description:
        'Policy recommendations for implementing inclusive education systems.',
      link: '/publications/inclusive-education',
    },
    {
      title: 'Healthcare Access for Autism in Rural Communities',
      authors: 'WHO & African Union',
      year: '2023',
      description:
        'Strategies for improving healthcare access and service delivery.',
      link: '/publications/healthcare-access',
    },
    {
      title: 'Family Support Systems in African Contexts',
      authors: 'UNICEF & Local NGOs',
      year: '2023',
      description: 'Guidelines for developing community-based support systems.',
      link: '/publications/family-support',
    },
  ]

  const educationalResources = [
    {
      title: 'Understanding Autism: A Guide for African Families',
      authors: 'AAA Team',
      year: '2023',
      description:
        'Comprehensive guide for families on understanding and supporting children with autism.',
      link: '/resources/family-guide',
    },
    {
      title: 'Teaching Strategies for Children with Autism',
      authors: 'AAA Education Team',
      year: '2023',
      description:
        'Practical strategies for educators working with children with autism.',
      link: '/resources/teaching-strategies',
    },
    {
      title: 'Healthcare Provider Training Manual',
      authors: 'AAA Medical Team',
      year: '2023',
      description:
        'Training manual for healthcare professionals on autism diagnosis and support.',
      link: '/resources/healthcare-manual',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section className='bg-blue-50'>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-4xl md:text-5xl mb-6'>
              Publications & Resources
            </Heading>
            <BodyText className='text-lg text-gray-600 mb-8'>
              Evidence-based resources and publications to support understanding
              and intervention for autism in African contexts.
            </BodyText>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Resource Categories
          </Heading>
          <Grid>
            {categories.map((category) => (
              <Card key={category.title} className='p-6'>
                <div className='text-blue-600 mb-4'>{category.icon}</div>
                <Heading className='text-xl mb-3'>{category.title}</Heading>
                <BodyText className='text-gray-600'>
                  {category.description}
                </BodyText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Recent Publications */}
      <Section className='bg-gray-50'>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Recent Publications
          </Heading>
          <Grid>
            {recentPublications.map((pub) => (
              <Card key={pub.title} className='p-6'>
                <Heading className='text-xl mb-3'>{pub.title}</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  {pub.authors} ({pub.year})
                </BodyText>
                <SmallText className='text-gray-500 mb-4'>
                  {pub.journal}
                </SmallText>
                <SmallText className='text-gray-500 mb-4'>
                  DOI: {pub.doi}
                </SmallText>
                <Button variant='outline' className='w-full'>
                  View Publication
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Policy Briefs */}
      <Section>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Policy Briefs
          </Heading>
          <Grid>
            {policyBriefs.map((brief) => (
              <Card key={brief.title} className='p-6'>
                <Heading className='text-xl mb-3'>{brief.title}</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  {brief.authors} ({brief.year})
                </BodyText>
                <BodyText className='text-gray-600 mb-4'>
                  {brief.description}
                </BodyText>
                <Button variant='outline' className='w-full'>
                  Read Brief
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Educational Resources */}
      <Section className='bg-gray-50'>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Educational Resources
          </Heading>
          <Grid>
            {educationalResources.map((resource) => (
              <Card key={resource.title} className='p-6'>
                <Heading className='text-xl mb-3'>{resource.title}</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  {resource.authors} ({resource.year})
                </BodyText>
                <BodyText className='text-gray-600 mb-4'>
                  {resource.description}
                </BodyText>
                <Button variant='outline' className='w-full'>
                  Access Resource
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </div>
  )
}

export default Publications
