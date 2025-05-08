import {
  DisplayText,
  Heading,
  BodyText,
  SmallText,
} from '../../../Components/typography'
import { Container, Grid, Card, Section } from '../../../Components/layout'
import { Button, NavigationCard } from '../../../Components/interactive'

const Research = () => {
  const researchAreas = [
    {
      title: 'Early Detection',
      description:
        'Research focused on improving early detection and diagnosis of autism in African communities.',
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
      link: '/research/early-detection',
    },
    {
      title: 'Cultural Adaptation',
      description:
        'Studies on adapting autism interventions to African cultural contexts and traditions.',
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
      link: '/research/cultural-adaptation',
    },
    {
      title: 'Treatment Outcomes',
      description:
        'Evaluation of treatment effectiveness and outcomes in African settings.',
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
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
      ),
      link: '/research/treatment-outcomes',
    },
  ]

  const currentProjects = [
    {
      title: 'Community-Based Screening',
      description:
        'Developing and testing community-based screening tools for autism in rural African communities.',
      status: 'In Progress',
      partners: [
        'Local healthcare providers',
        'Community leaders',
        'International research institutions',
      ],
    },
    {
      title: 'Family Support Models',
      description:
        'Researching effective family support models in African cultural contexts.',
      status: 'Planning Phase',
      partners: [
        'Family support organizations',
        'Cultural consultants',
        'Healthcare professionals',
      ],
    },
    {
      title: 'Educational Interventions',
      description:
        'Evaluating the effectiveness of educational interventions in African schools.',
      status: 'Data Collection',
      partners: [
        'Local schools',
        'Education departments',
        'Special education experts',
      ],
    },
  ]

  const publications = [
    {
      title: 'Autism in Africa: Current Understanding and Future Directions',
      authors: 'Dr. Sarah Johnson, Dr. Kwame Mensah',
      year: '2023',
      journal: 'Journal of Autism Research',
      link: '/publications/autism-africa',
    },
    {
      title: 'Cultural Adaptation of Autism Interventions',
      authors: 'Dr. Aisha Okafor, Dr. James Wilson',
      year: '2022',
      journal: 'International Journal of Developmental Disorders',
      link: '/publications/cultural-adaptation',
    },
    {
      title: 'Early Detection in Rural Communities',
      authors: 'Dr. Michael Chen, Dr. Fatima Diallo',
      year: '2022',
      journal: 'African Journal of Health Sciences',
      link: '/publications/early-detection',
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Section>
        <Container>
          <div className='text-center mb-16'>
            <DisplayText className='mb-4'>Research & Innovation</DisplayText>
            <BodyText className='max-w-2xl mx-auto'>
              Advancing understanding and improving support for autism in
              African communities through research and innovation.
            </BodyText>
          </div>

          {/* Research Areas */}
          <Grid className='mb-16'>
            {researchAreas.map((area) => (
              <NavigationCard
                key={area.title}
                to={area.link}
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            ))}
          </Grid>

          {/* Current Projects */}
          <div className='mb-16'>
            <Heading className='text-center mb-8'>
              Current Research Projects
            </Heading>
            <Grid>
              {currentProjects.map((project) => (
                <Card key={project.title} className='p-8'>
                  <Heading className='text-xl mb-4'>{project.title}</Heading>
                  <BodyText className='mb-6'>{project.description}</BodyText>
                  <SmallText className='text-blue-600 mb-4'>
                    Status: {project.status}
                  </SmallText>
                  <div className='space-y-2'>
                    {project.partners.map((partner, index) => (
                      <SmallText key={index} className='flex items-center'>
                        <span className='mr-2'>•</span>
                        {partner}
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

          {/* Publications */}
          <div>
            <Heading className='text-center mb-8'>Recent Publications</Heading>
            <Grid>
              {publications.map((publication) => (
                <Card key={publication.title} className='p-8'>
                  <Heading className='text-xl mb-4'>
                    {publication.title}
                  </Heading>
                  <BodyText className='mb-2'>{publication.authors}</BodyText>
                  <SmallText className='text-gray-600 mb-4'>
                    {publication.journal} ({publication.year})
                  </SmallText>
                  <Button variant='outline'>Read Publication</Button>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Research
