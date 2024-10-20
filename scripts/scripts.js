document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
    
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
