import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import Icon from "../components/icon"
import SEO from "../components/seo"

import GithubCard from "../components/githubcard"

import WorkImage from "../images/WorkIntro.png"
import HobnobImage from "../images/Hobnob.png"

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
								alt={"Work Intro"}
								className={"workimage"}
							/>
						</div>
					</div>
				</section>
				<section className={"webdev-projects"}>
					<div className={"fixedcontainer"}>
						<div className={"webdev-projects-heading"}>Personal Projects</div>
						<div className={"webdev-projects-heading-desc"}>
							Take a look at some of my personal projects.
						</div>
						<div className={"webdev-projects-singleproject row"}>
							<div className={"webdev-projects-singleproject-image col-md-7"}>
								<Image
									src={HobnobImage}
									alt={"Hobnob"}
									className={"hobnobimage"}
								/>
							</div>
							<div className={"webdev-projects-singleproject-desc col-md-5"}>
								<div className={"webdev-projects-singleproject-desc-heading"}>
									Hobnob
								</div>
								<div className={"webdev-projects-singleproject-desc-desc"}>
									<p>
										Hobnob is the crowning jewel of my Web Development skills. I
										put everything I ever learnt to the test in building this
										application. From React to Backend Auth to DevOps to AWS.
									</p>
									<p>
										Hobnob is a code-casting service that allows coding
										institues to move their courses online efficiently.
									</p>
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
												&nbsp;&nbsp;View What Hobnob Is
											</button>
										</a>
									</div>
								</div>
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
									repoName={"Median"}
									repoDesc={
										"A Text Blog Engine Written with Node.js, Express and React."
									}
									repoLang={"JavaScript"}
									repoLink={"https://github.com/deve-sh/Median"}
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
				</section>
				<section className={"images"}></section>
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default WorkPage
