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
  query,
  orderBy,
} from 'firebase/firestore'
import AdminCard from '../../../components/admin/AdminCard'
import AdminButton from '../../../components/admin/AdminButton'
import AdminModal from '../../../components/admin/AdminModal'
import NewsletterForm from './NewsletterForm'

const AdminNewsletters = () => {
  const [newsletters, setNewsletters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNewsletter, setSelectedNewsletter] = useState(null)

  useEffect(() => {
    fetchNewsletters()
  }, [])

  const fetchNewsletters = async () => {
    try {
      const newslettersQuery = query(
        collection(db, 'newsletters'),
        orderBy('createdAt', 'desc')
      )
      const querySnapshot = await getDocs(newslettersQuery)
      const newslettersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setNewsletters(newslettersData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching newsletters:', err)
      setError('Failed to load newsletters. Please try again.')
      setLoading(false)
    }
  }

  const handleDelete = async (newsletterId) => {
    if (window.confirm('Are you sure you want to delete this newsletter?')) {
      setDeleteLoading(newsletterId)
      try {
        await deleteDoc(doc(db, 'newsletters', newsletterId))
        setNewsletters(
          newsletters.filter((newsletter) => newsletter.id !== newsletterId)
        )
      } catch (err) {
        console.error('Error deleting newsletter:', err)
        setError('Failed to delete newsletter. Please try again.')
      } finally {
        setDeleteLoading(null)
      }
    }
  }

  const handleEdit = (newsletter) => {
    setSelectedNewsletter(newsletter)
    setIsModalOpen(true)
  }

  const handleCreate = () => {
    setSelectedNewsletter(null)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedNewsletter(null)
  }

  const handleSuccess = () => {
    handleModalClose()
    fetchNewsletters()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      case 'scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'sent':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return <div>Loading newsletters...</div>
  }

  if (error) {
    return <div className='text-red-600'>{error}</div>
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Newsletters</h1>
        <AdminButton variant='primary' onClick={handleCreate} icon='➕'>
          Create Newsletter
        </AdminButton>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {newsletters.map((newsletter) => (
          <AdminCard
            key={newsletter.id}
            title={newsletter.title}
            actions={
              <div className='flex space-x-2'>
                <AdminButton
                  variant='secondary'
                  size='sm'
                  onClick={() => handleEdit(newsletter)}
                  icon='✏️'
                >
                  Edit
                </AdminButton>
                <AdminButton
                  variant='danger'
                  size='sm'
                  onClick={() => handleDelete(newsletter.id)}
                  loading={deleteLoading === newsletter.id}
                  icon='🗑️'
                >
                  Delete
                </AdminButton>
              </div>
            }
          >
            <div className='space-y-4'>
              <p className='text-gray-600 line-clamp-3'>{newsletter.content}</p>
              <div className='flex items-center justify-between'>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                    newsletter.status
                  )}`}
                >
                  {newsletter.status}
                </span>
                <span className='text-sm text-gray-500'>
                  {newsletter.scheduledFor
                    ? `Scheduled for ${new Date(
                        newsletter.scheduledFor.toDate()
                      ).toLocaleDateString()}`
                    : `Created ${new Date(
                        newsletter.createdAt.toDate()
                      ).toLocaleDateString()}`}
                </span>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedNewsletter ? 'Edit Newsletter' : 'Create Newsletter'}
        size='lg'
      >
        <NewsletterForm
          newsletter={selectedNewsletter}
          onSuccess={handleSuccess}
        />
      </AdminModal>
    </div>
  )
}

export default AdminNewsletters
