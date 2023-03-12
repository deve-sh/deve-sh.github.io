import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import Icon from "../components/icon"
import SEO from "../components/seo"

import GithubCard from "../components/githubcard"

import CornerPlantsImage from "../images/leafstuff.svg"

import WorkImage from "../images/WorkIntro.png"
import WorkIntroWebp from "../images/webp/WorkIntro.webp"

import SolarLadderImage from "../images/SolarLadder.png"
import SolarLadderWebp from "../images/webp/SolarLadder.webp"

import BiddingPlatformImage from "../images/BiddingPlatform.png"
import BiddingPlatformWebp from "../images/webp/BiddingPlatform.webp"

import Photos from "../images/workimages.png"
import PhotosWebp from "../images/webp/workimages.webp"

const WorkPage = () => {
  return (
    <React.Fragment>
      <SEO title="Devesh Kumar | Work" />
      <Header />
      <div className={"work"}>
        <Image
          src={CornerPlantsImage}
          alt={"Aesthetics"}
          className={"absoluteimage invertleafstuff"}
          hideClassFromImage={true}
        />
        <section className={"workintro"}>
          <div className={"fixedcontainer row invertrow"}>
            <div className={"workintro-desc col-md-7"}>
              <div className={"workheading"}>
                What do I do? A lot.
                <br />
                What have I made? A lot.
              </div>
              <div className={"workdesc"}>
                <p>
                  I primarily work in the field of Web Development. But every
                  now and then I jump on to other stuff as well, such as UI
                  Design, Video Editing and Hobbyist Photography.
                </p>

                <p>
                  I may not be the great at the other stuff, but I can say with
                  confidence that the past 8 years of Web Development for me
                  have certainly been fruitful. And with consistency, which I
                  have, I will be great at the other stuff I am trying my hands
                  on as well.
                </p>
              </div>
            </div>
            <div className={"workintro-image col-md-5"}>
              <Image
                src={WorkImage}
                webPImage={WorkIntroWebp}
                alt={"Work Intro"}
                className={"workimage"}
                hideClassFromImage={true}
              />
            </div>
          </div>
        </section>
        <div className={"work-separators"}>
          <div className={"dot"} />
          <div className={"dot"} />
          <div className={"dot"} />
        </div>
        <section className={"webdev-projects"}>
          <div className={"fixedcontainer"}>
            <div className={"webdev-projects-heading"}>Personal Projects</div>
            <div className={"webdev-projects-heading-desc"}>
              Take a look at some of my projects.
            </div>
            <div className={"webdev-projects-singleproject row"}>
              <div className={"webdev-projects-singleproject-image col-md-6"}>
                <Image
                  src={SolarLadderImage}
                  webPImage={SolarLadderWebp}
                  alt={"Solar Ladder"}
                  className={"hobnobimage projectimage"}
                />
              </div>
              <div className={"webdev-projects-singleproject-desc col-md-6"}>
                <div className={"webdev-projects-singleproject-desc-heading"}>
                  Solar Ladder
                </div>
                <div className={"webdev-projects-singleproject-desc-desc"}>
                  <p>
                    Solar Ladder is Unergia's premier SAAS Application that is
                    built for Solar Installers and Companies to automate tasks,
                    manage teams, inventory, payments and remotely monitor
                    projects and inverters.
                  </p>
                  <div>
                    More time saved by them means more customers served, more
                    solar panels installed and in turn increasing the green
                    footprint. Solar Ladder is built entirely on Serverless, to
                    scale as much as required.
                  </div>
                </div>
              </div>
            </div>
            <div className={"webdev-projects-singleproject invertrow row"}>
              <div className={"webdev-projects-singleproject-desc col-md-6"}>
                <div className={"webdev-projects-singleproject-desc-heading"}>
                  Unergia Bidding Platform
                </div>
                <div className={"webdev-projects-singleproject-desc-desc"}>
                  <p>
                    The Bidding Platform is a Full Stack Application used by big
                    Solar Enterprises to get competitive real-time bids for
                    thier large-scale projects.
                  </p>
                  <div>
                    The Application is completely real-time and customizable to
                    the enterprise's requirements and can serve hundreds of bids
                    at a moment, all geo-synced to eliminate errors and
                    inconsistencies.
                  </div>
                </div>
              </div>
              <div className={"webdev-projects-singleproject-image col-md-6"}>
                <Image
                  src={BiddingPlatformImage}
                  webPImage={BiddingPlatformWebp}
                  alt={"Bidding Platform"}
                  className={"hobnobimage projectimage"}
                />
              </div>
            </div>
            <div className={"webdev-projects-reposection row"}>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName="Tranquil"
                  repoDesc="A Real-Time Online Development Environment inspired by Codesandbox and StackBlitz. 💻✨"
                  repoLang="TypeScript"
                  repoLink="https://github.com/deve-sh/Tranquil"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="Smallet"
                  repoDesc="A simple digital wallet for everyone. Built with Next.js ♥"
                  repoLang="TypeScript"
                  repoLink="https://github.com/deve-sh/Smallet"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="Isomorph"
                  repoDesc="A Purpose-Built React SSR and SSG framework inspired by Next.js."
                  repoLang="JavaScript"
                  repoLink="https://github.com/deve-sh/Isomorph"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="MBlaze"
                  repoDesc="Making working with MongoDB from the frontend simple and elegant, just like Firestore. 🔥"
                  repoLang="TypeScript"
                  repoLink="https://github.com/deve-sh/MBlaze"
                />
              </div>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName="Korero"
                  repoDesc="A snippet that enables real-time team communication and feedback for your app on any webpage 💬"
                  repoLang="TypeScript"
                  repoLink="https://github.com/deve-sh/Korero"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="NoteItDown"
                  repoDesc="A Simple Yet Extensive Note Taking Workspace Application for an entire team. Inspired By Notion 📓"
                  repoLang="JavaScript"
                  repoLink="https://github.com/deve-sh/NoteItDown"
                />
              </div>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName="Hobnob"
                  repoDesc="A Revolutionary Way For Leaders and Coding Classes to manage their Teams/Classrooms and Fellow/Student Interactions!"
                  repoLang="JavaScript"
                  repoLink="https://github.com/deve-sh/Hobnob"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="TimePad"
                  repoDesc="An algorithm for recordable and replayable textareas at scale. Detailed and Simple. Hobnob is built on this."
                  repoLang="JavaScript"
                  repoLink="https://github.com/deve-sh/TimePad"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="Stratify"
                  repoDesc="A simple tool to build out a static website using nothing but Markdown. Useful for static blog sites and feeds.."
                  repoLang="JavaScript"
                  repoLink="https://github.com/deve-sh/Stratify"
                />
              </div>
            </div>
            <div className="webdev-projects-reposection row">
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="MyJSON"
                  repoDesc="A Web Service to serve you the JSON of your need.🧾"
                  repoLang="JavaScript"
                  repoLink="https://github.com/deve-sh/myjson"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="Dashout"
                  repoDesc="A simple Buy Now Pay Later service implementation. 💳"
                  repoLang="TypeScript"
                  repoLink="https://github.com/deve-sh/Dashout"
                />
              </div>
              <div className="col-sm-4 repocol">
                <GithubCard
                  repoName="Altpay"
                  repoDesc="Enabling UPI QRs To Receive Payments Via Any Payment Method 🤳"
                  repoLang="JavaScript"
                  repoLink="https://github.com/deve-sh/Altpay"
                />
              </div>
            </div>
          </div>
          <div className={"viewmorework"}>
            <div className={"flexwork"}>
              View more of my work on{" "}
              <a
                href={"https://github.com/deve-sh/"}
                title={"Github Profile"}
                aria-label={"Github Profile"}
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                <Icon className={"fab fa-github fa-lg"} title={"Github"} />
              </a>
            </div>
            <div className={"flexwork"}>
              View my work history on{" "}
              <a
                href={"https://www.linkedin.com/in/dev-esh/"}
                title={"LinkedIn Profile"}
                aria-label={"LinkedIn Profile"}
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                <Icon
                  className={"fab fa-linkedin-in fa-lg"}
                  title={"LinkedIn"}
                />
              </a>
            </div>
            <div className={"flexwork"}>
              View my resume{" "}
              <a
                href={
                  "https://drive.google.com/file/d/16OkqANJ-37oyEaRWFukzBtX8z8h4DBvN/view?usp=sharing"
                }
                title={"View Resume"}
                aria-label={"View Resume"}
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                here:
                <Icon
                  className={"far fa-file-pdf fa-lg"}
                  title={"View Resume"}
                />
              </a>
            </div>
          </div>
        </section>
        <div className={"work-separators"}>
          <div className={"dot"} />
          <div className={"dot"} />
          <div className={"dot"} />
        </div>
        <section className={"images"}>
          <div className={"iclickphotos"}>And BTW, I click photos too.</div>
          <Image src={Photos} webPImage={PhotosWebp} alt={"My Photography"} />
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default WorkPage
