const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;
let totalItems = items.length;
let autoSlideInterval;

// Função para atualizar o carrossel
function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula a posição
  carousel.style.transform = `translateX(${offset}%)`;
}

// Função para ir para o próximo item
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Função para ir para o item anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}


function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}


function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Eventos de controle pelos botões
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Pausar o carrossel ao passar o mouse sobre ele
document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoSlide);


startAutoSlide();
