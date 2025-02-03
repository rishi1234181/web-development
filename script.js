// Hero Section - Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlides() {
    slides.forEach((img, index) => {
        img.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);
showSlides();

// Search Bar Functionality
document.querySelector(".search-bar button").addEventListener("click", function () {
    let query = document.querySelector(".search-bar input").value;
    alert("You searched for: " + query);
});

// Add to Cart Button
document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Added to Cart!");
    });
});
