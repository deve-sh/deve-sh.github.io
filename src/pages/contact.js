import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer";
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => {
	return (
		<React.Fragment>
		    <SEO title="Devesh Kumar - Contact" />
		    <Header />
		    <div className={"contact"}>

		    </div>
		    <Footer />
		</React.Fragment>
	);
};

export default ContactPage;