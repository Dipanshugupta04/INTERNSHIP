const slides = document.querySelectorAll('.slide')
const slideDots = document.querySelector('.slide-dots')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-content')
const closeButton = document.querySelector('.close')
const galleryItems = document.querySelectorAll('.gallery-item img')

let currentSlide = 0
let slideInterval

const createDots = () => {
    slides.forEach((_, index) => {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        if (index === 0) dot.classList.add('active')
        dot.addEventListener('click', () => goToSlide(index))
        slideDots.appendChild(dot)
    })
}

const updateDots = () => {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide)
    })
}

const goToSlide = (n) => {
    slides[currentSlide].classList.remove('active')
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.add('active')
    updateDots()
}

const nextSlide = () => goToSlide(currentSlide + 1)
const prevSlide = () => goToSlide(currentSlide - 1)

const startSlideshow = () => {
    if (slideInterval) {
        clearInterval(slideInterval)
    }
    slideInterval = setInterval(nextSlide, 5000)
}

prevButton.addEventListener('click', () => {
    prevSlide()
    startSlideshow()
})

nextButton.addEventListener('click', () => {
    nextSlide()
    startSlideshow()
})

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('active')
        modalImg.src = img.src
    })
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('active')
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active')
    }
})

createDots()
startSlideshow()

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active')
    }
}) 