
import PropTypes from 'prop-types'

function PropTypeChecking({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

PropTypeChecking.propTypes = {
  name: PropTypes.string
}

export default PropTypeChecking
