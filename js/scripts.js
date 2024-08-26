// Função para validar o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Todos os campos são obrigatórios.');
        event.preventDefault(); // Impede o envio do formulário
    }
});

// Função para adicionar itens ao carrinho
let cartCount = 0;
document.getElementById('add-to-cart').addEventListener('click', function() {
    cartCount++;
    document.getElementById('cart-status').innerText = `Carrinho: ${cartCount} itens`;
});

// scripts.js

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// Inicializa o carrossel
showSlide(slideIndex);

// Opcional: Adicionar navegação automática
setInterval(() => {
    moveSlide(1);
}, 5000); // Altera o slide a cada 5 segundos



let currentSlideIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-slide'); // Seleciona todos os slides
const totalSlides = slides.length; // Total de slides

// Função para mostrar o slide específico
function showSlide(index) {
    // Certifica-se de que o índice esteja dentro do intervalo válido
    if (index >= totalSlides) {
        currentSlideIndex = 0; // Volta para o primeiro slide
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1; // Vai para o último slide
    } else {
        currentSlideIndex = index;
    }

    // Ajusta a posição do carrossel para mostrar o slide atual
    const offset = -currentSlideIndex * 100; // Calcula o deslocamento em porcentagem
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Função para mover os slides
function moveSlide(step) {
    showSlide(currentSlideIndex + step); // Atualiza o índice do slide atual
}

// Inicializa o carrossel mostrando o primeiro slide
showSlide(currentSlideIndex);

// Se você deseja adicionar navegação automática, você pode descomentar o seguinte código:
// setInterval(() => moveSlide(1), 3000); // Avança o slide a cada 3 segundos

