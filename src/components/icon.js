// Reusable Icon component

import React from "react"

const Icon = ({ className, title }) => {
  return (
    <i
      className={className || ""}
      aria-label={title || "Icon"}
      aria-hidden
      title={title || "Icon"}
    />
  )
}

export default Icon
