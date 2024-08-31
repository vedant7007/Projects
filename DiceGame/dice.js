function rollDice() {
    const dice = document.getElementById('dice-image');
    const result = document.getElementById('result');
    
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Update the dice image based on the random number
    dice.src = `dice${randomNumber}.png`;
    
    // Display the result
    result.textContent = `You rolled a ${randomNumber}!`;
}
