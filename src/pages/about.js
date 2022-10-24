import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

import AboutSectionImage from "../images/aboutsectionimage.png"
import AboutSectionWebp from "../images/webp/aboutsectionimage.webp"

import CornerPlantsImage from "../images/leafstuff.svg"

import ChildHoodImage from "../images/Childhood.jpg"
import ChildHoodWebp from "../images/webp/Childhood.webp"

import TeenageImage from "../images/Teenage.jpg"
import TeenageWebp from "../images/webp/Teenage.webp"

import BeyondImage from "../images/Beyond.jpg"
import BeyondWebp from "../images/webp/Beyond.webp"

const AboutPage = () => {
  return (
    <React.Fragment>
      <SEO title="Devesh Kumar | About Me" />
      <Header />
      <div className={"about"}>
        <section className={"about-top"}>
          <Image
            src={CornerPlantsImage}
            alt={"Aesthetics"}
            className={"absoluteimage invertleafstuff"}
            hideClassFromImage={true}
          />
          <div className={"fixedcontainer row"}>
            <div className={"col-md-7 about-top-left"}>
              <div className={"heading"}>About Me</div>
              <div className={"aboutdesc"}>
                <p>
                  I believe in being more than the college I went to, the cities
                  I've lived in, the credentials I put on my resume, and more
                  than the titles and names people know me by.
                </p>
                <p>
                  I am the sum of my experiences, learnings and creations, my
                  insatiable curiosity, and my unending drive to build great
                  things and solve real-world problems.
                </p>
              </div>
            </div>
            <div className={"about-top-right col-md-5"}>
              <Image
                src={AboutSectionImage}
                webPImage={AboutSectionWebp}
                alt={"About Me"}
                hideClassFromImage={true}
              />
            </div>
          </div>
        </section>
        <section className={"about-descriptors darksection row"}>
          <div className={"col-xl-6 imagecol"}>
            <Image
              src={ChildHoodImage}
              webPImage={ChildHoodWebp}
              alt={"The Paths I've Taken"}
              className={"fullimage"}
            />
          </div>
          <div className={"col-xl-6 desccol"}>
            <div className={"desc"}>
              <p>For most of my life, I have just been an average kid.</p>
              <p>
                But I never liked taking the path everyone else took, or using a
                cookie cutter method for life. To me, life is a path that's
                different for everyone and those taken by one are almost never
                the best paths for someone else.
              </p>
              <p>
                I only ever had two possible career options as I have had
                clarity on what I liked and wanted to be from a very early age.
              </p>
              <p>
                I ended up being a Software Engineer which was one of the two
                possible career options I had set for myself.
              </p>
            </div>
          </div>
        </section>
        <section className={"about-descriptors row invertrow"}>
          <div className={"col-xl-6 desccol"}>
            <div className={"desc"}>
              <p>
                If you're someone from India, you would be expected to choose
                between being an engineer or a doctor. I've had the fortune of
                having parents who always supported me in not choosing either of
                those paths.
              </p>
              <p>
                I did not go for an engineering degree and instead decided to
                build up my skillset early on, and trying to connect with people
                who have similar interests and acumen.
              </p>
              <p>
                I learnt everything I could get my hands on, from creating
                themes for forum software, building web apps and then
                architecting systems. Ran small businesses, freelanced and
                interened, no opportunity was small enough for me to let go of.
              </p>
            </div>
          </div>
          <div className={"col-xl-6 teenageimage imagecol"}>
            <Image
              src={TeenageImage}
              webPImage={TeenageWebp}
              alt={"Teenage"}
              className={"fullimage"}
            />
          </div>
        </section>
        <section className={"about-descriptors row darksection"}>
          <div className={"col-xl-6 childhoodimage imagecol"}>
            <Image
              src={BeyondImage}
              webPImage={BeyondWebp}
              alt={"Today and Beyond"}
              className={"fullimage"}
            />
          </div>
          <div className={"col-xl-6 desccol"}>
            <div className={"desc"}>
              <p>
                I've always liked having control of my life. I don't put myself
                in positions where someone else pulls the strings (One of the
                reasons I never liked School) so I always do my best to be the
                one in charge of my situations.
              </p>
              <p>
                Don't let the above fool you, however, I've always been an
                academically bright student, a great communicator and, as far as
                my colleagues tell me, a great co-worker to have around.
              </p>
              <p>
                I love exploring, traveling and having conversations with
                interesting people. Hit me up if you would like to have a chat.
                I keep an open mind, am an optimist and always look for the good
                in things.
              </p>
            </div>
          </div>
        </section>
        <section className={"about-finalcol"}>
          <Image
            src={CornerPlantsImage}
            alt={"Aesthetics"}
            className={"absoluteimage sticktoright"}
            hideClassFromImage={true}
          />
          <div className={"about-finalcol-finalmessage"}>
            <p>
              <span className="quotes">"</span>For me, it's about finding the
              thing you like. <br />
              Doing the best you can do about it.
              <br />
              And then finding more of what you like.
              <span className="quotes">"</span>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default AboutPage
