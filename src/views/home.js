import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>myPm</title>
        <meta property="og:title" content="myPm" />
      </Helmet>
      <div className="home-mastertemplate">
        <div className="home-leftpanel">
          <img
            alt="leftpanelheader7948"
            src="/external/leftpanelheader7948-fe2s.svg"
            className="home-leftpanelheader"
          />
          <div className="home-leftpanelinnerwrapper">
            <div className="home-menu">
              <div className="home-menulistitemdashboardselected">
                <img
                  alt="tablericonhome7953"
                  src="/external/tablericonhome7953-vk35.svg"
                  className="home-tablericonhome"
                />
                <span className="home-text10">Dashboard</span>
              </div>
              <div className="home-btnnewproject">
                <img
                  alt="tablericonsparkles7957"
                  src="/external/tablericonsparkles7957-jz9s.svg"
                  className="home-tablericonsparkles"
                />
                <span className="home-text11">New Project</span>
              </div>
              <div className="home-frame103">
                <div className="home-menulistitem">
                  <img
                    alt="tablericonfolderI796"
                    src="/external/tablericonfolderi796-y0g.svg"
                    className="home-tablericonfolder1"
                  />
                  <span className="home-text12">
                    Project Name Really Really Long
                  </span>
                </div>
                <div className="home-menuprojects1">
                  <img
                    alt="tablericonfolder7963"
                    src="/external/tablericonfolder7963-4qno.svg"
                    className="home-tablericonfolder2"
                  />
                  <span className="home-text13">Project Name</span>
                </div>
                <div className="home-menuprojects2">
                  <img
                    alt="tablericonfolder7967"
                    src="/external/tablericonfolder7967-m16s.svg"
                    className="home-tablericonfolder3"
                  />
                  <span className="home-text14">Project Name</span>
                </div>
                <div className="home-menuprojects3">
                  <img
                    alt="tablericonfolder7971"
                    src="/external/tablericonfolder7971-ndt.svg"
                    className="home-tablericonfolder4"
                  />
                  <span className="home-text15">Project Name</span>
                </div>
                <div className="home-menuprojects4">
                  <img
                    alt="tablericonfolder7975"
                    src="/external/tablericonfolder7975-jfgf.svg"
                    className="home-tablericonfolder5"
                  />
                  <span className="home-text16">Project Name</span>
                </div>
              </div>
            </div>
            <div className="home-menusecondarybottom">
              <div className="home-menuprojects5">
                <img
                  alt="tablericonsettings27980"
                  src="/external/tablericonsettings27980-tg7r.svg"
                  className="home-tablericonsettings2"
                />
                <span className="home-text17">Account Settings</span>
              </div>
              <div className="home-menuprojects6">
                <img
                  alt="tablericonbook27984"
                  src="/external/tablericonbook27984-lgm.svg"
                  className="home-tablericonbook2"
                />
                <span className="home-text18">Docs</span>
              </div>
              <div className="home-menuprojects7">
                <img
                  alt="tablericonlifebuoy7988"
                  src="/external/tablericonlifebuoy7988-cyxh.svg"
                  className="home-tablericonlifebuoy"
                />
                <span className="home-text19">Help</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-maincolumn">
          <div className="home-mainframeheader">
            <span className="home-text20">Dashboard</span>
            <button className="home-nodebuttons">
              <img
                alt="tablericondatabase7995"
                src="/external/tablericondatabase7995-043s.svg"
                className="home-tablericondatabase"
              />
              <img
                alt="tablericonfile7997"
                src="/external/tablericonfile7997-5fr9.svg"
                className="home-tablericonfile"
              />
              <img
                alt="tablericontemplate7999"
                src="/external/tablericontemplate7999-b25h.svg"
                className="home-tablericontemplate"
              />
              <img
                alt="tablericonsection7910"
                src="/external/tablericonsection7910-yoyo.svg"
                className="home-tablericonsection"
              />
              <img
                alt="tablericoncomponents7910"
                src="/external/tablericoncomponents7910-buci.svg"
                className="home-tablericoncomponents"
              />
            </button>
            <div className="home-headerright">
              <div className="home-userloggedin">
                <img
                  alt="tablericonusercircle7910"
                  src="/external/tablericonusercircle7910-kwj.svg"
                  className="home-tablericonusercircle"
                />
                <div className="home-nameaccounttype">
                  <span className="home-text21">user@abccompany.com</span>
                  <span className="home-text22">Pro Account</span>
                </div>
              </div>
              <div className="home-logout">
                <img
                  alt="tablericondoorexit7911"
                  src="/external/tablericondoorexit7911-5ll8.svg"
                  className="home-tablericondoorexit"
                />
                <span className="home-text23">Logout</span>
              </div>
            </div>
          </div>
          <div className="home-maincanvas"></div>
          <div className="home-footer">
            <span className="home-text24">5 Projects</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
