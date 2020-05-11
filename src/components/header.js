import { Link } from "gatsby"
import React from "react"

// import GitHubIcon from '@material-ui/icons/GitHub';

const Header = props => (
  <header
    className={"header"}
  >
    <div
      className={"fixedcontainer row"}
    >
      <div className={"col-3 headerleft"}>
        <Link to={"/"} title={"Home"}>
          <div className={"header-logo"}>
            DK
          </div>
        </Link>
      </div>
      <div className={"col-9 headerright"}>
        <div className={"linkscontainer"}>
          <Link to={"/work"} to={"My Work"} className={"headerlink"}>
            Work
          </Link>
          <Link to={"/about"} to={"About Me"} className={"headerlink"}>
            About
          </Link>
          <Link to={"/contact"} to={"Contact"} className={"headerlink"}>
            Contact
          </Link>
          {//<a href={"https://github.com/deve-sh"} target={"_blank"} rel={"noopener noreferrer"}>
          //             <GitHubIcon className={"headericon"} />
          //           </a>
          }
        </div>
      </div>
    </div>
  </header>
)

export default Header
