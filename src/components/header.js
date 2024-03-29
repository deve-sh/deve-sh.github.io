import { Link } from "gatsby"
import React, { useRef } from "react"

import Icon from "./icon"

const Header = props => {
  const sidenavRef = useRef(null)

  const openSideNav = () => {
    if (sidenavRef.current) {
      sidenavRef.current.style.width = "100%"
    }
  }

  const closeSideNav = () => {
    if (sidenavRef.current) {
      sidenavRef.current.style.width = "0"
    }
  }

  const icons = ["fas fa-heart", "fas fa-coffee", "fas fa-cookie"]

  const selectIcon = () => {
    return icons[Math.floor(Math.random() * icons.length)]
  }

  return (
    <header className={"header"}>
      <div className={"fixedcontainer row"}>
        <div className={"col-3 headerleft"}>
          <Link to={"/"} title={"Home"}>
            <div className={"header-logo"}>DK</div>
          </Link>
        </div>
        <div className={"col-9 headerright"}>
          <div className={"linkscontainer"}>
            <a
              href={"https://blog.devesh.tech"}
              title={"My Blog - Hobnobs"}
              className={"headerlink"}
              aria-label={"My Blog - Hobnobs"}
            >
              Blog
            </a>
            <Link
              to={"/work"}
              title={"My Work"}
              className={"headerlink"}
              aria-label={"My Work"}
            >
              Work
            </Link>
            <Link
              to={"/about"}
              title={"About Me"}
              className={"headerlink"}
              aria-label={"About Me"}
            >
              About
            </Link>
            <Link
              to={"/resume"}
              title={"My Resume"}
              className={"headerlink"}
              aria-label={"My Resume"}
            >
              Resume
            </Link>
            <Link
              to={"/contact"}
              title={"Contact"}
              className={"headerlink"}
              aria-label={"Contact"}
            >
              Contact
            </Link>
          </div>
          <div className={"sociallinks"}>
            <a
              href={"https://github.com/deve-sh"}
              target={"_blank"}
              className={"headericon"}
              rel={"noopener noreferrer"}
              title={"Github Profile"}
              aria-label={"Github Profile"}
            >
              <Icon
                className={"fab fa-github fa-lg"}
                title={"Github Profile"}
              />
            </a>
            <a
              href={"https://www.linkedin.com/in/dev-esh/"}
              target={"_blank"}
              className={"headericon"}
              rel={"noopener noreferrer"}
              title={"LinkedIn Profile"}
              aria-label={"LinkedIn Profile"}
            >
              <Icon
                className={"fab fa-linkedin-in fa-lg"}
                title={"LinkedIn Profile"}
              />
            </a>
          </div>
          <div className={"sidenavopener"}>
            <a
              className={"sidenavopener-icon"}
              href={"#top"}
              title={"Open Sidenav"}
              aria-label={"Open Sidenav"}
              onClick={event => {
                event.preventDefault()
                openSideNav()
              }}
            >
              <Icon className={"fas fa-bars fa-lg"} title={"Open Sidenav"} />
            </a>
          </div>
        </div>
      </div>

      {/* Sidenav */}
      <div className="sidenav" ref={sidenavRef}>
        <a
          href="#"
          className="sidenavcloser"
          onClick={event => {
            event.preventDefault()
            closeSideNav()
          }}
        >
          &times;
        </a>
        <Link
          to={"/"}
          title={"Home"}
          className={"sidenav-link"}
          aria-label={"Home"}
          onClick={closeSideNav}
        >
          Home
        </Link>
        <a
          href={"https://blog.devesh.tech"}
          title={"My Blog - Hobnobs"}
          className={"sidenav-link"}
          aria-label={"My Blog - Hobnobs"}
          onClick={closeSideNav}
        >
          Blog
        </a>
        <Link
          to={"/work"}
          title={"My Work"}
          className={"sidenav-link"}
          aria-label={"My Work"}
          onClick={closeSideNav}
        >
          Work
        </Link>
        <Link
          to={"/about"}
          title={"About Me"}
          className={"sidenav-link"}
          aria-label={"About Me"}
          onClick={closeSideNav}
        >
          About
        </Link>
        <Link
          to={"/resume"}
          title={"Resume"}
          className={"sidenav-link"}
          aria-label={"Resume"}
          onClick={closeSideNav}
        >
          Resume
        </Link>
        <Link
          to={"/contact"}
          title={"Contact"}
          className={"sidenav-link"}
          aria-label={"Contact"}
          onClick={closeSideNav}
        >
          Contact
        </Link>
        <br />
        <div className={"sidenav-separator-dots"}>
          <div className={"dot"} />
          <div className={"dot"} />
          <div className={"dot"} />
        </div>
        <br />
        <div className={"sidenav-message"}>
          With <Icon className={"footer-icon " + selectIcon()} title={"Love"} />{" "}
          from Devesh.
        </div>
      </div>
    </header>
  )
}

export default Header
