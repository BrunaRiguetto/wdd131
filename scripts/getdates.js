// Set copyright year 
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display last modified date
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastMod}`;
