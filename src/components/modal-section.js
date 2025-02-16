import React from 'react'

import PropTypes from 'prop-types'

import './modal-section.css'

const ModalSection = (props) => {
  return (
    <div className="modal-section-container">
      <div className="modal-section-modalcomponentmaster">
        <div className="modal-section-modal-header">
          <span className="modal-section-text10">Section</span>
          <img
            alt="Vector7629"
            src="/external/vector7629-7dem.svg"
            className="modal-section-vector"
          />
        </div>
        <div className="modal-section-frame3">
          <div className="modal-section-frame80">
            <div className="modal-section-frame54">
              <div className="modal-section-input-group1">
                <span className="modal-section-text11">Section Name</span>
                <input
                  type="text"
                  placeholder="PageName"
                  className="modal-section-input1"
                />
              </div>
              <div className="modal-section-input-group2">
                <span className="modal-section-text12">Brief Description</span>
                <input
                  type="text"
                  placeholder="PageName"
                  className="modal-section-input2"
                />
              </div>
              <div className="modal-section-checkboxlabel1">
                <img
                  alt="Component17924"
                  src="/external/component17924-jmvl.svg"
                  className="modal-section-component11"
                />
                <span className="modal-section-text13">
                  Make this page a reusable component
                </span>
              </div>
              <div className="modal-section-textarea-group1">
                <div className="modal-section-frame401">
                  <span className="modal-section-text14">Outline</span>
                  <span className="modal-section-text15">
                    Describe the page, it’s purpose and sections required.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="modal-section-frame81">
                  <textarea
                    id="section-outline-input"
                    placeholder={props.textareaPlaceholder}
                    className="modal-section-textarea1"
                  ></textarea>
                  <div className="modal-section-frame821">
                    <div className="modal-section-frame76">
                      <img
                        alt="tablericonsparkles7629"
                        src="/external/tablericonsparkles7629-grs.svg"
                        className="modal-section-tablericonsparkles1"
                      />
                      <span className="modal-section-text16">
                        Improve with AI
                      </span>
                    </div>
                    <div className="modal-section-frame77">
                      <img
                        alt="tablericonsparkles7629"
                        src="/external/tablericonsparkles7629-9bzl.svg"
                        className="modal-section-tablericonsparkles2"
                      />
                      <span className="modal-section-text17">
                        Generate Prompt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-section-textarea-group2">
                <div className="modal-section-frame402">
                  <span className="modal-section-text18">Prompt Output</span>
                  <img
                    alt="tablericonclipboard7629"
                    src="/external/tablericonclipboard7629-s27.svg"
                    className="modal-section-tablericonclipboard1"
                  />
                </div>
                <textarea
                  id="section-prompt-output"
                  placeholder={props.textareaPlaceholder1}
                  className="modal-section-textarea2"
                ></textarea>
                <div className="modal-section-frame822">
                  <img
                    alt="tablericonclipboard7629"
                    src="/external/tablericonclipboard7629-bxu9.svg"
                    className="modal-section-tablericonclipboard2"
                  />
                </div>
              </div>
              <div className="modal-section-checkboxlabel2">
                <img
                  alt="Component17924"
                  src="/external/component17924-c4q.svg"
                  className="modal-section-component12"
                />
                <span className="modal-section-text19">Mark as complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalSection.defaultProps = {
  textareaPlaceholder: 'placeholder',
  textareaPlaceholder1: 'placeholder',
}

ModalSection.propTypes = {
  textareaPlaceholder: PropTypes.string,
  textareaPlaceholder1: PropTypes.string,
}

export default ModalSection
