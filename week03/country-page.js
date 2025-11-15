/* Display current year*/
document.getElementById("currentyear").textContent = new Date().getFullYear();

/* Display the document's last modified date */ 
document.getElementById("lastModified").textContent = document.lastModified;

/* WEATHER: Static values (for now) */
const temperature = 8;     
const windSpeed = 10;      

/* Calculate wind chill */
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}

/* Calculate wind chill IF the conditions are valid */
let windChillOutput;

if (temperature <= 10 && windSpeed > 4.8) {
    const wc = calculateWindChill(temperature, windSpeed);
    windChillOutput = Math.round(wc) + " °C";
} else {
    windChillOutput = "N/A";
}

/* Display the wind chill result */
document.getElementById("windChill").textContent = windChillOutput;
