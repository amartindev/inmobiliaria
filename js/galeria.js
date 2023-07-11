const sections = Array.from(document.querySelectorAll('.galeria .section'));
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentPage = 0;

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    sections[currentPage].classList.remove('active');
    currentPage--;
    sections[currentPage].classList.add('active');
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < sections.length - 1) {
    sections[currentPage].classList.remove('active');
    currentPage++;
    sections[currentPage].classList.add('active');
  }
});
