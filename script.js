console.log('Welcome to Vandalorant!')

document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading screen
    var loadingScreen = document.getElementById("loading-screen");
    var content = document.getElementById("content");

    // Simulate content loading with a timeout (you can replace this with actual loading logic)
    setTimeout(function() {
        loadingScreen.style.display = "none"; // Hide loading screen
        content.style.display = "block"; // Show content
    }, 2250); // Adjust the delay as needed
});

//reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//alert
// Add event listener to all <a> tags with the class 'stock'
document.querySelectorAll('a.stock').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior if needed
        alert('Sorry, the following skin is out of stock. Please select another. 😔');
    });
});
