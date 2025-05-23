const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;
function slider(index) {
	const banner_image = document.getElementById("banner-image");
	const tag_line_element = document.getElementById("tag-line");
	const dots = document.querySelectorAll(".dot");

	const slide = slides[index];
	banner_image.setAttribute("src", `./assets/images/slideshow/${slides[currentIndex].image}`);
	banner_image.setAttribute("alt", slide.tagLine.replace(/<[^>]+>/g, ""));
	tag_line_element.innerHTML = slide.tagLine;

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === index);
	});
}

function generateDots() {
	const container = document.getElementById("dots_container");
	slides.forEach((_, i) => {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dot.addEventListener("click", () => {
			currentIndex = i;
			slider(currentIndex);
		});

		container.appendChild(dot);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	generateDots();
	slider(currentIndex);

	document.getElementById("arrow_right").addEventListener("click", () => {
		currentIndex = (currentIndex + 1) % slides.length;
		slider(currentIndex);
	});

	document.getElementById("arrow_left").addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		slider(currentIndex);

	});
});