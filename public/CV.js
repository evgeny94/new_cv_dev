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

/*
    document.addEventListener('DOMContentLoaded', function() {
      var deleteButton = document.getElementById('goUp');

      function checkPageHeight() {
        var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
        console.log(pageHeight)
        if (pageHeight < 1100) {
          // If the page height is less than 1500 pixels, hide or remove the button
          deleteButton.style.display = 'none'; // or deleteButton.remove() to remove it from the DOM
        } else {
          // If the page height is 1500 pixels or more, show the button
          deleteButton.style.display = 'block';
        }
      }

      // Check the page height initially and listen for resize events
      checkPageHeight();
      window.addEventListener('resize', checkPageHeight);
    });
*/


document.addEventListener('DOMContentLoaded', function() {
    var deleteButton = document.getElementById('goUp');

    function checkScrollbar() {
      var hasVerticalScrollbar = document.body.scrollHeight > window.innerHeight;

      if (hasVerticalScrollbar) {
        // If there is a vertical scrollbar, display the button
        deleteButton.style.display = 'block';
      } else {
        // If there is no vertical scrollbar, hide the button
        deleteButton.style.display = 'none';
      }
    }

    // Initial check
    checkScrollbar();

    // Listen for window resize events
    window.addEventListener('resize', checkScrollbar);
  });
