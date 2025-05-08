import { useState } from 'react'
import {
  DisplayText,
  Heading,
  BodyText,
  SmallText,
} from '../../Components/typography'
import { Container, Grid, Card, Section } from '../../Components/layout'
import { Input, TextArea, Button } from '../../Components/interactive'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const officeLocations = [
    {
      city: 'Lagos, Nigeria',
      address: '123 Autism Street, Victoria Island',
      phone: '+234 123 456 7890',
      email: 'lagos@autismawareness.africa',
    },
    {
      city: 'Nairobi, Kenya',
      address: '456 Support Avenue, Westlands',
      phone: '+254 123 456 789',
      email: 'nairobi@autismawareness.africa',
    },
    {
      city: 'Accra, Ghana',
      address: '789 Care Road, East Legon',
      phone: '+233 123 456 789',
      email: 'accra@autismawareness.africa',
    },
  ]

  const contactMethods = [
    {
      title: 'General Inquiries',
      email: 'info@autismawareness.africa',
      phone: '+234 123 456 7890',
    },
    {
      title: 'Support Services',
      email: 'support@autismawareness.africa',
      phone: '+234 123 456 7891',
    },
    {
      title: 'Partnerships',
      email: 'partnerships@autismawareness.africa',
      phone: '+234 123 456 7892',
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section>
        <Container>
          <div className='text-center mb-16'>
            <DisplayText className='mb-4'>Contact Us</DisplayText>
            <BodyText className='max-w-2xl mx-auto'>
              We&apos;re here to help. Reach out to us with any questions,
              concerns, or to learn more about our services.
            </BodyText>
          </div>

          {/* Contact Methods */}
          <Grid className='mb-16'>
            {contactMethods.map((method) => (
              <Card key={method.title} className='p-8'>
                <Heading className='text-xl mb-4'>{method.title}</Heading>
                <div className='space-y-2'>
                  <SmallText>Email: {method.email}</SmallText>
                  <SmallText>Phone: {method.phone}</SmallText>
                </div>
              </Card>
            ))}
          </Grid>

          {/* Contact Form */}
          <div className='max-w-2xl mx-auto'>
            <Card className='p-8'>
              <Heading className='mb-6'>Send us a Message</Heading>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <Input
                  label='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label='Email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label='Subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <TextArea
                  label='Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='5'
                  required
                />
                <Button type='submit'>Send Message</Button>
              </form>
            </Card>
          </div>

          {/* Office Locations */}
          <div className='mt-16'>
            <Heading className='text-center mb-8'>Our Offices</Heading>
            <Grid>
              {officeLocations.map((location) => (
                <Card key={location.city} className='p-8'>
                  <Heading className='text-xl mb-4'>{location.city}</Heading>
                  <div className='space-y-2'>
                    <SmallText>{location.address}</SmallText>
                    <SmallText>Phone: {location.phone}</SmallText>
                    <SmallText>Email: {location.email}</SmallText>
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Contact
