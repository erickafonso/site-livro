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

