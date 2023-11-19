document.addEventListener("DOMContentLoaded",function () {
	var topBar = document.getElementById('top-bar__input');
	var heroSection = document.getElementById('hero-section');

	window.onscroll = function () {
		// Get the bottom position of the hero section
		var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

		// Check if the page is scrolled past the hero section
		if (window.pageYOffset > heroBottom) {
			topBar.style.display = 'flex'; // Show the top bar
		} else {
			topBar.style.display = 'none'; // Hide the top bar
		}
	};
});
