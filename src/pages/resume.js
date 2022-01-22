import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Icon from "../components/icon"

const ResumePage = () => {
  const InfoChip = ({ text, children, align }) => (
    <div className={`infochip align-${align || "center"}`}>
      {text || children}
    </div>
  )

  const SectionHeading = ({ children }) => (
    <div className="resume-sectionheading">{children}</div>
  )

  const SkillSectionClass = ({ type = "", skillset = "" }) => (
    <div className="resume-skills-section">
      <InfoChip text={type} /> {skillset}
    </div>
  )

  return (
    <React.Fragment>
      <SEO title="Devesh Kumar | Resume" />
      <Header />
      <div className="resume-container">
        <div className="resume">
          <section className="resume-header row">
            <div className="resume-header-maininfo col-md-6">
              <div className="resume-header-maininfo-heading">Devesh Kumar</div>
              <div className="resume-header-maininfo-subheading">
                Full Stack Engineer
              </div>
              <div className="resume-header-maininfo-subheading location">
                Pune, Delhi
              </div>
            </div>
            <div className="resume-header-secondaryinfo col-md-6">
              <div className="resume-header-secondaryinfo-section">
                <a href="tel:6263371219" title="Call Me">
                  <InfoChip>
                    <Icon
                      className="fas fa-lg fa-phone fa-flip-horizontal"
                      title="Phone"
                    />
                    &nbsp;&nbsp;+91-6263371219
                  </InfoChip>
                </a>
              </div>
              <div className="resume-header-secondaryinfo-section">
                <a href="mailto:contact@devesh.tech" title="Mail Me">
                  <InfoChip>
                    <Icon className="fas fa-lg fa-envelope" title="Mail" />
                    &nbsp;&nbsp;contact@devesh.tech
                  </InfoChip>
                </a>
              </div>
              <div className="resume-header-secondaryinfo-section">
                <a
                  href="https://devesh.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My Portfolio Website"
                >
                  <InfoChip>
                    <Icon
                      className="fas fa-lg fa-globe-americas"
                      title="Globe"
                    />
                    &nbsp;&nbsp;devesh.tech
                  </InfoChip>
                </a>
                <a
                  href="https://www.linkedin.com/in/dev-esh"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My LinkedIn Website"
                >
                  <InfoChip>
                    <Icon className="fab fa-lg fa-linkedin" title="LinkedIn" />
                    &nbsp;&nbsp;dev-esh
                  </InfoChip>
                </a>
                <a
                  href="https://github.com/deve-sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My GitHub Profile"
                >
                  <InfoChip>
                    <Icon
                      className="fab fa-lg fa-github-square"
                      title="GitHub"
                    />
                    &nbsp;&nbsp;deve-sh
                  </InfoChip>
                </a>
              </div>
            </div>
          </section>
          <section className="resume-section resume-skills">
            <SectionHeading>Skills</SectionHeading>
            <SkillSectionClass
              type="Languages"
              skillset="JavaScript, Python, C, C++, Java, SQL, HTML, CSS, PHP"
            />
            <SkillSectionClass
              type="Frameworks"
              skillset="React, Next.js, Gatsby, Node.js, Express, Svelte, Vue, Jest, Enzyme, Flask, GraphQL"
            />
            <SkillSectionClass
              type="Databases"
              skillset="Firebase, MongoDB, PostgreSQL, MySQL, PlanetScale"
            />
            <SkillSectionClass
              type="Tools"
              skillset="Git, Agile Development, Scrum"
            />
            <SkillSectionClass
              type="Soft Skills"
              skillset="Excellent Communicator, Responsible, Owner, Passionate"
            />
          </section>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ResumePage
