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
import ResourceForm from './ResourceForm'

const AdminResources = () => {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedResource, setSelectedResource] = useState(null)

  useEffect(() => {
    fetchResources()
  }, [])

  const fetchResources = async () => {
    try {
      const resourcesQuery = query(
        collection(db, 'resources'),
        orderBy('createdAt', 'desc')
      )
      const querySnapshot = await getDocs(resourcesQuery)
      const resourcesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setResources(resourcesData)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching resources:', err)
      setError('Failed to load resources. Please try again.')
      setLoading(false)
    }
  }

  const handleDelete = async (resourceId) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      setDeleteLoading(resourceId)
      try {
        await deleteDoc(doc(db, 'resources', resourceId))
        setResources(resources.filter((resource) => resource.id !== resourceId))
      } catch (err) {
        console.error('Error deleting resource:', err)
        setError('Failed to delete resource. Please try again.')
      } finally {
        setDeleteLoading(null)
      }
    }
  }

  const handleEdit = (resource) => {
    setSelectedResource(resource)
    setIsModalOpen(true)
  }

  const handleCreate = () => {
    setSelectedResource(null)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedResource(null)
  }

  const handleSuccess = () => {
    handleModalClose()
    fetchResources()
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':
        return '📄'
      case 'video':
        return '🎥'
      case 'book':
        return '📚'
      case 'tool':
        return '🛠️'
      default:
        return '📎'
    }
  }

  if (loading) {
    return <div>Loading resources...</div>
  }

  if (error) {
    return <div className='text-red-600'>{error}</div>
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Resources</h1>
        <AdminButton variant='primary' onClick={handleCreate} icon='➕'>
          Add New Resource
        </AdminButton>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {resources.map((resource) => (
          <AdminCard
            key={resource.id}
            title={resource.title}
            actions={
              <div className='flex space-x-2'>
                <AdminButton
                  variant='secondary'
                  size='sm'
                  onClick={() => handleEdit(resource)}
                  icon='✏️'
                >
                  Edit
                </AdminButton>
                <AdminButton
                  variant='danger'
                  size='sm'
                  onClick={() => handleDelete(resource.id)}
                  loading={deleteLoading === resource.id}
                  icon='🗑️'
                >
                  Delete
                </AdminButton>
              </div>
            }
          >
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <span className='text-xl'>{getTypeIcon(resource.type)}</span>
                <span className='text-sm text-gray-500 capitalize'>
                  {resource.type}
                </span>
              </div>
              <p className='text-gray-600 line-clamp-3'>
                {resource.description}
              </p>
              {resource.url && (
                <a
                  href={resource.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 text-sm flex items-center'
                >
                  <span className='mr-1'>🔗</span>
                  View Resource
                </a>
              )}
              {resource.tags && resource.tags.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                  {resource.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </AdminCard>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedResource ? 'Edit Resource' : 'Add Resource'}
        size='lg'
      >
        <ResourceForm resource={selectedResource} onSuccess={handleSuccess} />
      </AdminModal>
    </div>
  )
}

export default AdminResources
