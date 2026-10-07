const dialog = document.getElementById('poster-dialog');
const image = document.getElementById('full-poster');
document.querySelectorAll('[data-poster]').forEach(button => button.addEventListener('click', () => {
  image.src = button.dataset.poster;
  image.alt = button.dataset.caption;
  document.getElementById('poster-caption').textContent = button.dataset.caption;
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.getElementById('year').textContent = new Date().getFullYear();
