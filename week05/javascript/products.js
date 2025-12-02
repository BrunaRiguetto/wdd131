// Provided product array (must match the assignment exactly)
const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Coltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("#product-select");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
  });
});
