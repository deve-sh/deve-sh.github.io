import React from "react"

const Image = ({ src, alt, className, webPImage, hideClassFromImage }) => {
	return (
		<picture className={`resimage ${className ? className : ""}`}>
			{webPImage ? (
				<React.Fragment>
					<source srcSet={webPImage} type={"image/webp"} />
					<source srcSet={src} />
				</React.Fragment>
			) : (
				""
			)}
			<img
				src={src}
				alt={alt}
				title={alt}
				className={
					!hideClassFromImage
						? `resimage ${className ? className : ""}`
						: ""
				}
				aria-label={alt}
			/>
		</picture>
	)
}

export default Image
