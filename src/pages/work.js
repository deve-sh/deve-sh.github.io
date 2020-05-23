import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

import WorkImage from "../images/WorkIntro.png";

const WorkPage = () => {
	return (
		<React.Fragment>
			<SEO title="Devesh Kumar - Work" />
			<Header />
			<div className={"work"}>
				<section className={"workintro"}>
					<div className={"fixedcontainer row invertrow"}>
						<div className={"workintro-desc col-md-7"}>
							<div className={"workheading"}>
								What do I do? A lot.<br />
								What have I made? A lot.
							</div>
							<div className={"workdesc"}>
								<p>
									I primarily work in the field of Web Development.
									But every now and then I jump on to other stuff as well, such as UI Design, Video Editing and Hobbyist Photography.
								</p>

								<p>
									I may not be the great at the other stuff, but I can say with confidence that the past 8 years of Web Development for me have certainly been fruitful. And with consistency, which I have, I will be great at the other stuff I am trying my hands on as well.
								</p>
							</div>
						</div>
						<div className={"workintro-image col-md-5"}>
							<Image
								src={WorkImage}
								alt={"Work Intro"}
								className={"workimage"}
							/>
						</div>
					</div>
				</section>
				<section className={"webdev-projects"}>

				</section>
				<section className={"images"}>

				</section>
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default WorkPage
