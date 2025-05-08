import PropTypes from 'prop-types'

const AdminCard = ({
  title,
  subtitle,
  children,
  actions,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-white',
    primary: 'bg-blue-50',
    success: 'bg-green-50',
    warning: 'bg-yellow-50',
    danger: 'bg-red-50',
  }

  return (
    <div
      className={`
        rounded-lg shadow-sm border border-gray-200 overflow-hidden
        ${variants[variant]}
        ${className}
      `}
    >
      <div className='px-4 py-5 sm:px-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              {title}
            </h3>
            {subtitle && (
              <p className='mt-1 text-sm text-gray-500'>{subtitle}</p>
            )}
          </div>
          {actions && <div className='flex space-x-2'>{actions}</div>}
        </div>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
        {children}
      </div>
    </div>
  )
}

AdminCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger',
  ]),
  className: PropTypes.string,
}

export default AdminCard
