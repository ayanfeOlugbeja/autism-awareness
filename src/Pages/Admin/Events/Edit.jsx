import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import AdminCard from '../../../components/admin/AdminCard'
import AdminButton from '../../../components/admin/AdminButton'
import EventForm from './EventForm'

const EditEvent = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const docRef = doc(db, 'events', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setEvent({ id: docSnap.id, ...docSnap.data() })
        } else {
          setError('Event not found')
        }
      } catch (err) {
        console.error('Error fetching event:', err)
        setError('Failed to load event. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [id])

  if (loading) {
    return (
      <div className='space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900'>Edit Event</h1>
          <AdminButton
            variant='secondary'
            onClick={() => navigate('/admin/events')}
            icon='←'
          >
            Back to Events
          </AdminButton>
        </div>
        <AdminCard loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className='space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-900'>Edit Event</h1>
          <AdminButton
            variant='secondary'
            onClick={() => navigate('/admin/events')}
            icon='←'
          >
            Back to Events
          </AdminButton>
        </div>
        <AdminCard error={error} />
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Edit Event</h1>
        <AdminButton
          variant='secondary'
          onClick={() => navigate('/admin/events')}
          icon='←'
        >
          Back to Events
        </AdminButton>
      </div>

      <AdminCard>
        <EventForm event={event} />
      </AdminCard>
    </div>
  )
}

export default EditEvent
