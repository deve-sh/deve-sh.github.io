import React from "react"

import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import fourofour from "../images/404.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <div style={{"textAlign": "center"}}>
    	<div className={"fofcontainer"}>
    		<Image src={fourofour} alt={"Not Found"} className={"fofimage"} />
    	</div>
    	<br />
	    <h1>Not Found</h1>
	    <p>You just hit a route that doesn&#39;t exist. <Link to={"/"}>Check out something that exists.</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
