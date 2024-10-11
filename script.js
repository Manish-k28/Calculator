let lastAnswer = 0; // To store the last calculated answer

// Append the value to the display and update the equation
function appendToDisplay(value) {
    const display = document.getElementById('display');
    const equation = document.getElementById('equation');
    display.value += value;
    equation.innerText = display.value;
}

// Clear the display and the equation
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('equation').innerText = '';
}

// Delete the last character from the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove last character
    document.getElementById('equation').innerText = display.value; // Update equation
}

// Calculate the result based on the current input
function calculate() {
    const display = document.getElementById('display');
    const equation = document.getElementById('equation');
    try {
        // Evaluate the input expression and store it as the last answer
        lastAnswer = eval(display.value);
        equation.innerText = display.value; // Show the equation
        display.value = lastAnswer; // Show the result
    } catch (error) {
        // If there's an error (e.g., invalid input), display 'Error'
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear after 1.5 seconds
    }
}

// Show the last calculated answer in the display
function showLastAnswer() {
    appendToDisplay(lastAnswer);
}

// Toggle plus-minus for the current value
function togglePlusMinus() {
    const display = document.getElementById('display');
    if (display.value.charAt(0) === '-') {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}

// Calculate square root of the current input
function calculateSqrt() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}
