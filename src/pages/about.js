import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

import AboutSectionImage from "../images/aboutsectionimage.png"
import CornerPlantsImage from "../images/leafstuff.svg"
import ChildHoodImage from "../images/Childhood.jpg"
import TeenageImage from "../images/Teenage.jpg"
import BeyondImage from "../images/Beyond.jpg"

const AboutPage = () => {
	return (
		<React.Fragment>
			<SEO title="Devesh Kumar - About" />
			<Header />
			<div className={"about"}>
				<section className={"about-top"}>
					<Image
						src={CornerPlantsImage}
						alt={"Aesthetics"}
						className={"absoluteimage invertleafstuff"}
					/>
					<div className={"fixedcontainer row"}>
						<div className={"col-md-7 about-top-left"}>
							<div className={"heading"}>About Me</div>
							<div className={"aboutdesc"}>
								<p>
									I am Devesh, a 20 year old Computer Science Student at
									Fergusson College, Pune.
								</p>

								<p>
									I am from Bhopal, but have lived in 12 cities since I was
									born. So it is safe to assume that I have seen quite a lot ot
									cultures, places and people, and that number is only going to
									grow as I age and discover more and more!
								</p>
							</div>
						</div>
						<div className={"about-top-right col-md-5"}>
							<Image src={AboutSectionImage} alt={"About Me"} />
						</div>
					</div>
				</section>
				<section className={"about-descriptors darksection row"}>
					<div className={"col-xl-6 imagecol"}>
						<Image
							src={ChildHoodImage}
							alt={"Childhood"}
							className={"fullimage"}
						/>
					</div>
					<div className={"col-xl-6 desccol"}>
						<div className={"heading"}>Childhood</div>
						<div className={"desc"}>
							<p>
								I was a relatively inactive yet an extremely curious child till
								12.
								<br />I always had my eyes open for anything new and special
								that came my way. I tried my hands on Web Development out of
								pure curiosity.
							</p>
							<p>
								Learned a little photography, got addicted to it.
								<br />I started my first web dev company at 13, worked a year,
								earned a little, closed it at 14 due to time constraints from
								school. I also ran Cricket Modders, the second largest cricket
								modding site in the world at a point. Life was good.
							</p>
						</div>
					</div>
				</section>
				<section className={"about-descriptors row invertrow"}>
					<div className={"col-xl-6 desccol"}>
						<div className={"heading"}>Teenage and Adolescense</div>
						<div className={"desc"}>
							<p>
								If the above sounds impressive, don’t get into it. My
								mid-adolescence was filled with heartbreaking failures in
								academics and extreme lack of social appreciation and
								validation. It felt at times like all the efforts I had put in
								all these years were going down the drain.
							</p>
							<p>
								I am pretty sure I slipped into an phase of self-doubt for
								almost an year. I had no reason to, I was more fortunate than a
								lot of people out there. But can’t blame it, teenagers are
								extremely emotionally-driven. I smiled the phase off anyway.
							</p>
						</div>
					</div>
					<div className={"col-xl-6 teenageimage imagecol"}>
						<Image src={TeenageImage} alt={"Teenage"} className={"fullimage"} />
					</div>
				</section>
				<section className={"about-descriptors row darksection"}>
					<div className={"col-xl-6 childhoodimage imagecol"}>
						<Image
							src={BeyondImage}
							alt={"Today and Beyond"}
							className={"fullimage"}
						/>
					</div>
					<div className={"col-xl-6 desccol"}>
						<div className={"heading"}>Today and Beyond</div>
						<div className={"desc"}>
							<p>
								The end of my teen years looked like a triumph to me. With
								enough effort, I was able to not only pass the subjects I
								failed, but top the class in them. Wasted effort I would say but
								I definitely regained the confidence I had lost in all those
								years realizing that there was not reason to be sad about
								anything.
							</p>
							<p>
								I kept learning new stuff till I actually became the best or
								good enough at whatever I liked. I got to learn the skill that
								is now something I can’t live without, driving. I do everything
								I like today and am more free and confident than ever. Looking
								forward to even more goodness in the coming years.
							</p>
						</div>
					</div>
				</section>
				<section className={"about-finalcol"}>
					<Image
						src={CornerPlantsImage}
						alt={"Aesthetics"}
						className={"absoluteimage sticktoright"}
					/>
					<div className={"about-finalcol-finalmessage"}>
						<p>
							"For me, it’s about finding the thing you like. <br />
							Doing the best you can do about it.<br />
							And then finding more of what you like."
						</p>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default AboutPage
