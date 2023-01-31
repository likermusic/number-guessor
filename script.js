const min = 1, max = 4,
        randomNum = Math.floor(Math.random()*(max-min+1) + min),
        inputNumber = document.querySelector('#number'),
        btn = document.querySelector('#btn');

let lives = 3, gameOver = false,
message = document.querySelector('#text');

document.querySelector('#min').textContent = min;
document.querySelector('#max').textContent = max;

const showMessage = (text,style) => {
        message.textContent = text;
        message.classList.add(style);
}

const playAgain = (clazz) => {
    inputNumber.disabled = true;
    btn.textContent = 'PLAY AGAIN';
    inputNumber?.classList.add(clazz);
    btn?.classList.add(clazz);
}

btn.addEventListener('click', () => {
    if (!gameOver) {
        if (inputNumber.value == '') {
            showMessage('You typed empty value', 'danger');
        } else if (inputNumber.value < min || inputNumber.value > max) {
            showMessage(`Input a number between ${min} and ${max}`, 'danger');
        } else if (inputNumber.value == randomNum) {
            playAgain('win');
            showMessage(`You win! The winning number is ${randomNum}`,'success');
            gameOver = true;
        } else if (lives > 1 && inputNumber.value !== randomNum) {
            lives--;
            showMessage(`${inputNumber.value} is not correct! You have ${lives} guesses left`, 'danger');
        } else if (lives == 1)  {
            lives--;
            playAgain('lose');
            showMessage(`You lose. The correct answer was ${randomNum}`, 'danger');
            gameOver = true;
        } 
    }  else {
        window.location.reload();
    }
})

//3 is not correct! You have 2 guesses left
//You lose. The correct answer was 2
//You win! The winning number is 3
//Input a number between ${min} and ${max}`
//You typed empty value

