const mobileMenu = document.getElementById('mobile-menu')
const navUl = document.querySelector('.nav ul')

mobileMenu.addEventListener('click', () => {
  navUl.classList.toggle('active')
})
// Array of background images
const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

// Get the hero section
const heroSection = document.querySelector('.hero')

// Function to change the background image
let currentImageIndex = 0
function changeBackgroundImage() {
  // Update the background image
  heroSection.style.backgroundImage = `url(${heroImages[currentImageIndex]})`

  // Move to the next image
  currentImageIndex = (currentImageIndex + 1) % heroImages.length
}

// Change the background image every 3 seconds
setInterval(changeBackgroundImage, 3000)

// Set the initial background image
changeBackgroundImage()
// Add flip effect to cards
const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped')
  })
})
