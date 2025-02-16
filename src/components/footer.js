import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <span className="footer-text1">
        {props.text ?? (
          <Fragment>
            <span className="footer-text2">5 Projects</span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  text: undefined,
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default Footer
