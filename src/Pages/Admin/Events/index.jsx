import { useState, useEffect } from 'react'
import { db } from '../../../config/firebase'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore'
import AdminCard from '../../../components/admin/AdminCard'
import AdminButton from '../../../components/admin/AdminButton'
import AdminModal from '../../../components/admin/AdminModal'
import EventForm from './EventForm'

const AdminEvents = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const eventsQuery = query(
        collection(db, 'events'),
        orderBy('date', 'desc')
      )
      const querySnapshot = await getDocs(eventsQuery)
      const eventsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setEvents(eventsData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching events:', err)
      setError('Failed to load events. Please try again.')
      setLoading(false)
    }
  }

  const handleDelete = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setDeleteLoading(eventId)
      try {
        await deleteDoc(doc(db, 'events', eventId))
        setEvents(events.filter((event) => event.id !== eventId))
      } catch (err) {
        console.error('Error deleting event:', err)
        setError('Failed to delete event. Please try again.')
      } finally {
        setDeleteLoading(null)
      }
    }
  }

  const handleEdit = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCreate = () => {
    setSelectedEvent(null)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  const handleSuccess = () => {
    handleModalClose()
    fetchEvents()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800'
      case 'ongoing':
        return 'bg-green-100 text-green-800'
      case 'completed':
        return 'bg-gray-100 text-gray-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return <div>Loading events...</div>
  }

  if (error) {
    return <div className='text-red-600'>{error}</div>
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Events</h1>
        <AdminButton variant='primary' onClick={handleCreate} icon='➕'>
          Create New Event
        </AdminButton>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {events.map((event) => (
          <AdminCard
            key={event.id}
            title={event.title}
            actions={
              <div className='flex space-x-2'>
                <AdminButton
                  variant='secondary'
                  size='sm'
                  onClick={() => handleEdit(event)}
                  icon='✏️'
                >
                  Edit
                </AdminButton>
                <AdminButton
                  variant='danger'
                  size='sm'
                  onClick={() => handleDelete(event.id)}
                  loading={deleteLoading === event.id}
                  icon='🗑️'
                >
                  Delete
                </AdminButton>
              </div>
            }
          >
            <div className='space-y-4'>
              <p className='text-gray-600 line-clamp-3'>{event.description}</p>
              <div className='space-y-2'>
                <div className='flex items-center text-sm text-gray-500'>
                  <span className='mr-2'>📅</span>
                  {new Date(event.date.toDate()).toLocaleDateString()} at{' '}
                  {event.time}
                </div>
                <div className='flex items-center text-sm text-gray-500'>
                  <span className='mr-2'>📍</span>
                  {event.location}
                </div>
                {event.capacity && (
                  <div className='flex items-center text-sm text-gray-500'>
                    <span className='mr-2'>👥</span>
                    Capacity: {event.capacity}
                  </div>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                    event.status
                  )}`}
                >
                  {event.status}
                </span>
                <span className='text-sm text-gray-500'>
                  Deadline:{' '}
                  {new Date(
                    event.registrationDeadline.toDate()
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedEvent ? 'Edit Event' : 'Create Event'}
        size='lg'
      >
        <EventForm event={selectedEvent} onSuccess={handleSuccess} />
      </AdminModal>
    </div>
  )
}

export default AdminEvents
