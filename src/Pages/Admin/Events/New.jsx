import { useNavigate } from 'react-router-dom'
import AdminCard from '../../../Components/admin/AdminCard'
import AdminButton from '../../../Components/admin/AdminButton'
import EventForm from './EventForm'

const NewEvent = () => {
  const navigate = useNavigate()

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Create New Event</h1>
        <AdminButton
          variant='secondary'
          onClick={() => navigate('/admin/events')}
          icon='←'
        >
          Back to Events
        </AdminButton>
      </div>

      <AdminCard>
        <EventForm />
      </AdminCard>
    </div>
  )
}

export default NewEvent
