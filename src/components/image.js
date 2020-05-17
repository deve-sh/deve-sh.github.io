import React from "react"

const Image = ({ src, alt, className }) => {
	return (
		<img
			src={src}
			alt={alt}
			title={alt}
			aria-label={alt}
			className={`resimage ${className ? className : ""}`}
		/>
	)
}

export default Image
