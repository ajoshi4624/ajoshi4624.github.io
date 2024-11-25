

  
 
  
  
 
  function resetForm() {
    document.getElementById("user-info-form").reset();
  }
  
  
  function addCourseField() {
    const coursesContainer = document.getElementById("coursesContainer");
  
    const newCourseDiv = document.createElement("div");
    const newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.name = "courses";
    newCourseInput.placeholder = "Enter course name";
  
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      coursesContainer.removeChild(newCourseDiv);
    });
  
    newCourseDiv.appendChild(newCourseInput);
    newCourseDiv.appendChild(deleteButton);
    coursesContainer.appendChild(newCourseDiv);
  }
  
 
  function generateGooseName() {
    const names = ["Gus", "Gander", "Gabby", "Gretchen", "Goldie"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    alert(`Your goose's name is ${randomName}!`);
  }
  
  
  function recommendGooseFarm() {
    const farms = ["Happy Geese Farms", "Golden Feathers Sanctuary", "Wing Haven Goose Reserve"];
    const recommendedFarm = farms[Math.floor(Math.random() * farms.length)];
    alert(`We recommend visiting ${recommendedFarm}!`);
  }
  
  
  function predictGooseMood() {
    const moods = ["content", "curious", "playful", "hungry", "sleepy"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    alert(`Your goose is feeling ${randomMood} today!`);
  }
  
  
  function displayGoosePhrase() {
    const phrases = [
      "Honk honk!",
      "Flap those wings!",
      "Chase the sun!",
      "Waddle on!",
      "Let’s find a pond!"
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    alert(randomPhrase);
  }
  
  
  function scriptTest() {
    alert("Hey, my script is running!");
  }
  
  
  function getPolygonName(sides) {
    const polygonNames = {
      2: "digon",
      3: "triangle",
      4: "quadrilateral",
      5: "pentagon",
      6: "hexagon",
      7: "heptagon",
      8: "octagon",
      9: "nonagon",
      10: "decagon"
    };
    return polygonNames[sides] || "polygon with an unknown name";
  }

  function handleFormSubmit() {
    const name = document.getElementById("name-input").value;
    const mood = document.getElementById("mood-input").value;
  
    
    document.getElementById("greeting").innerText = 
      `The Absurd Job Music Marketing team welcomes you, ${name}! We're glad you are doing ${mood}!`;
    
    
    const favoriteNumber = Math.round(Math.abs(parseFloat(document.getElementById("favoriteNumber").value)));
    const polygonName = getPolygonName(favoriteNumber);
    if (polygonName) {
      alert(`Your favorite polygon is a ${polygonName}`);
    } else {
      alert("Please enter a valid number.");
    }
  }
  
document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("user-info-form"); 
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      
      handleFormSubmit();
    });
  

   
    document.getElementById("generate-goose-name-button").addEventListener("click", generateGooseName);
    document.getElementById("recommend-goose-farm-button").addEventListener("click", recommendGooseFarm);
    document.getElementById("predict-goose-mood-button").addEventListener("click", predictGooseMood);
    document.getElementById("display-goose-phrase-button").addEventListener("click", displayGoosePhrase);
  
    
  });
  