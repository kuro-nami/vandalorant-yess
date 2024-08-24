document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading screen
    var loadingScreen = document.getElementById("loading-screen");
    var content = document.getElementById("content");

    // Simulate content loading with a timeout (you can replace this with actual loading logic)
    setTimeout(function() {
        loadingScreen.style.display = "none"; // Hide loading screen
        content.style.display = "block"; // Show content
    }, 2500); // Adjust the delay as needed
});
