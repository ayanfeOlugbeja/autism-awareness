import PropTypes from 'prop-types'

const AdminForm = ({
  children,
  onSubmit,
  loading = false,
  error = null,
  success = null,
  submitLabel = 'Submit',
}) => {
  return (
    <form onSubmit={onSubmit} className='space-y-6'>
      {error && (
        <div className='bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md'>
          {error}
        </div>
      )}

      {success && (
        <div className='bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md'>
          {success}
        </div>
      )}

      <div className='space-y-4'>{children}</div>

      <div className='flex justify-end'>
        <button
          type='submit'
          disabled={loading}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <svg
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            submitLabel
          )}
        </button>
      </div>
    </form>
  )
}

AdminForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  submitLabel: PropTypes.string,
}

export default AdminForm
