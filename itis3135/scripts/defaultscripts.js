
function generateGooseName() {
    const gooseNames = ["Sir Honksalot", "Feather McFlap", "Gandalf the Gray Goose", "Queen Waddles", "Captain Quack"];
    const randomName = gooseNames[Math.floor(Math.random() * gooseNames.length)];
    alert(`Your goose name is: ${randomName}`);
  }
  
 
  function recommendGooseFarm() {
    const farms = [
      "Sunny Goose Farms",
      "Honk Haven",
      "Waddle Woods",
      "Feather Fields",
      "Quack Acres"
    ];
    const randomFarm = farms[Math.floor(Math.random() * farms.length)];
    alert(`Recommended Goose Farm: ${randomFarm}`);
  }
  

  function predictGooseMood() {
    const moods = ["playful", "curious", "mischievous", "grumpy", "sleepy"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    alert(`Today's goose mood: ${randomMood}`);
  }
  

  function displayGoosePhrase() {
    const phrases = [
      "Honk if you love ganders!",
      "Just winging it!",
      "Feeling feathery fabulous!",
      "Where there’s a honk, there’s a way!",
      "Waddle on!"
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    alert(randomPhrase);
  }