// home page picture carousel 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}





// navbar dropdowns
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const parentLink = dropdown.querySelector('a');
      const dropdownContent = dropdown.querySelector('.dropdown-content');

      // Toggle dropdown on click
      parentLink.addEventListener('click', (e) => {
          e.preventDefault();
          const isVisible = dropdownContent.style.display === 'block';
          closeAllDropdowns(); // Close other dropdowns
          dropdownContent.style.display = isVisible ? 'none' : 'block';
      });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
          closeAllDropdowns();
      }
  });

  function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none';
      });
  }
});




//navbar menu button for smaller screens
document.getElementById('menu-icon').addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});






//emailsjs 
