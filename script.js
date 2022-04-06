// TODO: Global Scope Variables Here
var upTime = document. querySelector("#upTime");
var highScore =document.querySelector("#highscore");
var nameBtn = document.querySelector("#form");
nameBtn.setAttribute("style","display:none");
var endMessage = document.querySelector("#initialForm");
var viewHighscores = document.querySelector("#viewHighscores");
var submitBtn = document.querySelector("#submitBtn");
var initials = document.querySelector("#fname");
var displayScore = document.querySelector("#displayScore");
var score1 = document.querySelector("#score-1");
var score2 = document.querySelector("#score-2");
var score3 = document.querySelector("#score-3");
var score4 = document.querySelector("#score-4");
var score5 = document.querySelector("#score-5");
var score6 = document.querySelector("#score-6");
var score = 0;
var headerEl = document.querySelector("aside");
var questions = document.querySelector("section");
var listEl = document.querySelector("#listEl");
var questionHeader = document.querySelector("#question-header");
var choice1 = document.querySelector("#choice-1");
var choice2 = document.querySelector("#choice-2");
var choice3 = document.querySelector("#choice-3");
var choice4 = document.querySelector("#choice-4");
var questionObjects = [
    {questions:"How many NPCs are marriage options?",
    answer:"Twelve",
    choices: ["Eight","Fourteen","Nine","Twelve"],
    }, 
    {questions: "What do you recieve at the end of the quarry mine?",
     answer:"Golden Scythe",
     choices: ["Prismatic Shard","Void Pendant","Golden Scythe","Diamond"]
    },
    {questions: "Which NPC has questionable paternity?",
    answer: "Abigail",
    choices: ["Vincent","Abigail","Sebastian","Emily"]
    },
    {questions: "What is the currency of ginger island?",
    answer: "Golden Walnuts",
    choices: ["Lionfish","Golden Coconuts","Bone Fragments","Golden Walnuts"]
    },
    {questions: "What is the name of the homeless man behind town?",
     answer: "Linus",
     choices: ["Shane","Linus","Lewis","Harvey"],
    },
   ];
var x = 0
var timer;
var timerLeft = 200;
var isPlaying = false;

// TODO: Sart Quiz Button
   // Have Title of Quiz + description + start button 
