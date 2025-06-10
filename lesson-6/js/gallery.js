// STEP 1: Initialize and declare variables
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

/* STEP 2: Loop 5 times to create the <img> elements */
for (let i = 0; i < 5; i++) {
	/* STEP 3a: Create a new DOM node - an image element */
    const newImage = document.createElement('img');
	/* STEP 3b: Set the src attribute to be the path of one of the images inside the images folder, using setAttribute() */
	newImage.src = `images/pic${i + 1}.jpg`;
	// or can use newImage.setAttribute('src', `images/pic${i + 1}.jpg`);

	/* Append the new image element to the thumbBar div, named in STEP 1 */
	thumbBar.append(newImage);
	/* STEP 3c: Build event handler for each <img> */
	// newImage.addEventListener('click', changeImg);
}

/* STEP 4: Function to change the src of the main <img> */
function changeImg(event) {
	// Rewrite the src attribute of the .displayed-img element
	displayedImage.src = event.target.src;
	// let imgSrc = event.target.getAttribute('src');
	// displayedImage.setAttribute('src', imgSrc);
}

/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? Build a click handler on the parent element, and capture each target (and its attributes) from the event object */
thumbBar.addEventListener('click', function(event) {
	// event.target is the element that was clicked
	console.log(event.target.nodeName);
	// if the clicked element exists and is an image change the main image
	if (event.target && event.target.nodeName === "IMG") {
		changeImg(event);
	}
});

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
