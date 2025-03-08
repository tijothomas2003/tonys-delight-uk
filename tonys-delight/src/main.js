// Array of background images for the hero section
const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
]

// Get the hero section
const heroSection = document.querySelector('.hero')

// Hero background image rotation
if (heroSection) {
  let currentImageIndex = 0

  function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url(${heroImages[currentImageIndex]})`
    currentImageIndex = (currentImageIndex + 1) % heroImages.length
  }

  // Preload images to avoid flickering
  heroImages.forEach((image) => {
    const img = new Image()
    img.src = image
  })

  // Set initial background image
  changeBackgroundImage()

  // Change the background image every 3 seconds
  setInterval(changeBackgroundImage, 3000)
}

// Fetch and insert the Values section
const valuesPlaceholder = document.getElementById('values-placeholder')

if (valuesPlaceholder) {
  fetch('/values.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to load values.html')
      }
      return response.text()
    })
    .then((data) => {
      // Insert the content of values.html into the placeholder
      valuesPlaceholder.innerHTML = data
    })
    .catch((error) => {
      console.error('Error loading values.html:', error)
      // Optionally, display a fallback message or content
      valuesPlaceholder.innerHTML =
        '<p>Failed to load values. Please try again later.</p>'
    })
}

// Fade-in animation for scrolling text
const scrollItems = document.querySelectorAll('.scroll-item')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
      }
    })
  },
  {
    threshold: 0.5, // Trigger when 50% of the element is visible
  }
)

scrollItems.forEach((item) => {
  observer.observe(item)
})
