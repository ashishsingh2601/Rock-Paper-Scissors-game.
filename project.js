let userScore = 0;
let computerScore = 0;
let attempts = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let alert_ = document.getElementById("alert");


function getComputerChoice(){
    
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function convert(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
   const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallComputerWord} , You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}
function lose(userChoice, computerChoice){
    computerScore++;
     userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
   const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}${smallComputerWord} , You Lost...`; 
     document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 500);
    
}
function tie(userChoice, computerChoice){
      userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
   const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    
    result_p.innerHTML = `${convert(userChoice)}${smallUserWord} equals ${convert(computerChoice)}${smallComputerWord} , It's a tie.`; 
     document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 500);
}


function game(userChoice){
        const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice)
       {
           case "rs":
           case "pr":
           case "sp":
               win(userChoice,computerChoice);
               break;
           case "rp":
           case "ps":
           case "sr":
               lose(userChoice, computerChoice);
               break;
           case "rr":
           case "pp":
           case "ss":
               tie(userChoice, computerChoice);
               break;
               
               
       }
    
    
}

function warnAlert(){

alert_.addEventListener('click', function(){
        attempts++;
});

if (attempts==5){
   result_p.innerHTML= `Thanks for playing!`;
}
}

function main(){    rock_div.addEventListener('click', function(){
              game("r");
                });            
       
paper_div.addEventListener('click', function(){
                          game("p");
                        });
        
scissors_div.addEventListener('click', function(){
                          game("s");
                       });
             

               }
 main();
