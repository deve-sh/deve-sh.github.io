import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer";
import Image from "../components/image"
import SEO from "../components/seo"

const WorkPage = () => {
	return (
		<React.Fragment>
		    <SEO title="Devesh Kumar - Work" />
		    <Header />
		    <div className={"work"}>

		    </div>
		    <Footer />
		</React.Fragment>
	);
};

export default WorkPage;