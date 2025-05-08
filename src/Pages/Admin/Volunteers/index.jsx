import { useState, useEffect } from 'react'
import { Card, Grid } from '../../../components/layout'
import { Heading, BodyText } from '../../../components/typography'
import { Button } from '../../../components/interactive'
import { db } from '../../../config/firebase'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'

const AdminVolunteers = () => {
  const [volunteers, setVolunteers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchVolunteers()
  }, [])

  const fetchVolunteers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'volunteers'))
      const volunteersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setVolunteers(volunteersData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching volunteers:', err)
      setError('Failed to load volunteers. Please try again.')
      setLoading(false)
    }
  }

  const handleStatusChange = async (volunteerId, newStatus) => {
    try {
      await updateDoc(doc(db, 'volunteers', volunteerId), {
        status: newStatus,
        updatedAt: new Date(),
      })
      setVolunteers(
        volunteers.map((volunteer) =>
          volunteer.id === volunteerId
            ? { ...volunteer, status: newStatus, updatedAt: new Date() }
            : volunteer
        )
      )
    } catch (err) {
      console.error('Error updating volunteer status:', err)
      setError('Failed to update volunteer status. Please try again.')
    }
  }

  const handleDelete = async (volunteerId) => {
    if (window.confirm('Are you sure you want to delete this volunteer?')) {
      try {
        await deleteDoc(doc(db, 'volunteers', volunteerId))
        setVolunteers(
          volunteers.filter((volunteer) => volunteer.id !== volunteerId)
        )
      } catch (err) {
        console.error('Error deleting volunteer:', err)
        setError('Failed to delete volunteer. Please try again.')
      }
    }
  }

  if (loading) {
    return <div>Loading volunteers...</div>
  }

  if (error) {
    return <div className='text-red-600'>{error}</div>
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <Heading className='text-3xl'>Volunteers</Heading>
        <div className='text-gray-600'>
          Total Volunteers: {volunteers.length}
        </div>
      </div>

      <Grid>
        {volunteers.map((volunteer) => (
          <Card key={volunteer.id} className='p-6'>
            <div className='space-y-4'>
              <div>
                <Heading className='text-xl mb-2'>{volunteer.name}</Heading>
                <div className='mt-2 space-y-1'>
                  <BodyText className='text-sm'>
                    <strong>Email:</strong> {volunteer.email}
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Phone:</strong> {volunteer.phone}
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Interests:</strong>{' '}
                    {volunteer.interests?.join(', ')}
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Status:</strong>{' '}
                    <span
                      className={
                        volunteer.status === 'active'
                          ? 'text-green-600'
                          : volunteer.status === 'pending'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }
                    >
                      {volunteer.status}
                    </span>
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Joined:</strong>{' '}
                    {new Date(
                      volunteer.createdAt?.toDate()
                    ).toLocaleDateString()}
                  </BodyText>
                </div>
              </div>
              <div className='flex justify-end space-x-2'>
                {volunteer.status === 'pending' && (
                  <Button
                    variant='primary'
                    onClick={() => handleStatusChange(volunteer.id, 'active')}
                  >
                    Approve
                  </Button>
                )}
                {volunteer.status === 'active' && (
                  <Button
                    variant='secondary'
                    onClick={() => handleStatusChange(volunteer.id, 'inactive')}
                  >
                    Deactivate
                  </Button>
                )}
                <Button
                  variant='danger'
                  onClick={() => handleDelete(volunteer.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  )
}

export default AdminVolunteers
