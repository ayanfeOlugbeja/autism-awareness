import React from 'react'
import { Grid, Card } from '../../components/layout'
import { Heading, BodyText } from '../../components/typography'
import { Button } from '../../components/interactive'

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Posts', value: '24', icon: '📝' },
    { label: 'Upcoming Events', value: '5', icon: '📅' },
    { label: 'Newsletter Subscribers', value: '1,234', icon: '📧' },
    { label: 'Active Partners', value: '12', icon: '🤝' },
    { label: 'Volunteers', value: '45', icon: '👥' },
    { label: 'Total Donations', value: '$12,345', icon: '💰' },
  ]

  const quickActions = [
    {
      title: 'Create New Post',
      description: 'Write and publish a new blog post',
      icon: '📝',
      path: '/admin/posts/new',
    },
    {
      title: 'Add Event',
      description: 'Schedule a new event or workshop',
      icon: '📅',
      path: '/admin/events/new',
    },
    {
      title: 'Send Newsletter',
      description: 'Create and send a newsletter to subscribers',
      icon: '📧',
      path: '/admin/newsletters/new',
    },
    {
      title: 'Manage Partners',
      description: 'Add or update partner information',
      icon: '🤝',
      path: '/admin/partners',
    },
  ]

  return (
    <div className='space-y-8'>
      <div>
        <Heading className='text-3xl mb-2'>Dashboard</Heading>
        <BodyText className='text-gray-600'>
          Welcome to your admin dashboard. Here's an overview of your website's
          performance.
        </BodyText>
      </div>

      {/* Statistics */}
      <Grid>
        {stats.map((stat) => (
          <Card key={stat.label} className='p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <BodyText className='text-gray-600'>{stat.label}</BodyText>
                <Heading className='text-2xl mt-1'>{stat.value}</Heading>
              </div>
              <span className='text-3xl'>{stat.icon}</span>
            </div>
          </Card>
        ))}
      </Grid>

      {/* Quick Actions */}
      <div>
        <Heading className='text-2xl mb-6'>Quick Actions</Heading>
        <Grid>
          {quickActions.map((action) => (
            <Card key={action.title} className='p-6'>
              <div className='flex items-start space-x-4'>
                <span className='text-3xl'>{action.icon}</span>
                <div>
                  <Heading className='text-xl mb-2'>{action.title}</Heading>
                  <BodyText className='text-gray-600 mb-4'>
                    {action.description}
                  </BodyText>
                  <Button variant='primary' to={action.path}>
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </div>

      {/* Recent Activity */}
      <div>
        <Heading className='text-2xl mb-6'>Recent Activity</Heading>
        <Card className='p-6'>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <span className='text-xl'>📝</span>
                <div>
                  <BodyText className='font-medium'>
                    New blog post published
                  </BodyText>
                  <BodyText className='text-gray-600 text-sm'>
                    "Understanding Autism in Children" was published
                  </BodyText>
                </div>
              </div>
              <BodyText className='text-gray-600 text-sm'>2 hours ago</BodyText>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <span className='text-xl'>📅</span>
                <div>
                  <BodyText className='font-medium'>New event created</BodyText>
                  <BodyText className='text-gray-600 text-sm'>
                    "Parent Support Workshop" was scheduled
                  </BodyText>
                </div>
              </div>
              <BodyText className='text-gray-600 text-sm'>5 hours ago</BodyText>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <span className='text-xl'>👥</span>
                <div>
                  <BodyText className='font-medium'>
                    New volunteer registered
                  </BodyText>
                  <BodyText className='text-gray-600 text-sm'>
                    John Doe joined as a volunteer
                  </BodyText>
                </div>
              </div>
              <BodyText className='text-gray-600 text-sm'>1 day ago</BodyText>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard
