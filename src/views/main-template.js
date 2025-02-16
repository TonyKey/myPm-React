import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Leftpanel from '../components/leftpanel'
import Footer from '../components/footer'
import './main-template.css'

const MainTemplate = (props) => {
  return (
    <div className="main-template-container">
      <Helmet>
        <title>main-template - myPm</title>
        <meta property="og:title" content="main-template - myPm" />
      </Helmet>
      <div className="main-template-mastertemplate">
        <Leftpanel
          text={
            <Fragment>
              <span className="main-template-text10">Dashboard</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="main-template-text11">New Project</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="main-template-text12">Account Settings</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="main-template-text13">Docs</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="main-template-text14">Help</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="main-template-text15">
                Project Name Really Really Long
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="main-template-text16">Project Name</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="main-template-text17">Project Name</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="main-template-text18">Project Name</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="main-template-text19">Project Name</span>
            </Fragment>
          }
        ></Leftpanel>
        <div className="main-template-maincolumn">
          <div className="main-template-mainframeheader">
            <span className="main-template-text20">Dashboard</span>
            <button className="main-template-nodebuttons">
              <img
                alt="tablericondatabase7995"
                src="/external/tablericondatabase7995-043s.svg"
                className="main-template-tablericondatabase"
              />
              <img
                alt="tablericonfile7997"
                src="/external/tablericonfile7997-5fr9.svg"
                className="main-template-tablericonfile"
              />
              <img
                alt="tablericontemplate7999"
                src="/external/tablericontemplate7999-b25h.svg"
                className="main-template-tablericontemplate"
              />
              <img
                alt="tablericonsection7910"
                src="/external/tablericonsection7910-yoyo.svg"
                className="main-template-tablericonsection"
              />
              <img
                alt="tablericoncomponents7910"
                src="/external/tablericoncomponents7910-buci.svg"
                className="main-template-tablericoncomponents"
              />
            </button>
            <div className="main-template-headerright">
              <div className="main-template-userloggedin">
                <img
                  alt="tablericonusercircle7910"
                  src="/external/tablericonusercircle7910-kwj.svg"
                  className="main-template-tablericonusercircle"
                />
                <div className="main-template-nameaccounttype">
                  <span className="main-template-text21">
                    user@abccompany.com
                  </span>
                  <span className="main-template-text22">Pro Account</span>
                </div>
              </div>
              <div className="main-template-logout">
                <img
                  alt="tablericondoorexit7911"
                  src="/external/tablericondoorexit7911-5ll8.svg"
                  className="main-template-tablericondoorexit"
                />
                <span className="main-template-text23">Logout</span>
              </div>
            </div>
          </div>
          <div className="main-template-maincanvas"></div>
          <Footer
            text={
              <Fragment>
                <span className="main-template-text24">5 Projects</span>
              </Fragment>
            }
          ></Footer>
        </div>
      </div>
    </div>
  )
}

export default MainTemplate
