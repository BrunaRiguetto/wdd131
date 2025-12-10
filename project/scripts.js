// -----------------------------
// HOME DATA (REAL PROPERTIES)
// -----------------------------
const homes = [
    {
        id: 1,
        name: "Two-story House",
        price: 520000,
        image: "images/londrina-casa-assobradada01.webp",
        description: "Beautiful two-story house with 3 bedrooms, including 1 suite. Located in Londrina – PR."
    },
    {
        id: 2,
        name: "Townhouse in West Region",
        price: 280000,
        image: "images/londrina-casa-geminada01.webp",
        description: "Townhouse with 3 bedrooms in the Catuai Neighborhood, West Region of Londrina – PR."
    },
    {
        id: 3,
        name: "Townhouse in South Region",
        price: 490000,
        image: "images/londrina-casa-geminada02.webp",
        description: "New semi-detached home for sale with 3 bedrooms, including 1 suite. South Region of Londrina – PR."
    }
];


// -----------------------------
// FEATURED HOMES (Home Page)
// -----------------------------
const featuredContainer = document.getElementById("featured-container");

// Only run if the container exists on the page
if (featuredContainer) {
    featuredContainer.innerHTML = homes
        .map(home => `
            <div class="home-card">
                <img src="${home.image}" loading="lazy" alt="${home.name}">
                <h3>${home.name}</h3>
                <p>${home.description}</p>
                <p><strong>R$ ${home.price.toLocaleString('pt-BR')}</strong></p>
            </div>
        `)
        .join("");
}


// -----------------------------
// HOMES PAGE LIST
// -----------------------------
const homesContainer = document.getElementById("homes-container");

if (homesContainer) {
    homesContainer.innerHTML = homes
        .map(home => `
            <div class="home-card">
                <img src="${home.image}" loading="lazy" alt="${home.name}">
                <h3>${home.name}</h3>
                <p>${home.description}</p>
                <p><strong>R$ ${home.price.toLocaleString('pt-BR')}</strong></p>
            </div>
        `)
        .join("");
}


// -----------------------------
// CONTACT FORM + LOCAL STORAGE
// -----------------------------
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        if (name.length < 2) {
            alert("Please enter your full name.");
            return;
        }

        // Save user name for greeting
        localStorage.setItem("lastUser", name);

        // Confirmation message
        document.getElementById("savedMessage").textContent = 
            `Thanks, ${name}! Your message has been received.`;

        form.reset();
    });

    // Greeting if user has visited before
    const lastUser = localStorage.getItem("lastUser");
    if (lastUser) {
        document.getElementById("savedMessage").textContent = 
            `Welcome back, ${lastUser}!`;
    }
}
