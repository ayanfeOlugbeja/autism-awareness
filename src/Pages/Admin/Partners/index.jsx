import { useState, useEffect } from 'react'
import { Card, Grid } from '../../../Components/layout'
import { Heading, BodyText } from '../../../Components/typography'
import { Button } from '../../../Components/interactive'
import { db } from '../../../config/firebase'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'

const AdminPartners = () => {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPartners()
  }, [])

  const fetchPartners = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'partners'))
      const partnersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPartners(partnersData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching partners:', err)
      setError('Failed to load partners. Please try again.')
      setLoading(false)
    }
  }

  const handleStatusChange = async (partnerId, newStatus) => {
    try {
      await updateDoc(doc(db, 'partners', partnerId), {
        status: newStatus,
        updatedAt: new Date(),
      })
      setPartners(
        partners.map((partner) =>
          partner.id === partnerId
            ? { ...partner, status: newStatus, updatedAt: new Date() }
            : partner
        )
      )
    } catch (err) {
      console.error('Error updating partner status:', err)
      setError('Failed to update partner status. Please try again.')
    }
  }

  const handleDelete = async (partnerId) => {
    if (window.confirm('Are you sure you want to delete this partner?')) {
      try {
        await deleteDoc(doc(db, 'partners', partnerId))
        setPartners(partners.filter((partner) => partner.id !== partnerId))
      } catch (err) {
        console.error('Error deleting partner:', err)
        setError('Failed to delete partner. Please try again.')
      }
    }
  }

  if (loading) {
    return <div>Loading partners...</div>
  }

  if (error) {
    return <div className='text-red-600'>{error}</div>
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <Heading className='text-3xl'>Partners</Heading>
        <div className='text-gray-600'>Total Partners: {partners.length}</div>
      </div>

      <Grid>
        {partners.map((partner) => (
          <Card key={partner.id} className='p-6'>
            <div className='space-y-4'>
              <div>
                <Heading className='text-xl mb-2'>
                  {partner.organization}
                </Heading>
                <div className='mt-2 space-y-1'>
                  <BodyText className='text-sm'>
                    <strong>Contact:</strong> {partner.name}
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Email:</strong> {partner.email}
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Phone:</strong> {partner.phone}
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Status:</strong>{' '}
                    <span
                      className={
                        partner.status === 'active'
                          ? 'text-green-600'
                          : partner.status === 'pending'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }
                    >
                      {partner.status}
                    </span>
                  </BodyText>
                  <BodyText className='text-sm'>
                    <strong>Joined:</strong>{' '}
                    {new Date(partner.createdAt?.toDate()).toLocaleDateString()}
                  </BodyText>
                </div>
              </div>
              <div className='flex justify-end space-x-2'>
                {partner.status === 'pending' && (
                  <Button
                    variant='primary'
                    onClick={() => handleStatusChange(partner.id, 'active')}
                  >
                    Approve
                  </Button>
                )}
                {partner.status === 'active' && (
                  <Button
                    variant='secondary'
                    onClick={() => handleStatusChange(partner.id, 'inactive')}
                  >
                    Deactivate
                  </Button>
                )}
                <Button
                  variant='danger'
                  onClick={() => handleDelete(partner.id)}
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

export default AdminPartners
