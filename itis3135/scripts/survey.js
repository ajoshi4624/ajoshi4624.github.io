

  
  
  function displayIntro() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const imageUpload = document.getElementById('imageUpload').files[0];
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevBackground = document.getElementById('webDevBackground').value;
    const platform = document.getElementById('platform').value;
    const courses = Array.from(document.getElementsByName('courses')).map((course) => course.value);
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;
  
    
    const displaySection = document.getElementById('introDisplay');
    displaySection.innerHTML = `
      <h2>${name}'s Introduction</h2>
      <p><strong>Mascot:</strong> ${mascot}</p>
      ${imageUpload ? `<img src="${URL.createObjectURL(imageUpload)}" alt="User Image" style="max-width: 200px;"><br>` : ""}
      <p><em>${imageCaption}</em></p>
      <p><strong>Personal Background:</strong> ${personalBackground}</p>
      <p><strong>Professional Background:</strong> ${professionalBackground}</p>
      <p><strong>Academic Background:</strong> ${academicBackground}</p>
      <p><strong>Web Development Background:</strong> ${webDevBackground}</p>
      <p><strong>Primary Computer Platform:</strong> ${platform}</p>
      <p><strong>Courses currently taking:</strong> ${courses.join(", ")}</p>
      <p><strong>Funny thing:</strong> ${funnyThing}</p>
      <p><strong>Anything else:</strong> ${anythingElse}</p>
    `;
    displaySection.style.display = 'block';
  }
  
  
  function handleFormSubmit() {
    const form = document.getElementById('introForm');
    if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return false;
    }
  
   
    displayIntro();
  
    
    form.style.display = 'none';
  
    return false; 
  }
  
  
  function resetFormProgress() {
    document.getElementById('introForm').reset();
    document.getElementById('introForm').style.display = 'block';
    document.getElementById('introDisplay').style.display = 'none';
  }
  
  
  function addCourseField() {
    const coursesSection = document.getElementById('coursesSection');
    const newCourseDiv = document.createElement('div');
  
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.name = 'courses';
    newCourseInput.placeholder = 'Enter course name';
    newCourseInput.required = true;
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function () {
      coursesSection.removeChild(newCourseDiv);
    };
  
    newCourseDiv.appendChild(newCourseInput);
    newCourseDiv.appendChild(deleteButton);
    coursesSection.appendChild(newCourseDiv);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("introForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      handleFormSubmit();
    });
  
   
    const addCourseButton = document.getElementById("addCourseButton");
    addCourseButton.addEventListener("click", () => {
      addCourseField();
    });
  
    
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
      resetFormProgress();
    });
  });