import React from "react"

import Icon from "./icon"

const GithubCard = props => {
	return (
		<div className={"githubcard"}>
			<div className={"githubcard-top"}>
				<Icon className={"fas fa-book"} title={"Repository"} />
				<div className={"githubcard-top-name"}>
					<a
						href={props.repoLink}
						target={"_blank"}
						rel={"noopener noreferrer"}
						title={props.repoName + " - Repository On Github"}
					>
						{props.repoName}
					</a>
				</div>
			</div>
			<div className={"githubcard-desc"}>{props.repoDesc}</div>
			<div className={"githubcard-bottom"}>
				<div className={`languagecircle ${props.repoLang.toLowerCase()}`} />
				&nbsp;&nbsp;
				{props.repoLang}
			</div>
		</div>
	)
}

export default GithubCard
