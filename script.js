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


 // Variables to track the previous scroll position
 let lastScrollTop = 0;
 const header1 = document.querySelector('.header1');

 // Debugging: Ensure the nav element is selected correctly
 console.log('Nav element:', header1);

 window.addEventListener('scroll', function() {
     // Current scroll position
     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

     // Debugging: Log the current scroll position
     console.log('Current scroll position:', currentScroll);

     // If scrolling down
     if (currentScroll > lastScrollTop) {
         // Hide the entire nav bar
         header1.style.height = `-80px`; // Use the nav's height to hide it completely
         // Debugging: Log the new top value
         console.log('Hiding nav, new top:', header1.style.top);
     } else {
         // Show the nav bar
         header1.style.top = "0";
         // Debugging: Log the new top value
         console.log('Showing nav, new top:', header1.style.top);
     }

     // Update the last scroll position
     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

     // Debugging: Log the last scroll position
     console.log('Last scroll position:', lastScrollTop);
 });



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