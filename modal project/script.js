'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const closeTheModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openTheModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', openTheModal);

closeModal.addEventListener('click', closeTheModal);

overlay.addEventListener('click', closeTheModal);

document.addEventListener('keydown', function (event) {
  console.log(event);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeTheModal();
  }
});
