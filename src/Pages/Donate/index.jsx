import React, { useState } from 'react'
import {
  DisplayText,
  Heading,
  BodyText,
  SmallText,
} from '../../components/typography'
import { Container, Grid, Card, Section } from '../../components/layout'
import { Button, Input } from '../../components/interactive'

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = selectedAmount || customAmount
    console.log('Donation amount:', amount)
  }

  const impactAreas = [
    {
      title: 'Education & Training',
      description:
        'Support educational programs and training for families and professionals.',
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
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
    },
    {
      title: 'Support Services',
      description:
        'Help provide essential support services to individuals with autism and their families.',
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
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Research & Advocacy',
      description:
        'Contribute to research initiatives and advocacy efforts across Africa.',
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
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
    },
  ]

  const donationOptions = [
    {
      amount: 50,
      description: 'Provides educational materials for one family',
    },
    { amount: 100, description: 'Supports one month of therapy sessions' },
    { amount: 250, description: 'Funds a training workshop for professionals' },
    { amount: 500, description: 'Sponsors a research project for one month' },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section>
        <Container>
          <div className='text-center mb-16'>
            <DisplayText className='mb-4'>Make a Difference</DisplayText>
            <BodyText className='max-w-2xl mx-auto'>
              Your donation helps us provide essential services, support
              research, and create awareness about autism across Africa.
            </BodyText>
          </div>

          {/* Impact Areas */}
          <Grid className='mb-16'>
            {impactAreas.map((area) => (
              <Card key={area.title} className='p-8'>
                <div className='text-blue-600 mb-4'>{area.icon}</div>
                <Heading className='text-xl mb-4'>{area.title}</Heading>
                <BodyText>{area.description}</BodyText>
              </Card>
            ))}
          </Grid>

          {/* Donation Form */}
          <div className='max-w-2xl mx-auto'>
            <Card className='p-8'>
              <Heading className='mb-6'>Make a Donation</Heading>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-2 gap-4'>
                  {donationOptions.map((option) => (
                    <button
                      key={option.amount}
                      type='button'
                      onClick={() => handleAmountSelect(option.amount)}
                      className={`p-4 border text-left transition-all duration-300 ${
                        selectedAmount === option.amount
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <div className='font-normal text-gray-900'>
                        ${option.amount}
                      </div>
                      <SmallText>{option.description}</SmallText>
                    </button>
                  ))}
                </div>

                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <span className='text-gray-500'>$</span>
                  </div>
                  <Input
                    type='number'
                    placeholder='Enter custom amount'
                    value={customAmount}
                    onChange={handleCustomAmount}
                    className='pl-7'
                  />
                </div>

                <Button type='submit' className='w-full'>
                  Donate Now
                </Button>
              </form>
            </Card>
          </div>

          {/* Other Ways to Give */}
          <div className='mt-16'>
            <Heading className='text-center mb-8'>Other Ways to Give</Heading>
            <Grid cols={2}>
              <Card className='p-8'>
                <Heading className='text-xl mb-4'>Monthly Giving</Heading>
                <BodyText>
                  Set up a recurring donation to provide consistent support for
                  our programs and services.
                </BodyText>
                <Button variant='outline' className='mt-4'>
                  Set Up Monthly Donation
                </Button>
              </Card>
              <Card className='p-8'>
                <Heading className='text-xl mb-4'>Corporate Matching</Heading>
                <BodyText>
                  Many employers match charitable contributions. Check if your
                  company offers matching gifts.
                </BodyText>
                <Button variant='outline' className='mt-4'>
                  Learn More
                </Button>
              </Card>
            </Grid>
          </div>

          {/* Trust Indicators */}
          <div className='mt-16'>
            <Grid>
              <Card className='p-8 text-center'>
                <Heading className='text-2xl mb-2'>85%</Heading>
                <BodyText>of funds go directly to programs</BodyText>
              </Card>
              <Card className='p-8 text-center'>
                <Heading className='text-2xl mb-2'>15+</Heading>
                <BodyText>countries served across Africa</BodyText>
              </Card>
              <Card className='p-8 text-center'>
                <Heading className='text-2xl mb-2'>10,000+</Heading>
                <BodyText>lives impacted annually</BodyText>
              </Card>
            </Grid>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Donate
