//Navigation

    // Toggle Mobile Menu
    function toggleMenu() {
        const navbarMenu = document.querySelector('.navbar ul');
        navbarMenu.classList.toggle('active');
      }
  
      // Sticky Navbar Change on Scroll
      const navbar = document.querySelector('.navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });


// IntersectionObserver to detect when section is in view
const observerOptions = {
    root: null, // observing relative to the viewport
    rootMargin: "0px",
    threshold: 0.2// trigger when 20% of the element is visible
};

const sectionsToReveal = document.querySelectorAll('.reveal');

// Create the observer
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'revealed' class when the section is in view
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Stop observing after the animation
        }
    });
}, observerOptions);

// Start observing each section
sectionsToReveal.forEach(section => {
    revealObserver.observe(section);
});



// Check if a theme is stored in localStorage, and apply it
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

// Function to toggle between light and dark mode
function toggleTheme() {
    document.body.classList.toggle('light-mode'); // Toggle the 'light-mode' class

    // Save the theme preference in localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}


