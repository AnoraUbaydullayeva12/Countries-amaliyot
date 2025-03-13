// const darkModeToggle = document.getElementById('darkModeToggle');
// // const body = document.body;

// // button.classList.add("dark-mode");

// // darkModeToggle.addEventListener('click', () =>{
// //     if (body.classList.contains("dark-mode")) {
// //         localStorage.setItem("dark-mode", "enabled");
// //     } else {
// //         localStorage.setItem("dark-mode", "disabled");
// //     }
// // })

// function darkModeToggle(){
//     body.style.background = 'white';
// }

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}

function checkDarkMode() {
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
}


// document.addEventListener("DOMContentloaded", () =>{
//     const input = document.getElementById('search');
// function 
// })

let allCountries = [];

// Fetch country data
async function fetchCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        allCountries = await response.json();
        displayCountries(allCountries);
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

// Display all countries
function displayCountries(countries) {
    const countryList = document.getElementById("countryList");
    countryList.innerHTML = countries.map(country => `
        <div class="card dark-mode">
            <img src="${country.flags.png}" alt="${country.name.common} Flag">
            <h3>${country.name.common}</h3>
        </div>
    `).join("");
}

// Search function
function searchCountries() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredCountries = allCountries.filter(country =>
        country.name.common.toLowerCase().includes(query)
    );
    displayCountries(filteredCountries);
}

// Load countries on page load
fetchCountries();