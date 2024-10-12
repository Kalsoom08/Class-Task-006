// Getting Elements using DOM
var butn = document.getElementById("btn");
var outPut = document.getElementById("output");
var form = document.getElementsByTagName('form')[0]; 
var resetBtn = document.getElementById("resetBtn");

// Add event Listener 
butn.addEventListener('click', function(event) {
    event.preventDefault();
    let getWeight = parseFloat(document.getElementById("weight").value);
    let getHeight = parseFloat(document.getElementById("height").value);

    // Adding Conditions to prevent Illegal Inputs
    if (isNaN(getWeight) || isNaN(getHeight) || getWeight <= 0 || getHeight <= 0) {
        outPut.innerHTML = "Please enter valid Number for weight and height.";
        return;
    }

    // Calculating Result
    let result = getWeight / (getHeight * getHeight);
    outPut.innerHTML = result;

    // Checking The BMI Conditions
    if (result < 18.5) {
        outPut.innerHTML = `Your BMI is: ${result.toFixed(2)}. You are Underweight.`;
    } else if (result >= 18.5 && result <= 24.9) {
        outPut.innerHTML = `Your BMI is: ${result.toFixed(2)}. You have a Normal weight.`;
    } else if (result >= 25 && result <= 29.9) {
        outPut.innerHTML = `Your BMI is: ${result.toFixed(2)}. You are Overweight.`;
    } else {
        outPut.innerHTML = `Your BMI is: ${result.toFixed(2)}. You are Obese.`;
    }
});

// Adding Reset Button to Clear The Form
resetBtn.addEventListener('click', function() {
    form.reset();
    outPut.innerHTML = ""; 
});
