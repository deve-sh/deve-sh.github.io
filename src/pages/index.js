import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

import IntroSectionImage from "../images/IntroSection.png"
import IntroSectionWebp from "../images/webp/IntroSection.webp"

import WhatIdoImage from "../images/WhatIDo.svg"
import WhatIdoBackground from "../images/WhatIDoBackground.svg"
import WhiteboardImage from "../images/Whiteboard.svg"
import CornerPlantsImage from "../images/cornerplants.svg"
import LeafStuffImage from "../images/leafstuff.svg"

// Brand Images
import ConvinImage from "../images/convin.png"
import ConvinWebp from "../images/webp/convin.webp"

import JagoInvestorImage from "../images/jagoinvestor.png"
import JagoInvestorWebp from "../images/webp/jagoinvestor.webp"

import TheFifthElementImage from "../images/thefifthelement.png"
import TheFifthElementWebp from "../images/webp/thefifthelement.webp"

import UnergiaImage from "../images/unergia.png"
import UnergiaWebp from "../images/webp/unergia.webp"

import SolarLadderImage from "../images/solarladder-logo.png"
import SolarLadderWebp from "../images/webp/solarladder-logo.webp"

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="Devesh Kumar | Full Stack Engineer" />
      <Header />
      <div className={"home"}>
        <section className={"home-intro"}>
          <Image
            src={CornerPlantsImage}
            alt={"Aesthetics"}
            className={"absoluteimage cornerplantimage"}
            hideClassFromImage={true}
          />
          <Image
            src={LeafStuffImage}
            alt={"Aesthetics"}
            className={"absoluteimage leafstuffimage"}
            hideClassFromImage={true}
          />
          <div className={"fixedcontainer row"}>
            <div className={"introleft col-md-7"}>
              <div className={"introheading"}>
                <div className={"heading"}>
                  {/*<span className={"terminalicon"}>&gt;</span>*/}
                  Oh Hey There! <span className={"blinkerpad"}>_</span>
                </div>
              </div>
              <div className={"introdesc"}>
                <p>Hi, I am Devesh.</p>
                <p>
                  I am a Full Stack Software Engineer, Passionate Programmer,
                  Hobbyist Photographer and a travel enthusiast.
                </p>
                <p>
                  Basically everything you expect a 20 year old to talk about.
                </p>
                <p>
                  But above everything I mentioned above, I am a learner, a
                  lifelong learner.
                  <br />I learn stuff that interests me, not what's trendy.
                </p>
              </div>
            </div>
            <div className={"introright text-center col-md-5"}>
              <Image
                src={IntroSectionImage}
                webPImage={IntroSectionWebp}
                alt={"Devesh Kumar"}
                hideClassFromImage={true}
              />
            </div>
          </div>
        </section>
        <Image
          src={WhatIdoBackground}
          alt={"Background SVG"}
          className={"whatidotopsvg"}
        />
        <section className={"home-whatido"}>
          <div className={"row fixedcontainer"}>
            <div className={"col-md-5 imagecolumn text-center"}>
              <Image src={WhatIdoImage} alt={"What I do?"} />
            </div>
            <div className={"col-md-7 whatido-right"}>
              <div className={"whatido-heading"}>Helping Build Experiences</div>
              <div className={"whatido-text"}>
                <p>
                  I take delight in helping startups, businesses and individuals
                  build complex yet intuitive and compelling experiences with
                  their products and services, both as a developer and someone
                  with a keen eye for aesthetics.
                </p>
                <p>
                  I have helped build tools, MVPs, Landing Pages and also
                  founded numerous services myself start to finish, from
                  Conceptualization to Creation to Marketing. The time is for
                  our taking after all!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Image
          src={WhatIdoBackground}
          alt={"Background SVG"}
          className={"whatidotopsvg invert"}
          hideClassFromImage={true}
        />
        <section className={"home-solvingproblems"}>
          <div className={"fixedcontainer row"}>
            <div className={"col-md-7 solvingproblems-left"}>
              <div className={"solvingproblems-heading"}>Solving Problems</div>
              <div className={"solvingproblems-text"}>
                <p>
                  I believe if you have a problem and you are not solving it,
                  you are wasting your time!
                </p>
                <p>
                  I am hence on the constant lookout for problems to solve, I do
                  get a Eureka moment every now and then.
                </p>
                <p>
                  Learn more about the problems I have solved so far in the Work
                  Section.
                </p>
              </div>
            </div>
            <div className={"col-md-5 imagecolumn text-center"}>
              <Image
                src={WhiteboardImage}
                alt={"Whiteboard for solving problems."}
              />
            </div>
          </div>
        </section>
        <section className={"home-myservices"}>
          <div className={"fixedcontainer"}>
            <div className={"exposition"}>
              My expertise and skills have been useful to:
            </div>
            <div
              className={
                "row brandimages align-items-center justify-content-center"
              }
            >
              <div className={"brandimage col-4 p-3"}>
                <Image
                  src={ConvinImage}
                  webPImage={ConvinWebp}
                  alt={"Convin"}
                />
              </div>
              <div className={"brandimage col-4 p-3"}>
                <Image
                  src={JagoInvestorImage}
                  webPImage={JagoInvestorWebp}
                  alt={"Convin"}
                />
              </div>
              <div className={"brandimage col-4 p-3"}>
                <Image
                  src={TheFifthElementImage}
                  webPImage={TheFifthElementWebp}
                  alt={"The Fifth Element"}
                />
              </div>
              <div className={"brandimage col-4 p-3"}>
                <Image
                  src={UnergiaImage}
                  webPImage={UnergiaWebp}
                  alt={"Unergia"}
                />
              </div>
              <div className={"brandimage col-4 p-3"}>
                <Image
                  src={SolarLadderImage}
                  webPImage={SolarLadderWebp}
                  alt={"Solar Ladder"}
                />
              </div>
            </div>
          </div>
          <br />
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
