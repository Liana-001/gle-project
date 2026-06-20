// Select the menu icon and nav links
const menuIcon: HTMLElement | null = document.querySelector('.menu-icon');
const navLinks: HTMLElement | null = document.querySelector('.nav-links');

// Add an event listener to the menu icon
if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    // Toggle the visibility of the nav links
    navLinks.classList.toggle('visible');
  });
}

// Select the read more link
const readMoreLink: HTMLElement | null = document.querySelector('.read-more');

// Add an event listener to the read more link
if (readMoreLink) {
  readMoreLink.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();
    // Scroll to the main section
    const mainSection: HTMLElement | null = document.querySelector('.main-section');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
// Select the image in the right section
const image: HTMLImageElement | null = document.querySelector('.right-section img');

if (image) {
  image.addEventListener('click', () => {
    // Toggle the visibility of the image
    image.classList.toggle('zoomed');
  });
}
