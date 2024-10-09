var butn = document.getElementById("btn");
var outPut = document.getElementById("output");

butn.addEventListener('click', function(event){
event.preventDefault();
let getWeight = +document.getElementById("weight").value;
let getHeight = +document.getElementById("height").value;

if (isNaN(getWeight) || isNaN(getHeight) || getWeight <= 0 || getHeight <= 0) {
  outPut.innerHTML = "Please enter valid positive numbers for weight and height.";
  return;
} 

let result = getWeight/(getHeight * getHeight)
  outPut.innerHTML = `Your BMI is: ${result.toFixed(2)}` ;
})