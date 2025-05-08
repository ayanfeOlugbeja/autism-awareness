import PropTypes from 'prop-types'
import { useState } from 'react'
import { db } from '../../../config/firebase'
import { doc, setDoc, updateDoc, collection } from 'firebase/firestore'
import AdminForm from '../../../Components/admin/AdminForm'
import AdminFormField from '../../../Components/admin/AdminFormField'

const EventForm = ({ event = null, onSuccess }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [formData, setFormData] = useState({
    title: event?.title || '',
    description: event?.description || '',
    date: event?.date
      ? new Date(event.date.toDate()).toISOString().split('T')[0]
      : '',
    time: event?.time || '',
    location: event?.location || '',
    status: event?.status || 'upcoming',
    capacity: event?.capacity || '',
    registrationDeadline: event?.registrationDeadline
      ? new Date(event.registrationDeadline.toDate())
          .toISOString()
          .split('T')[0]
      : '',
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
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const eventData = {
        ...formData,
        date: new Date(formData.date),
        registrationDeadline: new Date(formData.registrationDeadline),
        updatedAt: new Date(),
      }

      if (!event) {
        eventData.createdAt = new Date()
        const docRef = doc(collection(db, 'events'))
        await setDoc(docRef, eventData)
        setSuccess('Event created successfully!')
      } else {
        await updateDoc(doc(db, 'events', event.id), eventData)
        setSuccess('Event updated successfully!')
      }

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }
    } catch (err) {
      console.error('Error saving event:', err)
      setError('Failed to save event. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminForm
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
      submitLabel={event ? 'Update Event' : 'Create Event'}
    >
      <AdminFormField
        label='Title'
        name='title'
        value={formData.title}
        onChange={handleChange}
        required
        placeholder='Enter event title'
      />

      <AdminFormField
        label='Description'
        name='description'
        type='textarea'
        value={formData.description}
        onChange={handleChange}
        required
        placeholder='Enter event description'
        rows={4}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <AdminFormField
          label='Date'
          name='date'
          type='date'
          value={formData.date}
          onChange={handleChange}
          required
        />

        <AdminFormField
          label='Time'
          name='time'
          type='time'
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <AdminFormField
        label='Location'
        name='location'
        value={formData.location}
        onChange={handleChange}
        required
        placeholder='Enter event location'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <AdminFormField
          label='Capacity'
          name='capacity'
          type='number'
          value={formData.capacity}
          onChange={handleChange}
          placeholder='Enter maximum capacity'
        />

        <AdminFormField
          label='Registration Deadline'
          name='registrationDeadline'
          type='date'
          value={formData.registrationDeadline}
          onChange={handleChange}
          required
        />
      </div>

      <AdminFormField
        label='Status'
        name='status'
        type='select'
        value={formData.status}
        onChange={handleChange}
        options={[
          { label: 'Upcoming', value: 'upcoming' },
          { label: 'Ongoing', value: 'ongoing' },
          { label: 'Completed', value: 'completed' },
          { label: 'Cancelled', value: 'cancelled' },
        ]}
      />
    </AdminForm>
  )
}

EventForm.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.object,
    time: PropTypes.string,
    location: PropTypes.string,
    status: PropTypes.string,
    capacity: PropTypes.number,
    registrationDeadline: PropTypes.object,
  }),
  onSuccess: PropTypes.func,
}

export default EventForm
