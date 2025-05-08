import PropTypes from 'prop-types'

export const DisplayText = ({ children, className = '' }) => (
  <h1
    className={`text-7xl md:text-8xl font-light tracking-tight text-gray-900 ${className}`}
  >
    {children}
  </h1>
)

DisplayText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const Heading = ({ children, className = '' }) => (
  <h2 className={`text-2xl md:text-3xl font-normal text-gray-900 ${className}`}>
    {children}
  </h2>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const Subheading = ({ children, className = '' }) => (
  <h3 className={`text-xl md:text-2xl font-normal text-gray-900 ${className}`}>
    {children}
  </h3>
)

Subheading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const BodyText = ({ children, className = '' }) => (
  <p
    className={`text-base md:text-lg text-gray-600 leading-relaxed ${className}`}
  >
    {children}
  </p>
)

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const SmallText = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
)

SmallText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export const LinkText = ({ children, className = '', onClick }) => (
  <span
    className={`text-blue-600 hover:text-blue-800 transition-colors duration-300 ${className}`}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
  >
    {children}
  </span>
)

LinkText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}
