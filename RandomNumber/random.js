function generateNumber() {
    const display = document.getElementById('number-display');
    
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Display the random number
    display.textContent = randomNumber;
}
