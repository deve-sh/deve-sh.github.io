import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Image from "../components/image"
import Icon from "../components/icon"
import SEO from "../components/seo"

import PlantImage from "../images/Plant.svg"
import ContactImage from "../images/conversation.svg"

const ContactPage = () => {
	return (
		<React.Fragment>
			<SEO title="Devesh Kumar - Contact" />
			<Header />
			<div className={"contact"}>
				<section className={"contact-toprow"}>
					<div className={"fixedcontainer row invertrow"}>
						<div className={"col-md-6 contactdesc"}>
							<div className={"contact-toprow-heading"}>Contact Me</div>
							<div className={"contact-toprow-desc"}>
								<p>
									Have an Idea? Wanna work together? Or Just want to say Hi?
									Feel free to get in contact with me.
								</p>

								<p>I am always looking for the next opportunity.</p>

								<p>
									Find my socials and a form to contact me in the section below.
									Great to have you here!
								</p>
							</div>
						</div>
						<div className={"col-md-6 contactimage"}>
							<Image src={ContactImage} alt={"Contact Me"} />
						</div>
					</div>
				</section>
				<div className={"contact-separators"}>
					<div className={"dot"} />
					<div className={"dot"} />
					<div className={"dot"} />
				</div>
				<section className={"contact-socialsection"}>
					<a
						href={"https://github.com/deve-sh/"}
						className={"sociallink"}
						target={"_blank"}
						rel={"noopener noreferrer"}
						title={"View My Github Profile"}
						aria-label={"View My Github Profile"}
					>
						<Icon
							className={"fab fa-github fa-lg"}
							title={"View My Github Profile"}
						/>
					</a>
					<a
						href={"https://www.linkedin.com/in/dev-esh/"}
						className={"sociallink linkedin"}
						target={"_blank"}
						rel={"noopener noreferrer"}
						title={"View My LinkedIn Profile"}
						aria-label={"View My LinkedIn Profile"}
					>
						<Icon
							className={"fab fa-linkedin-in fa-lg"}
							title={"View My LinkedIn Profile"}
						/>
					</a>
					<a
						href={"https://instagram.com/d_e_v.e_s_h"}
						className={"sociallink instagram"}
						target={"_blank"}
						rel={"noopener noreferrer"}
						title={"View My Instagram Profile"}
						aria-label={"View My Instagram Profile"}
					>
						<Icon
							className={"fab fa-instagram fa-lg"}
							title={"View My Instagram Profile"}
						/>
					</a>
					<a
						href={"mailto:devesh2027@gmail.com"}
						className={"sociallink mail"}
						title={"Email Me"}
						aria-label={"Email Me"}
					>
						<Icon
							className={"fas fa-envelope fa-lg"}
							title={"Email Me"}
						/>
					</a>
				</section>
				<section className={"contact-form-container"}>
					<Image
						src={PlantImage}
						alt={"Aesthetics"}
						className={"absoluteimage plantimage"}
					/>
					<div className={"fixedcontainer"}>
						<form
							className={"contact-form"}
							target={"_blank"}
							rel={"noopener noreferrer"}
							method={"POST"}
						>
							<div className={"contact-form-heading"}>Contact Form</div>
							<div className={"contact-form-desc"}>
								Just fill in the form below and I will definitely respond ASAP!
							</div>
						</form>
					</div>
				</section>
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default ContactPage
