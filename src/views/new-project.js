import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Newprojectpanel from '../components/newprojectpanel'
import './new-project.css'

const NewProject = (props) => {
  return (
    <div className="new-project-container">
      <Helmet>
        <title>New-Project - myPm</title>
        <meta property="og:title" content="New-Project - myPm" />
      </Helmet>
      <Newprojectpanel
        text={
          <Fragment>
            <span className="new-project-text10">New Project</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="new-project-text11">Outline</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="new-project-text12">
              Describe the project structure in detail, outlining the pages that
              are needed for you product. This will create the outline and you
              can then fil out more specific details in the project itself.
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="new-project-text13">Prompt Output</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="new-project-text14">
              Create Project
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="new-project-text15">Name</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="new-project-text16">Project Description</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="new-project-text17">Describe your project</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="new-project-text18">Awaiting Outline</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="new-project-text19">Improve with AI</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="new-project-text20">Generate Prompt</span>
          </Fragment>
        }
      ></Newprojectpanel>
    </div>
  )
}

export default NewProject
