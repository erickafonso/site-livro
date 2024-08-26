function openGallery(chapterId) {
    const galleryFrame = document.getElementById('gallery-frame');
    const carouselContainer = document.getElementById('carousel-container');
    
    // Clear previous content
    carouselContainer.innerHTML = '';
    
    // Create and append the carousel for the selected chapter
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    carousel.id = chapterId;

    // Add carousel items (dummy example, replace with actual pages)
    const images = [];
    for (let i = 1; i <= 10; i++) {
        const img = document.createElement('img');
        img.src = `img/pagina${i}.png`; // Replace with actual image URLs
        img.alt = `Página ${i}`;
        images.push(img);
    }

    const carouselImages = document.createElement('div');
    carouselImages.classList.add('carousel-images');
    images.forEach(image => carouselImages.appendChild(image));
    carousel.appendChild(carouselImages);

    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-button', 'prev');
    prevButton.textContent = '❮';
    prevButton.onclick = () => moveSlide(-1, chapterId);
    carousel.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-button', 'next');
    nextButton.textContent = '❯';
    nextButton.onclick = () => moveSlide(1, chapterId);
    carousel.appendChild(nextButton);

    carouselContainer.appendChild(carousel);

    galleryFrame.style.display = 'flex';
}

function closeGallery() {
    document.getElementById('gallery-frame').style.display = 'none';
}

function moveSlide(step, carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
    const currentTransform = getComputedStyle(carousel.querySelector('.carousel-images')).transform;
    const currentIndex = currentTransform === 'none' ? 0 : Math.abs(parseInt(currentTransform.split(',')[4]) / slideWidth);
    
    let newIndex = (currentIndex + step + totalSlides) % totalSlides;
    const newTransformValue = `translateX(${-newIndex * slideWidth}px)`;
    
    carousel.querySelector('.carousel-images').style.transform = newTransformValue;
}
