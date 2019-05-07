function opennav()
{
	document.getElementById('sidenav').style.width='100%';
}

function closenav()
{
	document.getElementById('sidenav').style.width='0px';
}

function blessco(){
	let blessarray=[
		"<i class='far fa-heart fa-lg'></i>",
		"<i class='fas fa-heart fa-lg'></i>",
		"<i class='fas fa-coffee fa-lg'></i>",
		"<i class='fas fa-glass-martini-alt fa-lg'></i>",
		"<i class='fas fa-beer fa-lg'></i>",
		"<i class='fas fa-birthday-cake fa-lg'></i>",
		"<i class='fas fa-wine-glass-alt fa-lg'></i>",
		"<i class='fas fa-cocktail fa-lg'></i>",
		"<i class='fas fa-cookie fa-lg'></i>",
		"<i class='fas fa-apple-alt fa-lg'></i>"
	];

	let randomnum=Math.floor(Math.random()*10);   // Random number.

	for(let i=0;i<document.getElementsByClassName('blesscont').length;i++)
	{
		document.getElementsByClassName('blesscont')[i].innerHTML=blessarray[randomnum];
	}
}

window.addEventListener('load',blessco);

// JS Object containing all the pinned repos.

let otherPinnedRepos = {
	Pollster : {
		url: "https://github.com/deve-sh/Pollster",
		description: "A Sexy Voting Web App!",
		language:"PHP"
	},
	"Regression-Analysis" : {
		url : "https://github.com/deve-sh/Regression-Analysis",
		description : "📈 A Python Library for Regression Analysis. Both Linear and Non - Linear.",
		language : "Python"
	},
	learnpython :{
		url : "https://github.com/deve-sh/learnpython",
		description : "🐍 A Website to learn Python basics as fast as possible!",
		language : "HTML"
	}
}

function repoFiller(){
	// Function to populate repos in work.html.

	let pinnedHTML = ``;

	for(let repo in otherPinnedRepos){
		if(otherPinnedRepos.hasOwnProperty(repo)){
			pinnedHTML += `<div class='repo'>
				<a href='${otherPinnedRepos[repo]["url"]}' target='_blank'>
					<div class='reponame'>
						${repo}
					</div>
				</a>
				<div class='repodesc'>
					${otherPinnedRepos[repo]["description"]}
				</div>
			</div>`;
		}
	}

	document.getElementById('repofiller').innerHTML = pinnedHTML;
}