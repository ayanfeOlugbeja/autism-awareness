import { Container, Grid, Card, Section } from '../../Components/layout'
import { Heading, BodyText, SmallText } from '../../Components/typography'
import { Button } from '../../Components/interactive'

const News = () => {
  const featuredNews = [
    {
      title: 'New Autism Center Opens in Lagos',
      date: 'March 15, 2024',
      category: 'Announcement',
      description:
        'Our new state-of-the-art autism center in Lagos will provide comprehensive support services to families.',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Research Partnership with University of Nairobi',
      date: 'March 10, 2024',
      category: 'Partnership',
      description:
        "We're excited to announce a new research partnership focused on understanding autism in East African contexts.",
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Community Training Program Success',
      date: 'March 5, 2024',
      category: 'Impact',
      description:
        'Our community training program has successfully trained over 500 healthcare workers across West Africa.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ]

  const recentNews = [
    {
      title: 'New Support Group Launches in Accra',
      date: 'March 1, 2024',
      category: 'Community',
      description:
        'A new support group for families affected by autism has been established in Accra.',
    },
    {
      title: 'Awareness Campaign Results',
      date: 'February 28, 2024',
      category: 'Campaign',
      description:
        'Our recent awareness campaign reached over 100,000 people across social media platforms.',
    },
    {
      title: 'Volunteer Recognition',
      date: 'February 25, 2024',
      category: 'Recognition',
      description:
        'We celebrate our dedicated volunteers who have contributed over 10,000 hours of service.',
    },
    {
      title: 'New Resource Guide Released',
      date: 'February 20, 2024',
      category: 'Resources',
      description:
        'Our comprehensive resource guide for families is now available in multiple African languages.',
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section className='bg-blue-50'>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-4xl md:text-5xl mb-6'>
              Latest News & Updates
            </Heading>
            <BodyText className='text-lg text-gray-600 mb-8'>
              Stay informed about our latest initiatives, partnerships, and
              impact across Africa.
            </BodyText>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Featured Stories
          </Heading>
          <Grid>
            {featuredNews.map((news) => (
              <Card key={news.title} className='overflow-hidden'>
                <div className='aspect-w-16 aspect-h-9 mb-4'>
                  <img
                    src={news.image}
                    alt={news.title}
                    className='object-cover w-full h-full rounded-t-lg'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-4 mb-3'>
                    <SmallText className='text-blue-600'>
                      {news.category}
                    </SmallText>
                    <SmallText className='text-gray-500'>{news.date}</SmallText>
                  </div>
                  <Heading className='text-xl mb-3'>{news.title}</Heading>
                  <BodyText className='text-gray-600 mb-4'>
                    {news.description}
                  </BodyText>
                  <Button variant='text' className='text-blue-600'>
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className='bg-gray-50'>
        <Container>
          <Heading className='text-3xl mb-12 text-center'>
            Recent Updates
          </Heading>
          <Grid>
            {recentNews.map((news) => (
              <Card key={news.title} className='p-6'>
                <div className='flex items-center gap-4 mb-3'>
                  <SmallText className='text-blue-600'>
                    {news.category}
                  </SmallText>
                  <SmallText className='text-gray-500'>{news.date}</SmallText>
                </div>
                <Heading className='text-xl mb-3'>{news.title}</Heading>
                <BodyText className='text-gray-600 mb-4'>
                  {news.description}
                </BodyText>
                <Button variant='text' className='text-blue-600'>
                  Read More
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className='max-w-3xl mx-auto text-center'>
            <Heading className='text-3xl mb-6'>Stay Updated</Heading>
            <BodyText className='text-lg text-gray-600 mb-8'>
              Subscribe to our newsletter to receive the latest news and updates
              directly in your inbox.
            </BodyText>
            <Button variant='primary'>Subscribe to Newsletter</Button>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default News
