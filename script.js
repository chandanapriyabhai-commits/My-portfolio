// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents actual form submission

    // Collect values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bio = document.getElementById("bio").value;

    // Simple alert
    alert(`Thank you, ${name}!\nWe received your message: "${bio}"\nWe’ll contact you at ${email}.`);

    // Optionally clear form
    form.reset();
  });
});
