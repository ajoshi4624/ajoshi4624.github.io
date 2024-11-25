
$(document).ready(function(){
    $.getJSON("scripts/menu.json", function(data){
        
        let header = $("<header>");
        let h1 = $("<h1>").html("Apoorva Joshi's Absurd Job &#x1F986; ITIS 3135");
        let h2 = $("<h2>").html("Turning Sound into Stardom");
        let mainnav = $("<nav>");
        let hr = $("<hr>");
        $.each(data.mainnav, function(index, item){
            let a = $("<a>").attr("href", item.url).text(item.name);
            mainnav.append(a);
            

        });
        mainnav.append(hr);
        let secondarynav = $("<nav>");
        $.each(data.secondarynav, function(index, item){
            let a = $("<a>").attr("href", item.url).text(item.name);
            secondarynav.append(a);
            

        });
        secondarynav.append(hr);
        let extranav = $("<nav>");
        $.each(data.extranav, function(index, item){
            let a = $("<a>").attr("href", item.url).text(item.name);
            extranav.append(a);
            

        });
        extranav.append(hr);
        header.append(h1, h2, mainnav, secondarynav, extranav);
        $("#header").replaceWith(header);
    });

    $.getJSON("scripts/menu.json", function(data){
        let footer = $("<footer>");
        let footersocial = $("<nav>");
        let designedByLink = $("<a>").attr("href", data.designedBy.url).text(data.designedBy.name);
        let certificationsAndYear = $("<p>");
        let hr = $("<hr>");

        footersocial.append(hr);
        $.each(data.footersocial, function(index, item){
            let a = $("<a>").attr("href", item.url).text(item.name);
            footersocial.append(a);
            

        });
        footersocial.append(hr);
        let footercertifications = $("<nav>");
        $.each(data.footercertifications, function(index, item){
            let a = $("<a>").attr("href", item.url).text(item.name);
            footercertifications.append(a);
           

        });
        footercertifications.append(hr);
        certificationsAndYear.append(`Designed by <a href="${data.designedBy[0].url}"> ${data.designedBy[0].name}</a>, &copy; 2024`);
        
        footer.append(footersocial, footercertifications, certificationsAndYear, designedByLink);
        $("#footer").replaceWith(footer);
    });

});

// function populateNav(navId, data) {
//     const navContainer = document.getElementById(navId);
//     if (!navContainer) {
//         console.error(`No element found with ID: ${navId}`);
//         return;
//     }

    
//     navContainer.innerHTML = '';

   
//     data.forEach((item) => {  
//         const menuItem = document.createElement("a");
//         menuItem.classList.add("menu-item");
//         menuItem.textContent = item.name;
//         menuItem.href = item.url;  

//         navContainer.appendChild(menuItem);
//     });
// }


// function populateFooter(footerId, data) {
//     const footerContainer = document.getElementById(footerId);
//     if (!footerContainer) {
//         console.error(`No element found with ID: ${footerId}`);
//         return;
//     }

    
//     footerContainer.innerHTML = '';

    
//     data.forEach((item) => {
//         const footerItem = document.createElement("a");
//         footerItem.classList.add("footer-item");
//         footerItem.textContent = item.name;
//         footerItem.href = item.url;  
//         footerContainer.appendChild(footerItem);

        
//         footerContainer.appendChild(document.createElement("hr"));
//     });

    
//     const certifications = data.filter((item) => item.type === 'certification'); 

//     if (certifications.length > 0) {
//         certifications.forEach((item, index) => {
//             const certItem = document.createElement("a");
//             certItem.classList.add("footer-item");
//             certItem.textContent = item.name;
//             certItem.href = item.url;

//             footerContainer.appendChild(certItem);

            
//             if (index < certifications.length - 1) {
//                 footerContainer.appendChild(document.createElement("hr"));
//             }
//         });
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
    
//     fetch("scripts/main-nav.json")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Failed to load main-nav.json: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             populateNav('main-nav', data);  
//         })
//         .catch((error) => console.error("Error fetching main-nav:", error));

//     fetch("scripts/secondary-nav.json")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Failed to load secondary-nav.json: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             populateNav('secondary-nav', data);  
//         })
//         .catch((error) => console.error("Error fetching secondary-nav:", error));

//     fetch("scripts/extra-nav.json")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Failed to load extra-nav.json: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             populateNav('extra-nav', data);  
//         })
//         .catch((error) => console.error("Error fetching extra-nav:", error));

    
//     fetch("scripts/footer-social.json")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Failed to load footer-social.json: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             populateFooter('footer-social', data);  
//         })
//         .catch((error) => console.error("Error fetching footer-social:", error));

//     fetch("scripts/footer-certifications.json")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`Failed to load footer-certifications.json: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             populateFooter('footer-certifications', data);  
//         })
//         .catch((error) => console.error("Error fetching footer-certifications:", error));

    
// });
