import React from "react"

import Icon from "./icon"

const Footer = props => {
	const footerIcons = [
		"fas fa-heart",
		"fas fa-coffee",
		"fas fa-cookie",
	]

	const selectFooterIcon = () => {
		return footerIcons[Math.floor(Math.random() * footerIcons.length)];
	}

	return (
		<footer className={"footer"}>
			<div className={"fixedcontainer"}>
				<div className={"footer-top"}>
					With{" "}
					<Icon
						className={"footer-icon " + selectFooterIcon()}
						title={"Love"}
					/>{" "}
					from Devesh.
				</div>
				<div className={"footer-separator"} />
				<div className={"footer-links"}>
					<a
						href={"https://github.com/deve-sh"}
						target={"_blank"}
						aria-label={""}
						className={"footer-link "}
						title={"View my code on Github."}
						rel={"noopener noreferrer"}
					>
						<Icon
							className={"fab fa-github fa-lg"}
							title={"View my code on Github."}
						/>
					</a>
					<a
						href={"https://www.linkedin.com/in/dev-esh/"}
						target={"_blank"}
						aria-label={""}
						className={"footer-link "}
						title={"Check my profile out on LinkedIn."}
						rel={"noopener noreferrer"}
					>
						<Icon
							className={"fab fa-linkedin-in fa-lg"}
							title={"Check my profile out on LinkedIn"}
						/>
					</a>
					<a
						href={"https://instagram.com/d_e_v.e_s_h"}
						target={"_blank"}
						aria-label={""}
						className={"footer-link "}
						title={"Check my photos out on Instagram."}
						rel={"noopener noreferrer"}
					>
						<Icon
							className={"fab fa-instagram fa-lg"}
							title={"Check my photos out on Instagram."}
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
