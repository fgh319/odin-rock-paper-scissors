function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3)
    return computerChoices[randomIndex];
}

// function getHumanChoice() {
//     let humanChoice;
//     while (true) {
//         humanChoice = prompt(`Pleser enter 'r' for rock, 'p' for paper, or 's' for scissors:`, '');
//         if (humanChoice === 'r' || humanChoice === 'p' || humanChoice === 's') {
//             switch (humanChoice) {
//                 case 'r':
//                     humanChoice = 'rock';
//                     break;
//                 case 'p':
//                     humanChoice = 'paper';
//                     break;
//                 case 's':
//                     humanChoice = 'scissors';
//                     break;
//             }
//             break;
//         }
//     }
//     return humanChoice;
// }



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            result.textContent = "Tie!";
            playerScoreElement.textContent = humanScore;
            computerScoreElement.textContent = computerScore;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
            result.textContent = "You lose! Paper beats Rock.";
            playerScoreElement.textContent = humanScore;
            computerScoreElement.textContent = computerScore;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            result.textContent = "You win! Rock beats Scissors.";
            playerScoreElement.textContent = humanScore;
            computerScoreElement.textContent = computerScore;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            result.textContent = "You win! Paper beats Rock.";
            playerScoreElement.textContent = humanScore;
            computerScoreElement.textContent = computerScore;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            result.textContent = "You lose! Scissors beats Paper.";
            playerScoreElement.textContent = humanScore;
            computerScoreElement.textContent = computerScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            result.textContent = "You lose! Rock beats Scissors.";
            playerScoreElement.textContent = humanScore;
            computerScoreElement.textContent = computerScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            result.textContent = "You win! Scissors beats Paper.";
            playerScoreElement.textContent = humanScore;
            computerScoreElement.textContent = computerScore;
        }

        while(humanScore >= 5 || computerScore >= 5) {
            rock.setAttribute("disabled", "");
            paper.setAttribute("disabled", "");
            scissors.setAttribute("disabled", "");
    
            if(humanScore >= 5) {
                result.textContent = "GAME OVER! WINNER IS YOU!";
                break;
            }
    
            if(computerScore >= 5) {
                result.textContent = "GAME OVER! WINNER IS COMPUTER!";
                break;
            }
        }
    }

    let humanSelection;
    let computerSelection;

    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        humanSelection = "rock";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })

    paper.addEventListener("click", () => {
        humanSelection = "paper";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })

    scissors.addEventListener("click", () => {
        humanSelection = "scissors";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })

    let result = document.querySelector(".result");
    let playerScoreElement = document.querySelector(".playerscore");
    let computerScoreElement = document.querySelector(".computerscore")


}

playGame();