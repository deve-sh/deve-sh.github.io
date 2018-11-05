/*
    File Containing all the javascript required for the website.
*/

var i=0;           // Counter Variable

function typeitout()       // Function to type out a string to the first element of the page.
{
	var str='Hey There!';

	if(i<str.length)
	{
		document.getElementById('typer').textContent+=str[i];
	}

	i++;
}

window.addEventListener('load',typeitout);

var y=setInterval(typeitout,100);    // Typing effect every 100 milliseconds.

function scrolldetector()  // Function performing all the scrolling related stuff.
{
	if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
	{

	}
	else
	{
		
	}
}

window.addEventListener('scroll',scrolldetector);  // Call the scrolldetector function every time the user scrolls.

function opennav()
{
	{
		document.getElementById('sidenav').style.width='100%';
	}
}

function closenav()
{
	document.getElementById('sidenav').style.width='0px';
}

function blessco(){
	var blessarray=[
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

	var randomnum=Math.floor(Math.random()*10);   // Random number.

	for(var i=0;i<document.getElementsByClassName('blesscont').length;i++)
	{
		document.getElementsByClassName('blesscont')[i].innerHTML=blessarray[randomnum];
	}
}

window.addEventListener('load',blessco);