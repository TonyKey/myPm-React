import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './userloggedin.css'

const Userloggedin = (props) => {
  return (
    <div className="userloggedin-userloggedin">
      <img
        alt={props.tablericonusercircleAlt}
        src={props.tablericonusercircleSrc}
        className="userloggedin-tablericonusercircle"
      />
      <div className="userloggedin-nameaccounttype">
        <span className="userloggedin-text1">
          {props.text ?? (
            <Fragment>
              <span className="userloggedin-text3">user@abccompany.com</span>
            </Fragment>
          )}
        </span>
        <span className="userloggedin-text2">
          {props.text1 ?? (
            <Fragment>
              <span className="userloggedin-text4">Pro Account</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

Userloggedin.defaultProps = {
  tablericonusercircleSrc: '/external/tablericonusercircle7626-473.svg',
  text: undefined,
  text1: undefined,
  tablericonusercircleAlt: 'tablericonusercircle7626',
}

Userloggedin.propTypes = {
  tablericonusercircleSrc: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
  tablericonusercircleAlt: PropTypes.string,
}

export default Userloggedin
