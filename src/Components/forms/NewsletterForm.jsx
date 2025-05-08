import { useState } from 'react'
import { Card } from '../layout'
import { Heading, BodyText } from '../typography'
import { Button } from '../interactive'
import { db } from '../../config/firebase'
import { collection, addDoc } from 'firebase/firestore'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
      const collectionRef = collection(db, 'newsletter_subscribers')
      await addDoc(collectionRef, {
        email,
        createdAt: new Date(),
        status: 'active',
      })

      setStatus({ loading: false, success: true, error: null })
      setEmail('')
    } catch (err) {
      console.error('Newsletter subscription error:', err)
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to subscribe. Please try again.',
      })
    }
  }

  return (
    <Card className='p-6'>
      <Heading className='text-2xl mb-4'>Subscribe to Our Newsletter</Heading>
      <BodyText className='text-gray-600 mb-6'>
        Stay updated with our latest news, events, and resources. Join our
        community of supporters and advocates.
      </BodyText>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='email' className='sr-only'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {status.error && (
          <div className='text-red-600 text-sm'>{status.error}</div>
        )}

        {status.success && (
          <div className='text-green-600 text-sm'>
            Thank you for subscribing! Please check your email to confirm your
            subscription.
          </div>
        )}

        <Button
          type='submit'
          variant='primary'
          className='w-full'
          disabled={status.loading}
        >
          {status.loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>

      <BodyText className='text-gray-500 text-sm mt-4'>
        By subscribing, you agree to receive our newsletter and updates. You can
        unsubscribe at any time.
      </BodyText>
    </Card>
  )
}

export default NewsletterForm
