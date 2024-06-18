/* js/scripts.js */
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a thank you message
    alert('Thank you, ' + name + '! Your message has been sent.');
});
