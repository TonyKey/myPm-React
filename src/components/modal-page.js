import React from 'react'

import PropTypes from 'prop-types'

import './modal-page.css'

const ModalPage = (props) => {
  return (
    <div className="modal-page-container">
      <div className="modal-page-modalcomponentmaster">
        <div className="modal-page-modal-header">
          <span className="modal-page-text10">Page</span>
          <img
            alt="Vector7629"
            src="/external/vector7629-7dem.svg"
            className="modal-page-vector"
          />
        </div>
        <div className="modal-page-frame3">
          <div className="modal-page-frame80">
            <div className="modal-page-frame54">
              <div className="modal-page-input-group">
                <span className="modal-page-text11">Name</span>
                <input
                  type="text"
                  placeholder="PageName"
                  className="modal-page-input"
                />
              </div>
              <div className="modal-page-checkboxlabel1">
                <img
                  alt="Component17924"
                  src="/external/component17924-jmvl.svg"
                  className="modal-page-component11"
                />
                <span className="modal-page-text12">
                  Make this page a reusable component
                </span>
              </div>
              <div className="modal-page-textarea-group1">
                <div className="modal-page-frame401">
                  <span className="modal-page-text13">Outline</span>
                  <span className="modal-page-text14">
                    Describe the page, it’s purpose and sections required.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="modal-page-frame811">
                  <div className="modal-page-textarea1">
                    <span className="modal-page-text15">Input Value</span>
                    <div className="modal-page-resizer1">
                      <img
                        alt="Line7629"
                        src="/external/line7629-enwo.svg"
                        className="modal-page-line1"
                      />
                      <img
                        alt="Line7629"
                        src="/external/line7629-qtil.svg"
                        className="modal-page-line2"
                      />
                    </div>
                  </div>
                  <textarea
                    placeholder={props.textareaPlaceholder}
                    className="modal-page-textarea2"
                  ></textarea>
                  <div className="modal-page-frame821">
                    <div className="modal-page-frame76">
                      <img
                        alt="tablericonsparkles7629"
                        src="/external/tablericonsparkles7629-grs.svg"
                        className="modal-page-tablericonsparkles1"
                      />
                      <span className="modal-page-text16">Improve with AI</span>
                    </div>
                    <div className="modal-page-frame77">
                      <img
                        alt="tablericonsparkles7629"
                        src="/external/tablericonsparkles7629-9bzl.svg"
                        className="modal-page-tablericonsparkles2"
                      />
                      <span className="modal-page-text17">Generate Prompt</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-page-textarea-group2">
                <div className="modal-page-frame402">
                  <span className="modal-page-text18">Prompt Output</span>
                  <img
                    alt="tablericonclipboard7629"
                    src="/external/tablericonclipboard7629-s27.svg"
                    className="modal-page-tablericonclipboard1"
                  />
                </div>
                <div className="modal-page-frame812">
                  <div className="modal-page-textarea3">
                    <span className="modal-page-text19">Input Value</span>
                    <div className="modal-page-resizer2">
                      <img
                        alt="Line7629"
                        src="/external/line7629-1b6i.svg"
                        className="modal-page-line3"
                      />
                      <img
                        alt="Line7629"
                        src="/external/line7629-y97p.svg"
                        className="modal-page-line4"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-page-frame822">
                  <img
                    alt="tablericonclipboard7629"
                    src="/external/tablericonclipboard7629-bxu9.svg"
                    className="modal-page-tablericonclipboard2"
                  />
                </div>
              </div>
              <div className="modal-page-checkboxlabel2">
                <img
                  alt="Component17924"
                  src="/external/component17924-c4q.svg"
                  className="modal-page-component12"
                />
                <span className="modal-page-text20">Mark as complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalPage.defaultProps = {
  textareaPlaceholder: 'placeholder',
}

ModalPage.propTypes = {
  textareaPlaceholder: PropTypes.string,
}

export default ModalPage
