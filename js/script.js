// Get the button element
const button1 = document.querySelector('#forward-button');

// Add a click event listener to the button
button1.addEventListener('click', () => {
    // Start the animation
    startAnimation1();
});

// Function to start the animation
function startAnimation1() {
    // Code to start the animation goes here
    // For example, you can use CSS animations or a JavaScript animation library
    const element = document.querySelector('.robot');
    element.style.animation = 'slide 1s forwards';
}

