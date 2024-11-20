// Function to populate the navigation menu
function populateNav(navId, data) {
    const navContainer = document.getElementById(navId);
    if (!navContainer) {
        console.error(`No element found with ID: ${navId}`);
        return;
    }

    // Clear any existing content in the nav container
    navContainer.innerHTML = '';

    // Create and append menu items
    data.forEach((item) => {  // Corrected parentheses for arrow function
        const menuItem = document.createElement("a");
        menuItem.classList.add("menu-item");
        menuItem.textContent = item.name;
        menuItem.href = item.url;  // Assuming each menu item has a 'url' property in JSON

        navContainer.appendChild(menuItem);
    });
}

// Function to populate the footer with links
function populateFooter(footerId, data) {
    const footerContainer = document.getElementById(footerId);
    if (!footerContainer) {
        console.error(`No element found with ID: ${footerId}`);
        return;
    }

    // Clear any existing content in the footer container
    footerContainer.innerHTML = '';

    // Create and append footer items
    data.forEach((item) => {  // Corrected parentheses for arrow function
        const footerItem = document.createElement("a");
        footerItem.classList.add("footer-item");
        footerItem.textContent = item.name;
        footerItem.href = item.url;  // Assuming each footer item has a 'url' property in JSON

        footerContainer.appendChild(footerItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data for the three navigation menus
    fetch("scripts/main-nav.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load main-nav.json: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            populateNav('main-nav', data);  // Populate the main-nav with data
        })
        .catch((error) => console.error("Error fetching main-nav:", error));

    fetch("scripts/secondary-nav.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load secondary-nav.json: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            populateNav('secondary-nav', data);  // Populate the secondary-nav with data
        })
        .catch((error) => console.error("Error fetching secondary-nav:", error));

    fetch("scripts/extra-nav.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load extra-nav.json: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            populateNav('extra-nav', data);  // Populate the extra-nav with data
        })
        .catch((error) => console.error("Error fetching extra-nav:", error));

    // Fetch footer data for social and certifications
    fetch("scripts/footer-social.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load footer-social.json: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            populateFooter('footer-social', data);  // Populate footer-social with data
        })
        .catch((error) => console.error("Error fetching footer-social:", error));

    fetch("scripts/footer-certifications.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load footer-certifications.json: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            populateFooter('footer-certifications', data);  // Populate footer-certifications with data
        })
        .catch((error) => console.error("Error fetching footer-certifications:", error));

    // Update validation links dynamically
    document.getElementById("validate-html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
    document.getElementById("validate-css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
});
