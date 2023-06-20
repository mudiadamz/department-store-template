var form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log("Is the form is valid?", form.checkValidity())
});