//Navigation

// Toggle Mobile Menu
function toggleMenu() {
  const navbarMenu = document.querySelector(".navbar ul");
  navbarMenu.classList.toggle("active");
}

// Sticky Navbar Change on Scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// IntersectionObserver to detect when section is in view
const observerOptions = {
  root: null, // observing relative to the viewport
  rootMargin: "0px",
  threshold: 0.2, // trigger when 20% of the element is visible
};

const sectionsToReveal = document.querySelectorAll(".reveal");

// Create the observer
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the 'revealed' class when the section is in view
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target); // Stop observing after the animation
    }
  });
}, observerOptions);

// Start observing each section
sectionsToReveal.forEach((section) => {
  revealObserver.observe(section);
});

// Check if a theme is stored in localStorage, and apply it
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

// Function to toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle("light-mode"); // Toggle the 'light-mode' class

  // Save the theme preference in localStorage
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

//Typing effect

class TypingEffect {
  constructor(element, texts, speed = 100, delay = 2000) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.delay = delay;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.speed;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = this.delay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typing effect
document.addEventListener("DOMContentLoaded", () => {
  const typedTextElement = document.getElementById("typed-text");
  const texts = ["Sudip Shrestha", "Frontend Developer", "Backend Developer"];

  new TypingEffect(typedTextElement, texts);
});

    // Select the custom cursor element
    const cursor = document.querySelector('.custom-cursor');
    
    // Update the position of the cursor on mousemove
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;

      // Create cursor trail effect
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      document.body.appendChild(trail);

      trail.style.left = `${e.pageX - trail.offsetWidth / 2}px`;
      trail.style.top = `${e.pageY - trail.offsetHeight / 2}px`;

      // Remove trail after animation
      setTimeout(() => {
        trail.remove();
      }, 300);

 
    });

    // Interactive effects on hover for elements with class "hover-grow", "hover-spin", "hover-bounce"
    const hoverElements = document.querySelectorAll('.hover-grow, .hover-spin, .hover-bounce');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
      });
    });
