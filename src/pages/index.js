import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

import IntroSectionImage from "../images/IntroSection.png";

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Devesh Kumar | Web Developer" />
    <Header />
    <div className={"home"}>
    	<section className={"home-intro fixedcontainer row"}>
    		<div className={"introleft col-md-7"}>
    			<div className={"introheading"}>
    				<div className={"heading"}>
    					Oh Hey There!
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
    			</div>
    		</div>
    		<div className={"introright col-md-5"}>
    			<Image src={IntroSectionImage} alt={"Intro Image"} />
    		</div>
    	</section>
    </div>
  </React.Fragment>
)

export default IndexPage;