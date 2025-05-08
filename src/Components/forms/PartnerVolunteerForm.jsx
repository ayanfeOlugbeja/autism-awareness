import { useState } from 'react'
import PropTypes from 'prop-types'
import { Card } from '../layout'
import { Heading, BodyText } from '../typography'
import { Button } from '../interactive'
import { db } from '../../config/firebase'
import { collection, addDoc } from 'firebase/firestore'

const PartnerVolunteerForm = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    interests: [],
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
      const collectionRef = collection(
        db,
        type === 'partner' ? 'partners' : 'volunteers'
      )
      await addDoc(collectionRef, {
        ...formData,
        createdAt: new Date(),
        status: 'pending',
      })

      setStatus({ loading: false, success: true, error: null })
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
        interests: [],
      })
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to submit form. Please try again.',
      })
    }
  }

  return (
    <Card className='p-6'>
      <Heading className='text-2xl mb-6'>
        {type === 'partner' ? 'Become a Partner' : 'Join as a Volunteer'}
      </Heading>
      <BodyText className='text-gray-600 mb-8'>
        {type === 'partner'
          ? 'Partner with us to make a difference in the autism community.'
          : 'Join our team of dedicated volunteers and help support our mission.'}
      </BodyText>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <div>
          <label
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {type === 'partner' && (
          <div>
            <label
              htmlFor='organization'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Organization Name
            </label>
            <input
              type='text'
              id='organization'
              name='organization'
              value={formData.organization}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
        )}

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows='4'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {status.error && (
          <div className='text-red-600 text-sm'>{status.error}</div>
        )}

        {status.success && (
          <div className='text-green-600 text-sm'>
            Thank you for your submission! We will contact you soon.
          </div>
        )}

        <Button
          type='submit'
          variant='primary'
          className='w-full'
          disabled={status.loading}
        >
          {status.loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Card>
  )
}

PartnerVolunteerForm.propTypes = {
  type: PropTypes.oneOf(['partner', 'volunteer']).isRequired,
}

export default PartnerVolunteerForm
