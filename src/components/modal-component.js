import React from 'react'

import PropTypes from 'prop-types'

import './modal-component.css'

const ModalComponent = (props) => {
  return (
    <div className="modal-component-container">
      <div className="modal-component-modalcomponentmaster">
        <div className="modal-component-modal-header">
          <span className="modal-component-text10">Component</span>
          <img
            alt="Vector7629"
            src="/external/vector7629-7dem.svg"
            className="modal-component-vector"
          />
        </div>
        <div className="modal-component-frame3">
          <div className="modal-component-frame80">
            <div className="modal-component-frame54">
              <div className="modal-component-input-group1">
                <span className="modal-component-text11">Component Name</span>
                <input
                  type="text"
                  placeholder="PageName"
                  className="modal-component-input1"
                />
              </div>
              <div className="modal-component-input-group2">
                <span className="modal-component-text12">
                  Brief Description
                </span>
                <input
                  type="text"
                  placeholder="PageName"
                  className="modal-component-input2"
                />
              </div>
              <div className="modal-component-checkboxlabel1">
                <img
                  alt="Component17924"
                  src="/external/component17924-jmvl.svg"
                  className="modal-component-component11"
                />
                <input
                  type="checkbox"
                  checked="true"
                  className="modal-component-checkbox"
                />
                <span className="modal-component-text13">
                  Make this page a reusable component
                </span>
              </div>
              <div className="modal-component-textarea-group1">
                <div className="modal-component-frame401">
                  <span className="modal-component-text14">Outline</span>
                  <span className="modal-component-text15">
                    Describe the page, it’s purpose and sections required.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="modal-component-frame81">
                  <textarea
                    id="section-outline-input"
                    placeholder={props.textareaPlaceholder}
                    className="modal-component-textarea1"
                  ></textarea>
                  <div className="modal-component-frame821">
                    <div className="modal-component-frame76 button">
                      <img
                        alt="tablericonsparkles7629"
                        src="/external/tablericonsparkles7629-grs.svg"
                        className="modal-component-tablericonsparkles1"
                      />
                      <span className="modal-component-text16">
                        Improve with AI
                      </span>
                    </div>
                    <div className="modal-component-frame77 button">
                      <img
                        alt="tablericonsparkles7629"
                        src="/external/tablericonsparkles7629-9bzl.svg"
                        className="modal-component-tablericonsparkles2"
                      />
                      <span className="modal-component-text17">
                        Generate Prompt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-component-textarea-group2">
                <div className="modal-component-frame402">
                  <span className="modal-component-text18">Prompt Output</span>
                  <img
                    alt="tablericonclipboard7629"
                    src="/external/tablericonclipboard7629-s27.svg"
                    className="modal-component-tablericonclipboard1"
                  />
                </div>
                <textarea
                  id="section-prompt-output"
                  placeholder={props.textareaPlaceholder1}
                  className="modal-component-textarea2"
                ></textarea>
                <div className="modal-component-frame822">
                  <img
                    alt="tablericonclipboard7629"
                    src="/external/tablericonclipboard7629-bxu9.svg"
                    className="modal-component-tablericonclipboard2"
                  />
                </div>
              </div>
              <div className="modal-component-checkboxlabel2">
                <img
                  alt="Component17924"
                  src="/external/component17924-c4q.svg"
                  className="modal-component-component12"
                />
                <span className="modal-component-text19">Mark as complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalComponent.defaultProps = {
  textareaPlaceholder: 'placeholder',
  textareaPlaceholder1: 'placeholder',
}

ModalComponent.propTypes = {
  textareaPlaceholder: PropTypes.string,
  textareaPlaceholder1: PropTypes.string,
}

export default ModalComponent
