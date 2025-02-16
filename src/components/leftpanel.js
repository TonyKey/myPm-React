import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './leftpanel.css'

const Leftpanel = (props) => {
  return (
    <section id="left-panel" className="leftpanel-leftpanel">
      <img
        alt={props.leftpanelheaderAlt}
        src={props.leftpanelheaderSrc}
        className="leftpanel-leftpanelheader"
      />
      <div className="leftpanel-leftpanelinnerwrapper">
        <div className="leftpanel-menu">
          <div className="leftpanel-menulistitemdashboardselected">
            <img
              alt={props.tablericonhomeAlt}
              src={props.tablericonhomeSrc}
              className="leftpanel-tablericonhome"
            />
            <span className="leftpanel-text10">
              {props.text ?? (
                <Fragment>
                  <span className="leftpanel-text22">Dashboard</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="leftpanel-btnnewproject">
            <img
              alt={props.tablericonsparklesAlt}
              src={props.tablericonsparklesSrc}
              className="leftpanel-tablericonsparkles"
            />
            <span className="leftpanel-text11">
              {props.text1 ?? (
                <Fragment>
                  <span className="leftpanel-text28">New Project</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="leftpanel-frame103">
            <div className="leftpanel-menulistitem">
              <img
                alt={props.tablericonfolderAlt}
                src={props.tablericonfolderSrc}
                className="leftpanel-tablericonfolder1"
              />
              <span className="leftpanel-text12">
                {props.text5 ?? (
                  <Fragment>
                    <span className="leftpanel-text21">
                      Project Name Really Really Long
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="leftpanel-menuprojects1">
              <img
                alt={props.tablericonfolderAlt1}
                src={props.tablericonfolderSrc1}
                className="leftpanel-tablericonfolder2"
              />
              <span className="leftpanel-text13">
                {props.text6 ?? (
                  <Fragment>
                    <span className="leftpanel-text20">Project Name</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="leftpanel-menuprojects2">
              <img
                alt={props.tablericonfolderAlt2}
                src={props.tablericonfolderSrc2}
                className="leftpanel-tablericonfolder3"
              />
              <span className="leftpanel-text14">
                {props.text7 ?? (
                  <Fragment>
                    <span className="leftpanel-text27">Project Name</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="leftpanel-menuprojects3">
              <img
                alt={props.tablericonfolderAlt3}
                src={props.tablericonfolderSrc3}
                className="leftpanel-tablericonfolder4"
              />
              <span className="leftpanel-text15">
                {props.text8 ?? (
                  <Fragment>
                    <span className="leftpanel-text24">Project Name</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="leftpanel-menuprojects4">
              <img
                alt={props.tablericonfolderAlt4}
                src={props.tablericonfolderSrc4}
                className="leftpanel-tablericonfolder5"
              />
              <span className="leftpanel-text16">
                {props.text9 ?? (
                  <Fragment>
                    <span className="leftpanel-text25">Project Name</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="leftpanel-menusecondarybottom">
          <div className="leftpanel-menuprojects5">
            <img
              alt={props.tablericonsettings2Alt}
              src={props.tablericonsettings2Src}
              className="leftpanel-tablericonsettings2"
            />
            <span className="leftpanel-text17">
              {props.text2 ?? (
                <Fragment>
                  <span className="leftpanel-text26">Account Settings</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="leftpanel-menuprojects6">
            <img
              alt={props.tablericonbook2Alt}
              src={props.tablericonbook2Src}
              className="leftpanel-tablericonbook2"
            />
            <span className="leftpanel-text18">
              {props.text3 ?? (
                <Fragment>
                  <span className="leftpanel-text29">Docs</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="leftpanel-menuprojects7">
            <img
              alt={props.tablericonlifebuoyAlt}
              src={props.tablericonlifebuoySrc}
              className="leftpanel-tablericonlifebuoy"
            />
            <span className="leftpanel-text19">
              {props.text4 ?? (
                <Fragment>
                  <span className="leftpanel-text23">Help</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

Leftpanel.defaultProps = {
  text6: undefined,
  leftpanelheaderSrc: '/external/leftpanelheader7948-fe2s.svg',
  tablericonsparklesAlt: 'tablericonsparkles7957',
  tablericonsettings2Src: '/external/tablericonsettings27980-tg7r.svg',
  tablericonfolderAlt3: 'tablericonfolder7971',
  tablericonhomeSrc: '/external/tablericonhome7953-vk35.svg',
  text5: undefined,
  tablericonfolderSrc: '/external/tablericonfolderi796-y0g.svg',
  tablericonfolderSrc2: '/external/tablericonfolder7967-m16s.svg',
  tablericonlifebuoySrc: '/external/tablericonlifebuoy7988-cyxh.svg',
  text: undefined,
  text4: undefined,
  tablericonfolderSrc3: '/external/tablericonfolder7971-ndt.svg',
  text8: undefined,
  text9: undefined,
  tablericonfolderSrc1: '/external/tablericonfolder7963-4qno.svg',
  tablericonsettings2Alt: 'tablericonsettings27980',
  text2: undefined,
  tablericonfolderAlt2: 'tablericonfolder7967',
  text7: undefined,
  tablericonbook2Alt: 'tablericonbook27984',
  tablericonbook2Src: '/external/tablericonbook27984-lgm.svg',
  tablericonhomeAlt: 'tablericonhome7953',
  tablericonfolderAlt: 'tablericonfolderI796',
  tablericonlifebuoyAlt: 'tablericonlifebuoy7988',
  tablericonfolderAlt1: 'tablericonfolder7963',
  tablericonfolderSrc4: '/external/tablericonfolder7975-jfgf.svg',
  leftpanelheaderAlt: 'leftpanelheader7948',
  tablericonsparklesSrc: '/external/tablericonsparkles7957-jz9s.svg',
  text1: undefined,
  tablericonfolderAlt4: 'tablericonfolder7975',
  text3: undefined,
}

Leftpanel.propTypes = {
  text6: PropTypes.element,
  leftpanelheaderSrc: PropTypes.string,
  tablericonsparklesAlt: PropTypes.string,
  tablericonsettings2Src: PropTypes.string,
  tablericonfolderAlt3: PropTypes.string,
  tablericonhomeSrc: PropTypes.string,
  text5: PropTypes.element,
  tablericonfolderSrc: PropTypes.string,
  tablericonfolderSrc2: PropTypes.string,
  tablericonlifebuoySrc: PropTypes.string,
  text: PropTypes.element,
  text4: PropTypes.element,
  tablericonfolderSrc3: PropTypes.string,
  text8: PropTypes.element,
  text9: PropTypes.element,
  tablericonfolderSrc1: PropTypes.string,
  tablericonsettings2Alt: PropTypes.string,
  text2: PropTypes.element,
  tablericonfolderAlt2: PropTypes.string,
  text7: PropTypes.element,
  tablericonbook2Alt: PropTypes.string,
  tablericonbook2Src: PropTypes.string,
  tablericonhomeAlt: PropTypes.string,
  tablericonfolderAlt: PropTypes.string,
  tablericonlifebuoyAlt: PropTypes.string,
  tablericonfolderAlt1: PropTypes.string,
  tablericonfolderSrc4: PropTypes.string,
  leftpanelheaderAlt: PropTypes.string,
  tablericonsparklesSrc: PropTypes.string,
  text1: PropTypes.element,
  tablericonfolderAlt4: PropTypes.string,
  text3: PropTypes.element,
}

export default Leftpanel
