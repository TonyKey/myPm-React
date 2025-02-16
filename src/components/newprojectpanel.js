import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './newprojectpanel.css'

const Newprojectpanel = (props) => {
  return (
    <div className="newprojectpanel-newprojectpanel">
      <div className="newprojectpanel-newprojectpanelheader">
        <span className="newprojectpanel-text10">
          {props.text ?? (
            <Fragment>
              <span className="newprojectpanel-text25">Project Overview</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="newprojectpanel-newprojectpanelcontentwrapper">
        <div className="newprojectpanel-newprojectpanelcontent">
          <div className="newprojectpanel-newprojectname">
            <div className="newprojectpanel-input-group1">
              <div className="newprojectpanel-label-text1">
                <span className="newprojectpanel-text11">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="newprojectpanel-text27">Name</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <input
                type="text"
                placeholder={props.inputprojectnamePlaceholder}
                className="newprojectpanel-inputprojectname"
              />
            </div>
          </div>
          <div className="newprojectpanel-newprojectdescription">
            <div className="newprojectpanel-input-group2">
              <div className="newprojectpanel-label-text2">
                <span className="newprojectpanel-text12">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="newprojectpanel-text21">
                        Project Description
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <textarea
                placeholder={props.textareaPlaceholder}
                className="newprojectpanel-textarea1"
              ></textarea>
              <input
                type="text"
                placeholder={props.inputPlaceholder}
                className="newprojectpanel-input"
              />
            </div>
          </div>
          <div className="newprojectpanel-projectoutline">
            <div className="newprojectpanel-labeldescription">
              <span className="newprojectpanel-text13">
                {props.text1 ?? (
                  <Fragment>
                    <span className="newprojectpanel-text28">Outline</span>
                  </Fragment>
                )}
              </span>
              <span className="newprojectpanel-text14">
                {props.text2 ?? (
                  <Fragment>
                    <span className="newprojectpanel-text23">
                      Describe the project structure in detail, outlining the
                      pages that are needed for you product. This will create
                      the outline and you can then fil out more specific details
                      in the project itself.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="newprojectpanel-descriptionaiinput">
              <div className="newprojectpanel-textarea2">
                <span className="newprojectpanel-text15">
                  {props.text7 ?? (
                    <Fragment>
                      <span className="newprojectpanel-text26">
                        Describe your project
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="newprojectpanel-resizer1">
                  <img
                    alt={props.lineAlt}
                    src={props.lineSrc}
                    className="newprojectpanel-line1"
                  />
                  <img
                    alt={props.lineAlt1}
                    src={props.lineSrc1}
                    className="newprojectpanel-line2"
                  />
                </div>
              </div>
              <div className="newprojectpanel-frame82">
                <div className="newprojectpanel-frame76">
                  <img
                    alt={props.tablericonsparklesAlt}
                    src={props.tablericonsparklesSrc}
                    className="newprojectpanel-tablericonsparkles1"
                  />
                  <span className="newprojectpanel-text16">
                    {props.text9 ?? (
                      <Fragment>
                        <span className="newprojectpanel-text22">
                          Improve with AI
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="newprojectpanel-frame77">
                  <img
                    alt={props.tablericonsparklesAlt1}
                    src={props.tablericonsparklesSrc1}
                    className="newprojectpanel-tablericonsparkles2"
                  />
                  <span className="newprojectpanel-text17">
                    {props.text10 ?? (
                      <Fragment>
                        <span className="newprojectpanel-text29">
                          Generate Prompt
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="newprojectpanel-promptoutput">
            <button className="newprojectpanel-labelbuttoncopytoclipboard">
              <span className="newprojectpanel-text18">
                {props.text3 ?? (
                  <Fragment>
                    <span className="newprojectpanel-text31">
                      Prompt Output
                    </span>
                  </Fragment>
                )}
              </span>
              <img
                alt={props.tablericonclipboardAlt}
                src={props.tablericonclipboardSrc}
                className="newprojectpanel-tablericonclipboard"
              />
            </button>
            <div className="newprojectpanel-aioutput">
              <div className="newprojectpanel-textarea3">
                <span className="newprojectpanel-text19">
                  {props.text8 ?? (
                    <Fragment>
                      <span className="newprojectpanel-text24">
                        Awaiting Outline
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="newprojectpanel-resizer2">
                  <img
                    alt={props.lineAlt2}
                    src={props.lineSrc2}
                    className="newprojectpanel-line3"
                  />
                  <img
                    alt={props.lineAlt3}
                    src={props.lineSrc3}
                    className="newprojectpanel-line4"
                  />
                </div>
              </div>
            </div>
            <div className="newprojectpanel-btnprimary">
              <span className="newprojectpanel-text20">
                {props.text4 ?? (
                  <Fragment>
                    <span className="newprojectpanel-text30">
                      Create Project
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Newprojectpanel.defaultProps = {
  text6: undefined,
  inputPlaceholder: 'Brief description for project card',
  text9: undefined,
  lineSrc: '/external/line7525-5gf.svg',
  text2: undefined,
  text8: undefined,
  text: undefined,
  lineAlt1: 'Line7525',
  textareaPlaceholder: 'placeholder',
  tablericonsparklesSrc: '/external/tablericonsparkles7525-i09v.svg',
  lineAlt3: 'Line7525',
  text7: undefined,
  text5: undefined,
  tablericonclipboardAlt: 'tablericonclipboard7525',
  lineSrc2: '/external/line7525-t19i.svg',
  tablericonsparklesAlt1: 'tablericonsparkles7525',
  text1: undefined,
  lineAlt2: 'Line7525',
  tablericonclipboardSrc: '/external/tablericonclipboard7525-lyg.svg',
  lineAlt: 'Line7525',
  lineSrc3: '/external/line7525-6asih.svg',
  tablericonsparklesSrc1: '/external/tablericonsparkles7525-zqkf.svg',
  tablericonsparklesAlt: 'tablericonsparkles7525',
  inputprojectnamePlaceholder: 'PageName',
  text10: undefined,
  text4: undefined,
  lineSrc1: '/external/line7525-2ts.svg',
  text3: undefined,
}

Newprojectpanel.propTypes = {
  text6: PropTypes.element,
  inputPlaceholder: PropTypes.string,
  text9: PropTypes.element,
  lineSrc: PropTypes.string,
  text2: PropTypes.element,
  text8: PropTypes.element,
  text: PropTypes.element,
  lineAlt1: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  tablericonsparklesSrc: PropTypes.string,
  lineAlt3: PropTypes.string,
  text7: PropTypes.element,
  text5: PropTypes.element,
  tablericonclipboardAlt: PropTypes.string,
  lineSrc2: PropTypes.string,
  tablericonsparklesAlt1: PropTypes.string,
  text1: PropTypes.element,
  lineAlt2: PropTypes.string,
  tablericonclipboardSrc: PropTypes.string,
  lineAlt: PropTypes.string,
  lineSrc3: PropTypes.string,
  tablericonsparklesSrc1: PropTypes.string,
  tablericonsparklesAlt: PropTypes.string,
  inputprojectnamePlaceholder: PropTypes.string,
  text10: PropTypes.element,
  text4: PropTypes.element,
  lineSrc1: PropTypes.string,
  text3: PropTypes.element,
}

export default Newprojectpanel
