const form = document.getElementById('comments');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newComment = event.target["new-comment-description"].value;
  const newP = document.createElement("p");
  newP.textContent = newComment;
  comments.append(newP)
  form.reset();
});
const comments = document.getElementById("comments-container");
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
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
  // Prevent the default submission of the form
  e.preventDefault();
  // Get the values input by the user in the form fields
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "web_dev") {
    // If the credentials are valid, show an alert box and reload the page
    alert("You have successfully logged in.");
    location.reload();
  } else {
    // Otherwise, make the login error message show (change its oppacity)
    loginErrorMsg.style.opacity = 1;
  }
})
