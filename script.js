let slideIndex = 1;
let timer;

// Initial call to start the slideshow
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    // If n is greater than the number of slides, reset to 1
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // If n is less than 1, set it to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";  
    
    // Clear previous timer and set a new one
    clearTimeout(timer);
    timer = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 1500); // Change slide every 5 seconds
}

function plusSlides(n) {
    clearTimeout(timer); // Clear the timer when navigating manually
    showSlides(slideIndex += n);
}

function minusSlides() {
    clearTimeout(timer); // Clear the timer when navigating manually
    showSlides(slideIndex -= 1);
}






  // Variables to track the previous scroll position
  let lastScrollTop2 = 0;
  const nav = document.querySelector('nav');

  // Debugging: Ensure the nav element is selected correctly
  console.log('Nav element:', nav);

  window.addEventListener('scroll', function() {
      // Current scroll position
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Debugging: Log the current scroll position
      console.log('Current scroll position:', currentScroll);

      // If scrolling down
      if (currentScroll > lastScrollTop2) {
          // Hide the entire nav bar
          nav.style.top = `-${nav.offsetHeight}px`; // Use the nav's height to hide it completely
          // Debugging: Log the new top value
          console.log('Hiding nav, new top:', nav.style.top);
      } else {
          // Show the nav bar
          nav.style.top = "0";
          // Debugging: Log the new top value
          console.log('Showing nav, new top:', nav.style.top);
      }

      // Update the last scroll position
      lastScrollTop2 = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

      // Debugging: Log the last scroll position
      console.log('Last scroll position:', lastScrollTop2);
  });

  function changeLanguage(lang) {
    if (lang === 'en') {
        window.location.href = "index_en.html"; // English version
    } else if (lang === 'de') {
        window.location.href = "index_de.html"; // German version
    }
}