//    highScore.addEventListener("click", function(){})
   var startBtn = document.querySelector("#start");
   startBtn.addEventListener("click", startGame);

   function startGame() {
    if (isPlaying) {
      return;
    }
    isPlaying = true;
    startTimer ();
    displayQuestions ();
    //  Start timer when start button is pushed 
    //  Displays time left on top left corner
    // Activity 9
    // var timer;
    function startTimer() {
        upTime.textContent = timerLeft;
        timer = setInterval(function() {
          timerLeft--;
          upTime.textContent = timerLeft;
          if (timerLeft <= 0) {
            clearInterval(timer);
            console.log("LOST!");
            alert("Oooooooh too slow!!");
            upTime.textContent = `OUT OF TIME`;
            // Have it go back to beginning of timer === 0 (maybe default css)
            theScore();
          }
        }, 1000);
      }};
      function displayQuestions() {
    headerEl.setAttribute("style","display:none");
    startBtn.setAttribute("style","display:none");
    nameBtn.setAttribute("style","display:none");

    questionHeader.textContent = questionObjects [x].questions;
    choice1.textContent = questionObjects [x].choices[0];
    choice2.textContent = questionObjects [x].choices[1];
    choice3.textContent = questionObjects [x].choices[2];
    choice4.textContent = questionObjects [x].choices[3];

    choice1.addEventListener("click", checkAnswer);
    choice2.addEventListener("click", checkAnswer);
    choice3.addEventListener("click", checkAnswer);
    choice4.addEventListener("click", checkAnswer);
    
    questionHeader.setAttribute("style","margin-top:15%;color:white; font-weight:bold; display:flex; flex-wrap:wrap; justify-content:center; text-align:center; padding: 5px;");
    listEl.setAttribute("style"," display:block;flex-direction:column;justify-content:center;max-width:10%;margin-left:43%;text-align:center; lightgrey 1px solid;");
    choice1.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    choice2.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    choice3.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    choice4.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
      }

      function checkAnswer() {
        if (this.innerHTML !== questionObjects[x].answer) {
          console.log("Wrong Answer!");
          timerLeft -=  50;
          upTime.textContent = timerLeft;
          score -= 2;
          highScore.textContent = score;
          

        } else {
          console.log("You got it right!");
          score += 20;
          highScore.textContent = score;
      
          x++;
          if (x === questionObjects.length) {
            console.log("Moving onnn");
            theScore();
          } else {
            displayQuestions();
          }
        }
      };
     function theScore() {
        clearInterval(timer);
        isPlaying= false;
        headerEl.setAttribute("style","display:none");
        startBtn.setAttribute("style","display:none");
        questionHeader.setAttribute("style","display:none");
        listEl.setAttribute("style","display:none");
        choice1.setAttribute("style","display:none");
        choice2.setAttribute("style","display:none");
        choice3.setAttribute("style","display:none");
        choice4.setAttribute("style","display:none");
        upTime.setAttribute("style","display:none");

        endMessage.textContent = "Your score is " + score + "!"
        console.log(score);
        endMessage.setAttribute("style","text-align:center;margin-top:15%");
        nameBtn.setAttribute("style","display:flex; justify-content:center");
        viewHighscores.textContent = "Highscores 👾"
        viewHighscores.setAttribute("style","text-align:center");
        
        
        displayScore.setAttribute("style"," display:block;flex-direction:column;justify-content:center;max-width:10%;margin-left:43%;text-align:center");
        score1.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid");
        score2.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid");
        score3.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid");
        score4.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid");
        score5.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid");
        score6.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid");

        submitBtn.addEventListener("click", function(){
        //  actualHighscore = [];
        actualHighscore = localStorage.getItem("actualHighscore") ? JSON.parse(localStorage.getItem("actualHighscore")) : [];
          var newScore = {
            name: initials.value,
            playerScore: score,
          }
          actualHighscore.push(newScore);
          localStorage.setItem("actualHighscore",JSON.stringify(actualHighscore));
          console.log(score);
          for(let i = 0; i < actualHighscore.length; i++) {
              // displayScore.textContent += actualHighscore[i].name +  actualHighscore[i].playerScore;
              score1.textContent = actualHighscore[0].name +  actualHighscore[0].playerScore;
              score2.textContent = actualHighscore[1].name +  actualHighscore[2].playerScore;
              score3.textContent = actualHighscore[2].name +  actualHighscore[3].playerScore;
              score4.textContent = actualHighscore[3].name +  actualHighscore[4].playerScore;
              score5.textContent = actualHighscore[5].name +  actualHighscore[5].playerScore;
              score5.textContent = actualHighscore[6].name +  actualHighscore[6].playerScore;


              

            if (actualHighscore.length > 6) {
             return
            }
          };
      });  


 };
// TODO: Each Question Page
    // Has 'view highscores' link in every top left corner HTML
    // Change the h1,h2, h3 tags to be questions or to be hidden 
    
    
   //  Have multiple choices (Activity 8)
   //  Have each choice be a button with eventlisteners + hover effects(CSS)

   //  Correct/ Incorrect message displays up on button being pushed
   //  If Incorrect subtract time from the timer
   
   //  Next question page
// TODO: Last Page
    // Displays final score (save score into localStorage and the retrieve last page)
    // var wins = localStorage.getItem("score") || 0; 
    // Enter intitials box with a submit button
// TODO: HighScore Page
    // Once submit is pressed, brings you to highscore page 
    // Will show users initials on highscore page based on score
    
    