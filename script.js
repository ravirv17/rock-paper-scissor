function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
function getHumanChoice() {
    let userInput=prompt("Enter your input(rock/paper/scissor): ");
    return userInput;
}
let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        humanScore+=1;
    } else {
        result = 'You lose!';
        computerScore+=1;
    }
    console.log(result)
}
console.log("Human Score: "+humanScore);
console.log("Computer Score: "+computerScore);
for(let i=0;i<5;i++){
    const human=getHumanChoice();
    const computer=getComputerChoice();
    playRound(human,computer);
    console.log("Human Score: "+humanScore);
    console.log("Computer Score: "+computerScore);
}
if(humanScore>computerScore){
    console.log("FINAL WINNER IS HUMAN!");
}
else if(humanScore<computerScore){
    console.log("FINAL WINNER IS COMPUTER!");
}
else{
    console.log("IT'S A TIE!");
}
