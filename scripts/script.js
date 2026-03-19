// Pets Slider
const petsContainer = document.querySelector('.pets-cards-wrapper');
const prevBtn = document.querySelector('.arrow-prev');
const nextBtn = document.querySelector('.arrow-next');

const scrollAmount = () => {
  const card = document.querySelector('.pet-card');
  if (card) {
    return card.offsetWidth + 20; // card width + gap
  }
  return 300;
};

const scrollToPrev = () => {
  if (petsContainer) {
    petsContainer.scrollBy({
      left: -scrollAmount(),
      behavior: 'smooth'
    });
  }
};

const scrollToNext = () => {
  if (petsContainer) {
    petsContainer.scrollBy({
      left: scrollAmount(),
      behavior: 'smooth'
    });
  }
};

if (prevBtn) {
  prevBtn.addEventListener('click', scrollToPrev);
}

if (nextBtn) {
  nextBtn.addEventListener('click', scrollToNext);
}
