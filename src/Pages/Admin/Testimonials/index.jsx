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
import AdminCard from '../../../Components/admin/AdminCard'
import AdminButton from '../../../Components/admin/AdminButton'
import AdminModal from '../../../Components/admin/AdminModal'
import TestimonialForm from './TestimonialForm'

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const testimonialsQuery = query(
        collection(db, 'testimonials'),
        orderBy('createdAt', 'desc')
      )
      const querySnapshot = await getDocs(testimonialsQuery)
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setTestimonials(testimonialsData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching testimonials:', err)
      setError('Failed to load testimonials. Please try again.')
      setLoading(false)
    }
  }

  const handleDelete = async (testimonialId) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setDeleteLoading(testimonialId)
      try {
        await deleteDoc(doc(db, 'testimonials', testimonialId))
        setTestimonials(
          testimonials.filter((testimonial) => testimonial.id !== testimonialId)
        )
      } catch (err) {
        console.error('Error deleting testimonial:', err)
        setError('Failed to delete testimonial. Please try again.')
      } finally {
        setDeleteLoading(null)
      }
    }
  }

  const handleEdit = (testimonial) => {
    setSelectedTestimonial(testimonial)
    setIsModalOpen(true)
  }

  const handleCreate = () => {
    setSelectedTestimonial(null)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedTestimonial(null)
  }

  const handleSuccess = () => {
    handleModalClose()
    fetchTestimonials()
  }

  if (loading) {
    return <div>Loading testimonials...</div>
  }

  if (error) {
    return <div className='text-red-600'>{error}</div>
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Testimonials</h1>
        <AdminButton variant='primary' onClick={handleCreate} icon='➕'>
          Add New Testimonial
        </AdminButton>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonials.map((testimonial) => (
          <AdminCard
            key={testimonial.id}
            title={testimonial.name}
            subtitle={testimonial.role}
            actions={
              <div className='flex space-x-2'>
                <AdminButton
                  variant='secondary'
                  size='sm'
                  onClick={() => handleEdit(testimonial)}
                  icon='✏️'
                >
                  Edit
                </AdminButton>
                <AdminButton
                  variant='danger'
                  size='sm'
                  onClick={() => handleDelete(testimonial.id)}
                  loading={deleteLoading === testimonial.id}
                  icon='🗑️'
                >
                  Delete
                </AdminButton>
              </div>
            }
          >
            <div className='space-y-4'>
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-20 h-20 rounded-full object-cover mx-auto'
                />
              )}
              <p className='text-gray-600 italic text-center'>
                &quot;{testimonial.content}&quot;
              </p>
              <div className='flex items-center justify-center space-x-2'>
                {testimonial.rating && (
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < testimonial.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AdminCard>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}
        size='lg'
      >
        <TestimonialForm
          testimonial={selectedTestimonial}
          onSuccess={handleSuccess}
        />
      </AdminModal>
    </div>
  )
}

export default AdminTestimonials
