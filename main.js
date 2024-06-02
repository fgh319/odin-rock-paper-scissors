function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3)
    return computerChoices[randomIndex];
}

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt(`Pleser enter 'r' for rock, 'p' for paper, or 's' for scissors:`, '');
        if (humanChoice === 'r' || humanChoice === 'p' || humanChoice === 's') {
            switch (humanChoice) {
                case 'r':
                    humanChoice = 'rock';
                    break;
                case 'p':
                    humanChoice = 'paper';
                    break;
                case 's':
                    humanChoice = 'scissors';
                    break;
            }
            break;
        }
    }
    return humanChoice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('Tie!');
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
            console.log('You lose! Paper beats Rock.');
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            console.log('You win! Rock beats Scissors.');
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            console.log('You win! Paper beats Rock.');
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            console.log('You lose! Scissors beats Paper.');
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            console.log('You lose! Rock beats Scissors.')
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            console.log('You win! Scissors beats Paper.')
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your score is: ${humanScore}, computer's score is: ${computerScore}`);
    }
}

playGame();