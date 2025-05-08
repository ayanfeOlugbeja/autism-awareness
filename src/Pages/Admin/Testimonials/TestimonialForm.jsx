import PropTypes from 'prop-types'
import { useState } from 'react'
import { db } from '../../../config/firebase'
import { doc, setDoc, updateDoc, collection } from 'firebase/firestore'
import AdminForm from '../../../Components/admin/AdminForm'
import AdminFormField from '../../../Components/admin/AdminFormField'

const TestimonialForm = ({ testimonial = null, onSuccess }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [formData, setFormData] = useState({
    name: testimonial?.name || '',
    role: testimonial?.role || '',
    content: testimonial?.content || '',
    image: testimonial?.image || '',
    rating: testimonial?.rating || 5,
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
      const testimonialData = {
        ...formData,
        rating: parseInt(formData.rating),
        updatedAt: new Date(),
      }

      if (!testimonial) {
        testimonialData.createdAt = new Date()
        const docRef = doc(collection(db, 'testimonials'))
        await setDoc(docRef, testimonialData)
        setSuccess('Testimonial created successfully!')
      } else {
        await updateDoc(
          doc(db, 'testimonials', testimonial.id),
          testimonialData
        )
        setSuccess('Testimonial updated successfully!')
      }

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000)
      }
    } catch (err) {
      console.error('Error saving testimonial:', err)
      setError('Failed to save testimonial. Please try again.')
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
      submitLabel={testimonial ? 'Update Testimonial' : 'Create Testimonial'}
    >
      <AdminFormField
        label='Name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter person's name"
      />

      <AdminFormField
        label='Role'
        name='role'
        value={formData.role}
        onChange={handleChange}
        required
        placeholder="Enter person's role or title"
      />

      <AdminFormField
        label='Content'
        name='content'
        type='textarea'
        value={formData.content}
        onChange={handleChange}
        required
        placeholder='Enter testimonial content'
        rows={4}
      />

      <AdminFormField
        label='Image URL'
        name='image'
        type='url'
        value={formData.image}
        onChange={handleChange}
        placeholder='Enter image URL'
      />

      <AdminFormField
        label='Rating'
        name='rating'
        type='select'
        value={formData.rating}
        onChange={handleChange}
        options={[
          { label: '5 Stars', value: '5' },
          { label: '4 Stars', value: '4' },
          { label: '3 Stars', value: '3' },
          { label: '2 Stars', value: '2' },
          { label: '1 Star', value: '1' },
        ]}
      />
    </AdminForm>
  )
}

TestimonialForm.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
  }),
  onSuccess: PropTypes.func,
}

export default TestimonialForm
