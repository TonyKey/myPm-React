import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Userloggedin from '../components/userloggedin'
import Projectcard from '../components/projectcard'
import Footer from '../components/footer'
import './projects-canvas.css'

const ProjectsCanvas = (props) => {
  return (
    <div className="projects-canvas-container1">
      <Helmet>
        <title>projects-canvas - myPm</title>
        <meta property="og:title" content="projects-canvas - myPm" />
      </Helmet>
      <div className="projects-canvas-maincolumn">
        <div className="projects-canvas-mainframeheader">
          <div className="projects-canvas-container2">
            <span className="projects-canvas-text10">Dashboard</span>
          </div>
          <div className="projects-canvas-headerright">
            <Userloggedin
              text={
                <Fragment>
                  <span className="projects-canvas-text11">
                    user@abccompany.com
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="projects-canvas-text12">Pro Account</span>
                </Fragment>
              }
            ></Userloggedin>
            <div className="projects-canvas-logout">
              <img
                alt="tablericondoorexit7626"
                src="/external/tablericondoorexit7626-q7ar.svg"
                className="projects-canvas-tablericondoorexit"
              />
              <span className="projects-canvas-text13">Logout</span>
            </div>
          </div>
        </div>
        <div className="projects-canvas-maincanvasdashboard">
          <div className="projects-canvas-noprojectsbanner">
            <span className="projects-canvas-text14">
              <span className="projects-canvas-text15">
                You don’ have any project yet.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Create a new project.</span>
            </span>
          </div>
          <div className="projects-canvas-yourprojectheader">
            <span className="projects-canvas-text17">Your Projects:</span>
          </div>
          <div className="projects-canvas-projectcards">
            <Projectcard
              text={
                <Fragment>
                  <span className="projects-canvas-text18">11/11/2024</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="projects-canvas-text19"> 0% Complete</span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="projects-canvas-text20">Project Name</span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="projects-canvas-text21">
                    Short description maybe that spans two lines when it becomes
                    long
                  </span>
                </Fragment>
              }
            ></Projectcard>
            <Projectcard
              text={
                <Fragment>
                  <span className="projects-canvas-text22">11/11/2024</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="projects-canvas-text23"> 0% Complete</span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="projects-canvas-text24">Project Name</span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="projects-canvas-text25">
                    Short description maybe that spans two lines when it becomes
                    long
                  </span>
                </Fragment>
              }
            ></Projectcard>
          </div>
          <div className="projects-canvas-comingsoon">
            <span className="projects-canvas-text26">Coming Soon:</span>
          </div>
          <div className="projects-canvas-comingsooncards">
            <div className="projects-canvas-comingsooncard1">
              <div className="projects-canvas-comingsooncardimage1"></div>
              <div className="projects-canvas-comingsooncardcontent1">
                <span className="projects-canvas-text27">
                  Extended Functionality
                </span>
                <span className="projects-canvas-text28">
                  Describe the project structure in detail, outlining the pages
                  that are needed for you product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="projects-canvas-comingsooncard2">
              <div className="projects-canvas-comingsooncardimage2"></div>
              <div className="projects-canvas-comingsooncardcontent2">
                <span className="projects-canvas-text29">
                  Extended Functionality
                </span>
                <span className="projects-canvas-text30">
                  Describe the project structure in detail, outlining the pages
                  that are needed for you product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="projects-canvas-text31">5 Projects</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
    </div>
  )
}

export default ProjectsCanvas
