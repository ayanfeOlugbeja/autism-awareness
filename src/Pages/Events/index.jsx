import { Container, Grid, Card, Section } from '../../Components/layout'
import { Heading, BodyText, SmallText } from '../../Components/typography'
import { Button } from '../../Components/interactive'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Autism Awareness Walk 2024',
      date: 'April 2, 2024',
      time: '9:00 AM - 2:00 PM',
      location: 'Lagos Central Park',
      description:
        'Join us for our annual awareness walk to celebrate World Autism Awareness Day. The event includes a 5km walk, educational booths, and family activities.',
      image:
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Parent Support Workshop',
      date: 'April 15, 2024',
      time: '10:00 AM - 1:00 PM',
      location: 'Community Center, Accra',
      description:
        'A workshop designed to provide parents with practical strategies and resources for supporting their children with autism.',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Professional Development Conference',
      date: 'May 5-6, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Nairobi Convention Center',
      description:
        'A two-day conference bringing together professionals, researchers, and advocates to share the latest developments in autism support and research.',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ]

  const pastEvents = [
    {
      title: 'Community Resource Fair',
      date: 'March 1, 2024',
      location: 'Kampala Community Hall',
      description:
        'A successful event connecting families with local resources and support services.',
    },
    {
      title: 'Teacher Training Workshop',
      date: 'February 15, 2024',
      location: 'Dakar Education Center',
      description:
        'Workshop focused on inclusive education strategies for students with autism.',
    },
    {
      title: 'Family Fun Day',
      date: 'January 20, 2024',
      location: 'Cape Town Waterfront',
      description:
        'A day of activities and entertainment for families affected by autism.',
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section className='bg-blue-50'>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-4xl md:text-5xl mb-6'>
              Events & Activities
            </Heading>
            <BodyText className='text-lg text-gray-600 mb-8'>
              Join us at our upcoming events and activities designed to support,
              educate, and connect our community.
            </BodyText>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Upcoming Events
          </Heading>
          <Grid>
            {upcomingEvents.map((event) => (
              <Card key={event.title} className='overflow-hidden'>
                <div className='aspect-w-16 aspect-h-9 mb-4'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='object-cover w-full h-full rounded-t-lg'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 mb-3'>
                    <SmallText className='text-blue-600'>
                      {event.date}
                    </SmallText>
                    <SmallText className='text-gray-500'>
                      {event.time}
                    </SmallText>
                  </div>
                  <Heading className='text-xl mb-3'>{event.title}</Heading>
                  <BodyText className='text-gray-600 mb-2'>
                    <strong>Location:</strong> {event.location}
                  </BodyText>
                  <BodyText className='text-gray-600 mb-4'>
                    {event.description}
                  </BodyText>
                  <Button variant='primary'>Register Now</Button>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className='bg-gray-50'>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>Past Events</Heading>
          <Grid>
            {pastEvents.map((event) => (
              <Card key={event.title} className='p-6'>
                <div className='flex items-center gap-4 mb-3'>
                  <SmallText className='text-blue-600'>{event.date}</SmallText>
                </div>
                <Heading className='text-xl mb-3'>{event.title}</Heading>
                <BodyText className='text-gray-600 mb-2'>
                  <strong>Location:</strong> {event.location}
                </BodyText>
                <BodyText className='text-gray-600 mb-4'>
                  {event.description}
                </BodyText>
                <Button variant='outline' className='text-blue-600'>
                  View Photos
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-3xl mb-6'>Host an Event</Heading>
            <BodyText className='text-lg text-gray-600 mb-8'>
              Interested in hosting an event or workshop in your community? We
              can help you get started.
            </BodyText>
            <Button variant='primary'>Contact Us</Button>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Events
