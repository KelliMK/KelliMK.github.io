
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

function toggleFinishedDescription(n) {
	showFinishedDescription(dropFinishedDescription += n, finishedSlideIndex);
}

function plusFinishedDivs(n) {
	showFinishedDivs(finishedSlideIndex += n);
	showFinishedDescription(dropFinishedDescription, finishedSlideIndex);
}

function showFinishedDescription(x, n) {
	if (x % 4 == 4) {
		document.getElementById("finished-description").innerHTML = null;
	} else if (n % 4 == 1) {
		document.getElementById("finished-description").innerHTML = "a clock";
	} else if (n % 4 == 2) {
		document.getElementById("finished-description").innerHTML = "a drum kit";
	} else if (n % 4 == 3) {
		document.getElementById("finished-description").innerHTML = "A Fullstack Review Website for programming languages";
	} else if (n % 4 == 0) {
		document.getElementById("finished-description").innerHTML = "my dream job";
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
	if (x % 2 == 1) {
		if (n % 2 == 0) {
			document.getElementById("current-description").innerHTML = "I'm making a text adventure";
		} else if (n % 2 == 1) {
			document.getElementById("current-description").innerHTML = "I'm making an idle game in Java";
		}
	} else if (x % 2 == 0) {
		document.getElementById("current-description") = null;
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