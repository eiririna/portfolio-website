const hamburger = document.getElementById('hamburger');
const rightHeader = document.getElementById('right_header');

hamburger.addEventListener('click',() => { rightHeader.classList.toggle('show'); });