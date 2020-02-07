
// Find the HTML element that will be used, in this case, "button"
const btn = document.getElementById("button");
// Create an array with colors of the rainbow
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];
// Function to change the colors displayed
function change() {
    // Assigns the color as the background color and randomly changes the color using the array and the Math.random function
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
// Create an event handler that calls the function when the button is clicked
btn.addEventListener('click', change);