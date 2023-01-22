// Create 2 variables with arrow functions.

// First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.
// Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.
// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.

// Ex:
// **Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red

let inputForColor = document.getElementById('textColor');
let inputForTextSize = document.getElementById('textSize');
let textForChanging = document.getElementById('text');
let submitBtn = document.getElementById('submitBtn');
let elementForChanging 

let elementTextChanging = (elementForChanging, inputForTextSize) => {
    
    inputForTextSize.value === '' ? inputForTextSize.value = '24px' : inputForTextSize.value = `${inputForTextSize.value}` + 'px' 

    elementForChanging.style.fontSize = inputForTextSize.value
    // console.log(inputForTextSize.value) - go koristev za da si proveram dali logikata e taman
} 

let elementColorChanging = (elementForChanging, inputForColor) => {
    inputForColor.value === '' ? inputForColor.value = 'green' : inputForColor.value = inputForColor.value
    elementForChanging.style.color = inputForColor.value;
}

submitBtn.addEventListener('click', function(){
   elementColorChanging(textForChanging, inputForColor)
   elementTextChanging(textForChanging, inputForTextSize)
   inputForColor.value = '#000000'
   inputForTextSize.value = ''
})