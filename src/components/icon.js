// Reusable Icon component

import React from "react"

const Icon = props => {
	return (
		<i
			className={`${props.className ? props.className : ""}`}
			aria-label={"Icon"}
			aria-hidden={true}
			title={props.title ? props.title : "Icon"}
		/>
	)
}

export default Icon
