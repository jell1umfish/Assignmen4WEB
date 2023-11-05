
const backToTopBtn = document.getElementById('backToTopBtn');



backToTopBtn.onclick = function() { // Smooth scroll to top when the button is clicked
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
