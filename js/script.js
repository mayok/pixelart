const p = document.querySelectorAll('p');

Array.from(p).forEach(element => {
  element.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
  }, false);
});
