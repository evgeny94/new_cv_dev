function downloadCV() {
    window.open('Evgeny Musatov-CV.docx');
}


function scrollToSection(sectionClass) {
    var section = document.querySelector('.' + sectionClass);
    section.scrollIntoView({ behavior: 'smooth' });
}

function goto(page) {
    if (page) {
        // Redirect to the specified URL
        window.location.href = page;
      } else {
        // Log an error if the URL is not provided
        console.error("Error: URL not provided for redirection.");
      }  
}

window.onload = function() {
  // Your code here
  console.log('Page has loaded!');
};


function calculateAge() {
    // Static birthdate in the format "YYYY-MM-DD"
    var birthdate = "1994-01-18";

    // Parse the birthdate string into a Date object
    var birthDate = new Date(birthdate);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var differenceInMilliseconds = currentDate - birthDate;

    // Convert the difference to years
    var age = Math.floor(differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    return age;
}

// Get the element with the ID 'age' and update its text content with the calculated age
var ageElement = document.getElementById('age');
if (ageElement) {
    var age = calculateAge();
    ageElement.textContent = age + " Years Old";
} else {
    console.error("Element with ID 'age' not found");
}

