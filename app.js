let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock,paper,scissor
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3) ;
    return options[randIdx];
};

const drawGame = () => {
  console.log("Game was Drawn");
  message.innerText = "Game Drawn. Play Again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        message.innerText = `You Lose!" ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
   
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});