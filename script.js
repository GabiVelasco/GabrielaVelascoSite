let slideIndex = 0;
let timer;

// Initial call to start the slideshow
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Increment slideIndex
    slideIndex++;
    
    // If slideIndex is greater than the number of slides, reset to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // If slideIndex is less than 1, set it to the last slide
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";  
    
    // Clear previous timer and set a new one
    clearTimeout(timer);
    timer = setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function plusSlides(n) {
    clearTimeout(timer); // Clear the timer when navigating manually
    showSlides(slideIndex += n);
}

function minusSlides() {
    clearTimeout(timer); // Clear the timer when navigating manually
    showSlides(slideIndex -= 1);
}
