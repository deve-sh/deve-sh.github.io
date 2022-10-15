import React from "react"

const Image = ({
  src,
  alt,
  className,
  webPImage,
  loading,
  hideClassFromImage,
}) => {
  return (
    <picture className={`resimage ${className ? className : ""}`}>
      {webPImage ? (
        <>
          <source srcSet={webPImage} type={"image/webp"} />
          <source srcSet={src} />
        </>
      ) : (
        ""
      )}
      <img
        src={src}
        alt={alt}
        title={alt}
        loading={loading}
        className={
          !hideClassFromImage ? `resimage ${className ? className : ""}` : ""
        }
        aria-label={alt}
      />
    </picture>
  )
}

export default Image
