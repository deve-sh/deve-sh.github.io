import React from "react"
import { Helmet } from "react-helmet"

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

  const ExperienceSnippet = ({
    title,
    duration,
    company,
    desc,
    link,
    hasDot = false,
  }) => (
    <div className={`experience-snippet ${hasDot ? "hasdot" : ""}`}>
      {hasDot && <div className="experience-snippet-dot" />}
      {title && <div className="experience-snippet-title">{title}</div>}
      {company && <div className="experience-snippet-company">{company}</div>}
      {link && (
        <a
          href={link}
          className="experience-snippet-link"
          rel="noopener noreferrer"
          target="_blank"
          title={title || company || desc}
          aria-label={title || company || desc}
        >
          {link}
        </a>
      )}
      {duration && (
        <div className="experience-snippet-duration">{duration}</div>
      )}
      {desc && (
        <div
          className="experience-snippet-desc"
          style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}
        >
          {desc}
        </div>
      )}
    </div>
  )

  return (
    <React.Fragment>
      <SEO title="Devesh Kumar | Resume" />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
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
              skillset="JavaScript, TypeScript, Python, C, C++, SQL, HTML, CSS, PHP"
            />
            <SkillSectionClass
              type="Frameworks"
              skillset="React, Next.js, Gatsby, Node.js, Express, Svelte, Vue, Tailwind, SASS, GraphQL"
            />
            <SkillSectionClass
              type="Databases"
              skillset="Firestore, MongoDB, PostgreSQL, MySQL"
            />
            <SkillSectionClass
              type="Testing"
              skillset="Jest, Enzyme, React Testing Library, Cypress, Playwright"
            />
            <SkillSectionClass
              type="Platforms"
              skillset="Firebase, Supabase, GCP, AWS, Hasura"
            />
            <SkillSectionClass
              type="Tools"
              skillset="Git, Turbo, Nx, Vite"
            />
          </section>
          <div className="row resume-additioninfo">
            <section className="col-md-7 resume-additionalinfo-experience">
              <SectionHeading>Experience</SectionHeading>
              <div className="resume-additionalinfo-experience-timelineline" />
              <ExperienceSnippet
                hasDot
                title="Senior Software Engineer"
                company="Postman"
                duration="Feb 2023 - Present"
                desc={`Part of the core Web Platform team.
- Working on Modular Application Architectures using Micro-Frontends to deliver Postman on any platform.
- Worked extensively on the development and shipping of the Postman VS Code Extension. Assessed, migrated and shipped end-to-end features such as GraphQL and gRPC Workbench.`}
              />
              <ExperienceSnippet
                hasDot
                title="Senior Software Engineer"
                company="Unacademy"
                duration="Apr 2022 - Feb 2023"
                desc={`- Reduced Average Page Size by 30% for faster load.
- Migrated Common Redux store to SWR and Zustand to save each user over 500KB/visit.
- Implemented Pipeline parallelization and build caching to reduce integration and deployment pipeline time by 10-15 minutes/build.
- Worked on the creation of a new standardized Design System for the Web Engineering organization.
- Worked on POCs for splitting frontend Next.js Monolith into Micro-Frontends.`}
              />
              <ExperienceSnippet
                hasDot
                title="Software Engineer"
                company="Unacademy"
                duration="Jul 2021 - Apr 2022"
                desc={`Part of the Web Platform Team.
- Focused on seamless and minimal interruption platform-level changes + Keeping the codebase clean and performant as the product evolves and scaled to 4x the number of developers.
- Conducted over 40 technical interviews and participated in hiring processes.
- Worked with teams to create and roll out new projects like Unacademy Icons, Global Test Prep, and internal CRM Setup, and their integration into the monolith.
- Spearheaded the migration of universally server-rendered monolith to opt-in static optimization, reducing average page load time by 45% and saving compute and bandwidth costs.
- Worked on Technical and Product Documentation for efficient organisation-wide knowledge transfers.
- Highest Contributor to Codebase since joining.`}
              />
              <ExperienceSnippet
                hasDot
                title="Lead Engineer"
                company="Unergia & Solar Ladder"
                duration="Apr 2020 - Jul 2021"
                desc={`Single-handedly built SolarLadder, a B2B SAAS offering for Solar Companies, from scratch.
SolarLadder provides over 30 different features to solar companies so they can focus on serving their customers better, reduce costs and automate every aspect of their operations.
Most tasks that took over an hour manually, take less than a minute to complete on SolarLadder.

Crafted Unergia's proprietary B2C Platform end to end from concept to execution to connect Solar Installers focusing on the Residential sector to potential customers with Push Notifications for User Engagement and Payment Gateway integration.
Performed A/B and Redirect Tests on Unergia's main website, optimized their website and decreased bounce rate by 25%, latency by 85% and increased conversion rate by 200%.
Created an in-house blogging system for Unergia using Next.js, Redux, Bootstrap and Firebase and worked with SEO best practices for better reach and targeting.
Integrated Unergia's CRM with their customers to automate geographical tagging processes. Migrated Unergia's main website to SEO Optimized and Static Next.js pages.`}
              />
              <ExperienceSnippet
                hasDot
                title="Full Stack Web Developer"
                company="Maalexi"
                duration="Apr 2020 - Jul 2021"
                desc={`Worked on the backend and frontend of a next-gen online marketplace using Next.js, Express, MongoDB (Atlas) and AWS Cloud Offerings.`}
              />
              <ExperienceSnippet
                hasDot
                title="Backend Engineer"
                company="EventBeep"
                duration="Dec 2020 - Feb 2021"
                desc={`Worked on efficient delivery of notifications to users and the GraphQL backend for the mobile app.`}
              />
              <ExperienceSnippet
                hasDot
                title="Web Development Intern"
                company="JagoInvestor.com"
                duration="Jan 2020 - Feb 2020"
                desc={`Developed Financial Tools and Calculators for JagoInvestor's website, setup data warehousing using Firestore and CRM Integration to generate more leads.`}
              />
              <ExperienceSnippet
                hasDot
                title="React.js Development Intern"
                company="Convin.ai"
                duration="Sep 2019 - Nov 2019"
                desc={`Worked on developing efficient and beautiful Dashboard modules and components using React.JS and Redux for Convin's ML Platform, with Code Obfuscation for increased Code Security.`}
              />
            </section>
            <section className="col-md-5 resume-additionalinfo-certifications">
              <SectionHeading>Certifications</SectionHeading>
              <ExperienceSnippet
                title="Engineering Virtual Experience"
                company="Goldman Sachs"
                duration="Aug 2020"
              />
              <ExperienceSnippet
                title="Engineering Virtual Internship"
                company="Microsoft"
                duration="June 2020 - July 2020"
              />
              <ExperienceSnippet
                title="Software Engineering Virtual Experience"
                company="JP Morgan Chase & Co."
                duration="May 2020"
              />
              <ExperienceSnippet
                title="Full Stack Web Development"
                company="freeCodeCamp"
                duration="Nov 2018 - June 2019"
              />
              <br />
              <SectionHeading>Education</SectionHeading>
              <ExperienceSnippet
                title="Bachelor of Computer Science"
                company="Fergusson College, Pune"
                duration="2018 - 2021 9.98 CGPA"
              />
              <br />
              <SectionHeading>Projects</SectionHeading>
              <ExperienceSnippet
                title="Tranquil"
                company="A real time online development environment to
                simplify project bootstrapping and testing."
                link="https://github.com/deve-sh/Tranquil"
                duration="Dec 2022 - Feb 2023"
              />
              <div className="row">
                <div className="col-6 p-1 pl-0">
                  <ExperienceSnippet
                    title="Isomorph"
                    company="A Framework to build Isomorphic React apps. Inspired by Next.js."
                    link="https://npmjs.com/isomorph-web"
                    duration="May 2022 - Jun 2022"
                  />
                </div>
                <div className="col-6 pl-1">
                  <ExperienceSnippet
                    title="Korero"
                    company="A simple snippet that enables real-time communication for your team on any page"
                    link="https://github.com/deve-sh/korero"
                    duration="Feb 2022 - Mar 2022"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
        <div className="text-center">
          <a
            href={
              "https://drive.google.com/file/d/16OkqANJ-37oyEaRWFukzBtX8z8h4DBvN/view?usp=sharing"
            }
            title={"View Resume"}
            aria-label={"View Resume"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            <button className={"projectbutton"}>
              <Icon
                className={"far fa-file-pdf fa-lg"}
                title={"Download Resume"}
              />
              &nbsp;&nbsp;Download Resume
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ResumePage
