import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './projectcard.css'

const Projectcard = (props) => {
  return (
    <div className="projectcard-projectcard">
      <div className="projectcard-cardcontent">
        <img
          alt={props.tablericonfolderAlt}
          src={props.tablericonfolderSrc}
          className="projectcard-tablericonfolder"
        />
        <div className="projectcard-titledescription">
          <span className="projectcard-text1">
            {props.text2 ?? (
              <Fragment>
                <span className="projectcard-text5">Project Name</span>
              </Fragment>
            )}
          </span>
          <span className="projectcard-text2">
            {props.text3 ?? (
              <Fragment>
                <span className="projectcard-text8">
                  Short description maybe that spans two lines when it becomes
                  long
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="projectcard-projectcardfooter">
        <span className="projectcard-text3">
          {props.text ?? (
            <Fragment>
              <span className="projectcard-text6">11/11/2024</span>
            </Fragment>
          )}
        </span>
        <span className="projectcard-text4">
          {props.text1 ?? (
            <Fragment>
              <span className="projectcard-text7"> 0% Complete</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

Projectcard.defaultProps = {
  text2: undefined,
  tablericonfolderSrc: '/external/tablericonfolder7917-igl.svg',
  text: undefined,
  tablericonfolderAlt: 'tablericonfolder7917',
  text1: undefined,
  text3: undefined,
}

Projectcard.propTypes = {
  text2: PropTypes.element,
  tablericonfolderSrc: PropTypes.string,
  text: PropTypes.element,
  tablericonfolderAlt: PropTypes.string,
  text1: PropTypes.element,
  text3: PropTypes.element,
}

export default Projectcard
