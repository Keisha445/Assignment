// Arrow function to calculate age
const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  
  // Function to get user input and display result
  function showAge() {
    const yearInput = document.getElementById("birthYear").value;
    const resultDiv = document.getElementById("result");
  
    if (yearInput === "" || yearInput > new Date().getFullYear()) {
      resultDiv.innerHTML = "<p>Please enter a valid birth year.</p>";
    } else {
      const age = calculateAge(parseInt(yearInput));
      resultDiv.innerHTML = `<p>You are <strong>${age}</strong> years old.</p>`;
    }
  }
  