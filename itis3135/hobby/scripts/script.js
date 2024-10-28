document.addEventListener("DOMContentLoaded", function () {
    // Map of section IDs for easy access
    const sectionIds = {
        "link-home": "home",
        "link-about": "about",
        "link-when": "when",
        "link-where": "where",
        "link-how": "how",
        "link-why": "why",
        "link-ai-prompts": "ai-prompts"
    };

    // Function to show only the selected section
    function showSection(sectionId) {
        const sections = document.querySelectorAll("main section");
        sections.forEach(section => section.style.display = "none");
        document.getElementById(sectionId).style.display = "block";
    }

    // Set up event listeners for each nav link
    for (const [linkId, sectionId] of Object.entries(sectionIds)) {
        document.getElementById(linkId).addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            showSection(sectionId); // Show selected section
        });
    }

    // Show the "home" section on page load
    showSection('home');
});