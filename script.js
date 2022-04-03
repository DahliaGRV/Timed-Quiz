// TODO: Global Scope Variables Here
var upTime = document.querySelector("#upTime");
var highScore =document.querySelector("#highscore");
var headerEl = document.querySelector("header");
var marriageQuestions = document.querySelector("section")
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
    timeLeft = 200;
    startTimer ();
    firstQuestion ();
    //  Start timer when start button is pushed 
    //  Displays time left on top left corner
    // Activity 9
    // var timer;
    function startTimer() {
        upTime.textContent = timeLeft;
        timer = setInterval(function() {
          console.log(timeLeft);
          timeLeft--;
          upTime.textContent = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(timer);
            console.log("LOST!");
            upTime.textContent = `OUT OF TIME`;
            // localStorage.setItem("", );
          }
        }, 1000);
      }};
      console.log(startGame);

    function firstQuestion() {
    headerEl.setAttribute("style","display:none");
    startBtn.setAttribute("style","display:none")
    // var state = headerEl.getAttribute("data-state");
    // var state1 = startBtn.getAttribute("data-state");
    // if (state1 === "visible") {
    //     startBtn.dataset.state = "hidden"
    // };
    // if (state === "visible") {
    // headerEl.dataset.state = "hidden"
    // };
    // Create Question
    var marriage = document.createElement("p");
    // Create ordered list element
    var listEl = document.createElement("ol");
    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    marriage.textContent = "How many NPCs are marriage options?"
    li1.textContent = "Eight"
    li2.textContent = "Fourteen"
    li3.textContent = "Twelve"
    li4.textContent = "Nine"

    // Append ordered list 
    marriageQuestions.appendChild(marriage);
    marriageQuestions.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    marriage.setAttribute("style","margin-top:15%;color:white; font-weight:bold; display:flex; flex-wrap:wrap; justify-content:center; text-align:center background-color:pink; padding: 5px;")
    listEl.setAttribute("style"," display:block;flex-direction:column;justify-content:center;max-width:10%;margin-left:43%;text-align:center; lightgrey 1px solid;");
    li1.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    li2.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    li3.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    li4.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
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
    
    