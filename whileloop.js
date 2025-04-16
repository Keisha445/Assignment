function calculateFactorial () {
    const input = document.getElementById("numberInput");
    const resultDisplay = document.getElementById("result");
    let number = parseInt(input.value);

    // Reset result text and animation class
    resultDisplay.classList.remove("show");

    // Error handling
    if (isNaN(number)) {
        resultDisplay.innerHTML ="🚫 Please enter a valid number.";
    } else if (number < 0) {
        resultDisplay.innerHTML ="⚠️ Factorial is not defined for negative numbers.";
    } else {
        let factorial = 1;
        let i = 1;

        while (i <= number) {
            factorial *=i;
            i++;
        }
    }

    resultDisplay.innerHTML = `✅ The factorial of ${number} is <strong>${factorial}</strong>.`;
}

// Add animation class 
setTimeout(() => resultDisplay.classList.add("show"), 100);

function clearInput() {
    document.getElementById("numberInput").value = "";
    const resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "";
    resultDisplay.classList.remove("show");
}


