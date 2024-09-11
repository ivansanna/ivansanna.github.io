// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo a");
    
    logo.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = 'index.html';  // Change to main landing page
    });

    // Add other functionality for buttons if needed
});
