const colorBox = document.getElementById('color-box');
const generateBtn = document.getElementById('generate');
const colorCode = document.getElementById('color-code');
const toast = document.querySelector('.copied');

//Function to generate a random color when button is clicked
function randGenerate() {
    const randColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // console.log(randColor);
    colorCode.value = randColor;
    colorBox.value = randColor;
    bgGenerator();
}

//Function to generate code for selected color in the color box
function codeGenerate() {
    console.log(colorBox.value)
    colorCode.value = colorBox.value;
    bgGenerator();
}


//Function to copy  color code to clipboard 
function Copy() {
    navigator.clipboard.writeText(colorCode.value);

    // Constraint to make the copied to clipboard toast visible only if the color code field is not empty
    if(colorCode.value != '') {
        toast.style.visibility = "visible";
        setTimeout(function() {
        toast.style.visibility = "hidden";
        },1000)
    }

}

//Function to Fill the body backgroud
function bgGenerator() {
    console.log(colorCode.value);
    document.body.style.backgroundColor = colorCode.value;
}




