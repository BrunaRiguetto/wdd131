// Get current counter (or set to 0 if none)
let count = Number(localStorage.getItem("reviewCount")) || 0;

// Add 1 because the page was loaded after a submission
count++;

// Save the updated count
localStorage.setItem("reviewCount", count);

// Display it
document.getElementById("review-count").textContent = count;
