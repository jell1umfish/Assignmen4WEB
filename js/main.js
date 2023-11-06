
const backToTopBtn = document.getElementById('backToTopBtn');
window.onscroll = function() {
  if (window.scrollY >= 200) { // Show the button when the user scrolls down 200px
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

backToTopBtn.onclick = function() { // Smooth scroll to top when the button is clicked

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

let a = new Audio('mp3/kidcheer.mp3');
var accessor = document.getElementById('logopic', onclick(a.play()));

document.getElementById()
