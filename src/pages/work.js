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

import HobnobImage from "../images/Hobnob.png"
import HobnobWebp from "../images/webp/Hobnob.webp"

import SolarLadderImage from "../images/SolarLadder.png"
import SolarLadderWebp from "../images/webp/SolarLadder.webp"

import BiddingPlatformImage from "../images/BiddingPlatform.png"
import BiddingPlatformWebp from "../images/webp/BiddingPlatform.webp"

import MyJSONImage from "../images/myjson.png"
import MyJSONWebp from "../images/webp/myjson.webp"

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
            <div className={"webdev-projects-singleproject row"}>
              <div className={"webdev-projects-singleproject-image col-md-6"}>
                <Image
                  src={HobnobImage}
                  webPImage={HobnobWebp}
                  alt={"Hobnob"}
                  className={"hobnobimage projectimage"}
                />
              </div>
              <div className={"webdev-projects-singleproject-desc col-md-6"}>
                <div className={"webdev-projects-singleproject-desc-heading"}>
                  Hobnob
                </div>
                <div className={"webdev-projects-singleproject-desc-desc"}>
                  <p>
                    Hobnob is a code-casting service that allows coding
                    institues to move their courses online efficiently with
                    interactive code-casts that students can use to learn more
                    effectively, along with more added features.
                  </p>
                  <div>
                    Hobnob is the crowning jewel of my Web Development skills. I
                    put everything I ever learnt to the test in building this
                    application. From React to Backend Auth to DevOps to AWS.
                  </div>
                  <div
                    className={
                      "webdev-projects-singleproject-desc-buttoncontainer"
                    }
                  >
                    <a
                      href={"https://deve-sh.github.io/hobnob"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                      title={"View Hobnob"}
                      aria-label={"View Hobnob"}
                    >
                      <button className={"projectbutton"}>
                        <Icon
                          className={"fas fa-external-link-alt"}
                          title={"View Hobnob"}
                        />
                        &nbsp;&nbsp;Know More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"webdev-projects-singleproject invertrow row"}>
              <div className={"webdev-projects-singleproject-desc col-md-6"}>
                <div className={"webdev-projects-singleproject-desc-heading"}>
                  MyJSON
                </div>
                <div className={"webdev-projects-singleproject-desc-desc"}>
                  <p>
                    As I previously mentioned, I like solving problems. One
                    problem I usually have is stumbling on a feature in the
                    frontend that the backend isn't ready for, or populating the
                    backend with fake data (Sounds relatable?).
                  </p>
                  <div>
                    To solve all these problems, I created MyJSON, a simple
                    service to make a request to a MyJSON endpoint and get the
                    JSON you need.
                  </div>
                  <div
                    className={
                      "webdev-projects-singleproject-desc-buttoncontainer"
                    }
                  >
                    <a
                      href={"https://myjson.now.sh"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                      title={"Try It Out"}
                      aria-label={"Try It Out"}
                    >
                      <button className={"projectbutton"}>
                        <Icon
                          className={"fas fa-external-link-alt"}
                          title={"Try It Out"}
                        />
                        &nbsp;&nbsp;Try It
                      </button>
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href={"https://github.com/deve-sh/MyJSON"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                      title={"View Source On Github"}
                      aria-label={"View Source On Github"}
                    >
                      <button className={"projectbutton"}>
                        <Icon
                          className={"fab fa-github fa-lg"}
                          title={"View Source On Github"}
                        />
                        &nbsp;&nbsp;View Source
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"webdev-projects-singleproject-image col-md-6"}>
                <Image
                  src={MyJSONImage}
                  webPImage={MyJSONWebp}
                  alt={"MyJSONImage"}
                  className={"hobnobimage projectimage"}
                />
              </div>
            </div>
            <div className={"webdev-projects-reposection row"}>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName={"Fiddler"}
                  repoDesc={
                    "A State of the Art HTML, CSS and JS Fiddle created using React."
                  }
                  repoLang={"JavaScript"}
                  repoLink={"https://github.com/deve-sh/Fiddler"}
                />
              </div>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName={"TimePad"}
                  repoDesc={
                    "An algorithm for recordable and replayable textareas at scale. Detailed and Simple. Hobnob is built on this."
                  }
                  repoLang={"JavaScript"}
                  repoLink={"https://github.com/deve-sh/TimePad"}
                />
              </div>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName={"InternsHub"}
                  repoDesc={
                    "A web app that serves as an Internship Providing Website, clean and efficient."
                  }
                  repoLang={"PHP"}
                  repoLink={"https://github.com/deve-sh/InternsHub"}
                />
              </div>
            </div>
            <div className={"webdev-projects-reposection row"}>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName={"DoggoDB"}
                  repoDesc={
                    "A try at a lightweight database as a localStorage abstraction in the browser."
                  }
                  repoLang={"JavaScript"}
                  repoLink={"https://github.com/deve-sh/DoggoDB"}
                />
              </div>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName={"Issuer"}
                  repoDesc={
                    "A web app to let institutes solve technical problems quick and easy."
                  }
                  repoLang={"JavaScript"}
                  repoLink={"https://github.com/deve-sh/Issuer"}
                />
              </div>
              <div className={"col-sm-4 repocol"}>
                <GithubCard
                  repoName={"Pollster"}
                  repoDesc={"A Sexy Voting Web App!"}
                  repoLang={"PHP"}
                  repoLink={"https://github.com/deve-sh/Pollster"}
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
                <Icon
                  className={"fab fa-github fa-lg"}
                  title={"Github"}
                />
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
