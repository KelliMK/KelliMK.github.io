
<!-- Collapsible script -->
const coll = document.getElementsByClassName("collapsible");
let i = 0;

for (i; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("activelist");
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

function myFunction() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

<!-- Slideshow or Image Carosoul script -->

let finishedSlideIndex = 1;
let dropFinishedDescription = 0;
showFinishedDivs(finishedSlideIndex);
showFinishedDescription(dropFinishedDescription, finishedSlideIndex)

function toggleFinishedDescription() {
	++dropFinishedDescription;
	showFinishedDescription(dropFinishedDescription, finishedSlideIndex);
}

function plusFinishedDivs(n) {
	showFinishedDivs(finishedSlideIndex += n);
	showFinishedDescription(dropFinishedDescription, finishedSlideIndex);
}

function showFinishedDescription(x, n) {
	if (n % 4 == 1) {
		document.getElementById("slide-text-finished").innerHTML = "JavaScript Clock";
		if (x % 2 == 1) {
			document.getElementById("finished-description").innerHTML = "<p class=\"description\">A clock whose cogs are built entirely out of JavaScript</p>";
		} else if (x % 2 == 0) {
			document.getElementById("finished-description").innerHTML = null;
		}
	} else if (n % 4 == 2) {
		document.getElementById("slide-text-finished").innerHTML = "JavaScript Drum Machine";
		if (x % 2 == 1) {
			document.getElementById("finished-description").innerHTML = "<p class=\"description\">A 'drum kit' the user can play with their keyboard</p>";
		} else if (x % 2 == 0) {
			document.getElementById("finished-description").innerHTML = null;
		}
	} else if (n % 4 == 3) {
		document.getElementById("slide-text-finished").innerHTML = "Chop Clock Cooking App";
		if (x % 2 == 1) {
			document.getElementById("finished-description").innerHTML = "<p class=\"description\">A web based application that helps you organize meals</p>";
		} else if (x % 2 == 0) {
			document.getElementById("finished-description").innerHTML = null;
		}
	} else if (n % 4 == 0) {
		document.getElementById("slide-text-finished").innerHTML = "Simple Blob Game";
		if (x % 2 == 1) {
			document.getElementById("finished-description").innerHTML = "<p class=\"description\">A game where the player picks up some blobs and puts them in a fountain</p>";
		} else if (x % 2 == 0) {
			document.getElementById("finished-description").innerHTML = null;
		}

	}
}

function showFinishedDivs(n) {
	let j;
	let y = document.getElementsByClassName("finished-slides");
	if (n > y.length) {finishedSlideIndex = 1}
		if (n < 1) {finishedSlideIndex = y.length} ;
	for (j = 0; j < y.length; j++) {
		y[j].style.display = "none";
	}
	y[finishedSlideIndex-1].style.display = "block";
}



let currentSlideIndex = 1;
let dropCurrentDescription = 0;
showCurrentDivs(currentSlideIndex);
showCurrentDescription(dropCurrentDescription, currentSlideIndex)

function toggleCurrentDescription() {
	dropCurrentDescription = dropCurrentDescription + 1;
	showCurrentDescription(dropCurrentDescription, currentSlideIndex);
}

function plusCurrentDivs(n) {
	showCurrentDivs(currentSlideIndex += n);
	showCurrentDescription(dropCurrentDescription, currentSlideIndex);
}

function showCurrentDescription(x, n) {
	if (n % 2 == 0) {
		document.getElementById("slide-text-current").innerHTML = "Java Idle Game";
		if (x % 2 == 1) {
			document.getElementById("current-description").innerHTML = "<p class=\"description\">An idle game hosted in the Java console</p>";
		} else if (x % 2 == 0) {
			document.getElementById("current-description").innerHTML = null;
		}
	} else if (n % 2 == 1) {
		document.getElementById("slide-text-current").innerHTML = "Nameless, a text adventure";
		if (x % 2 == 1) {
			document.getElementById("current-description").innerHTML = "<p class=\"description\">A text adventure built in TADS 3, takes place inside an ethereal mansion</p>";
		} else if (x % 2 == 0) {
			document.getElementById("current-description").innerHTML = null;
		}
	}
}

function showCurrentDivs(n) {
	let k;
	let z = document.getElementsByClassName("current-slides");
	if (n > z.length) {currentSlideIndex = 1}
		if (n < 1) {currentSlideIndex = z.length} ;
	for (k = 0; k < z.length; k++) {
		z[k].style.display = "none";
	}
	z[currentSlideIndex-1].style.display = "block";
}

const modal = document.getElementById('contact-me');
const modalBtn = document.getElementById("contact-me-button");
let modalSpan = document.getElementsByClassName("close")[0];
modalBtn.onclick = function() {
	modal.style.display = "block";
}

modalSpan.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
