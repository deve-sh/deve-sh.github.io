import { Link } from "gatsby"
import React from "react"

import Icon from "./icon"

const Header = props => (
  <header className={"header"}>
    <div className={"fixedcontainer row"}>
      <div className={"col-3 headerleft"}>
        <Link to={"/"} title={"Home"}>
          <div className={"header-logo"}>DK</div>
        </Link>
      </div>
      <div className={"col-9 headerright"}>
        <div className={"linkscontainer"}>
          <Link to={"/work"} title={"My Work"} className={"headerlink"}>
            Work
          </Link>
          <Link to={"/about"} title={"About Me"} className={"headerlink"}>
            About
          </Link>
          <Link to={"/contact"} title={"Contact"} className={"headerlink"}>
            Contact
          </Link>
          {
            <a
              href={"https://github.com/deve-sh"}
              target={"_blank"}
              className={"headericon"}
              rel={"noopener noreferrer"}
            >
              <Icon className={"fab fa-github fa-lg"} title={"Github Profile"} />
            </a>
          }
        </div>
      </div>
    </div>
  </header>
)

export default Header
