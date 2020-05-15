import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer";
import Image from "../components/image"
import SEO from "../components/seo"

import IntroSectionImage from "../images/IntroSection.png";
import WhatIdoImage from "../images/WhatIDo.svg";
import WhatIdoBackground from "../images/WhatIDoBackground.svg";
import WhiteboardImage from "../images/Whiteboard.svg";
import CornerPlantsImage from "../images/cornerplants.svg"
import LeafStuffImage from "../images/leafstuff.svg";

const IndexPage = () => {
  return <React.Fragment>
    <SEO title="Devesh Kumar | Full Stack Web Developer" />
    <Header />
    <div className={"home"}>
    	<section className={"home-intro"}>
            <Image 
                src={CornerPlantsImage} 
                alt={"Aesthetics"} 
                className={"absoluteimage cornerplantimage"} 
            />
            <Image 
                src={LeafStuffImage} 
                alt={"Aesthetics"} 
                className={"absoluteimage leafstuffimage"} 
            />
            <div className={"fixedcontainer row"}>
        		<div className={"introleft col-md-7"}>
        			<div className={"introheading"}>
        				<div className={"heading"}>
        					{/*<span className={"terminalicon"}>&gt;</span>*/}
                            Oh Hey There!{" "}
                            <span className={"blinkerpad"}>_</span>
        				</div>
        			</div>
        			<div className={"introdesc"}>
        				<p>
        					Hi, I am Devesh.
        				</p>
    					<p>
    						I am a Full Stack Web Developer, Passionate Programmer, Hobbyist Photographer, Video Editor and a travel enthusiast.
    					</p>
    					<p>
    						Basically everything you expect a 20 year old to talk about.
    					</p>
                        <p>
                            But above everything I mentioned above, I am a learner, a lifelong learner.
                            <br />I learn stuff I'm interested in, not just stuff that's trendy.
                        </p>
        			</div>
        		</div>
        		<div className={"introright col-md-5"}>
        			<Image src={IntroSectionImage} alt={"Devesh Kumar"} />
        		</div>
            </div>
    	</section>
        <Image src={WhatIdoBackground} alt={"Background SVG"} className={"whatidotopsvg"} />
        <section className={"home-whatido"}>
            <div className={"row fixedcontainer"}>
                <div className={"col-md-5 imagecolumn"}>
                    <Image src={WhatIdoImage} alt={"What I do?"} />
                </div>
                <div className={"col-md-7 whatido-right"}>
                    <div className={"whatido-heading"}>
                        Helping Build Experiences
                    </div>
                    <div className={"whatido-text"}>
                        <p>
                            I take delight in helping startups, businesses  and individuals build complex yet intuitive and compelling experiences with their products and services, both as a developer and someone with a keen eye for aesthetics.
                        </p>
                        <p>
                            I have helped build Tools, startup MVPs, Landing Pages and also founded a service myself start to finish, from Conceptualization to Creation to Marketing. The time is for our taking after all!
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Image src={WhatIdoBackground} alt={"Background SVG"} className={"whatidotopsvg invert"} />
        <section className={"home-solvingproblems"}>
            <div className={"fixedcontainer row"}>
                <div className={"col-md-7 solvingproblems-left"}>
                    <div className={"solvingproblems-heading"}>
                        Solving Problems
                    </div>
                    <div className={"solvingproblems-text"}>
                        <p>
                            I believe if you have a problem and you are not solving it, you are wasting your time!
                        </p>
                        <p>
                            I am hence on the constant lookout for problems to solve, I do get a Eureka moment every now and then.
                        </p>
                        <p>
                            Learn more about the problems I have solved so far in the Work Section.
                        </p>
                    </div>
                </div>
                <div className={"col-md-5 imagecolumn"}>
                    <Image src={WhiteboardImage} alt={"Whiteboard for solving problems."} />
                </div>
            </div>
        </section>
    </div>
    <Footer />
  </React.Fragment>;
}

export default IndexPage;