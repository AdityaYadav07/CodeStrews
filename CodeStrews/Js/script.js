document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Simulating form submission success
    const formStatus = document.getElementById('form-status');
    formStatus.textContent = "Thank you for your message!";
    formStatus.style.color = "green";

    // Optionally clear the form
    document.getElementById('contactForm').reset();
});
