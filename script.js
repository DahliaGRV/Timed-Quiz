// TODO: Global Scope Variables Here
var upTime = document. querySelector("#upTime");
var highScore =document.querySelector("#highscore");
var nameBtn = document.querySelector("form");
nameBtn.setAttribute("style","display:none");
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
    choices: ["Vincent","Sebastian","Emily","Abigail"]
    },
    {questions: "What is the currency of ginger island?",
    answer: "Golden Walnuts",
    choices: ["Lionfish","Golden Coconuts","Bone Fragments","Golden Walnuts"]
    },
    {questions: "What is the name of the homeless man behind town?",
     answer: "Linus",
     choices: ["Shane","Lewis","Harvey","Linus"],
    },
   ];
var x = 0
var timer;
var timerLeft = 200;
var score = localStorage.getItem("score") || 0;
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
            startGame();
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
    
    questionHeader.setAttribute("style","margin-top:15%;color:white; font-weight:bold; display:flex; flex-wrap:wrap; justify-content:center; text-align:center background-color:pink; padding: 5px;");
    listEl.setAttribute("style"," display:block;flex-direction:column;justify-content:center;max-width:10%;margin-left:43%;text-align:center; lightgrey 1px solid;");
    choice1.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;","class","correct-answer");
    choice2.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;","class","not-correct");
    choice3.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;","class","not-correct");
    choice4.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;","class","not-correct");
      }
      function checkAnswer() {
      if (questionObjects[x].answer === this.innerHTML) {
          console.log("You got it right!");
          score += 10;
          highScore.textContent = score 
          x++
          displayQuestions();
      } else {
        console.log("You lost!");
        timerLeft -= 50;
        score -= 2;
      };
    // questionObjects.answer.addEventListener("click",function(event)
    // {
    //     var element = event.target;
    //     if (element.matches("Linus"))
    //     theScore();
    // });
    //   let linusMan = questionObjects[3].answer[3];
    //   console.log(linusMan);
    //   questionObjects[4].answer.addEventListener("click", theScore());

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
        nameBtn.setAttribute("style","display:flex");



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
    
    