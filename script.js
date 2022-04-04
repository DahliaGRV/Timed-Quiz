// TODO: Global Scope Variables Here
var upTime = document. querySelector("#upTime");
var highScore =document.querySelector("#highscore");
var headerEl = document.querySelector("header");
var questions = document.querySelector("section")
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
            return;
          }
        }, 1000);
      }};
      console.log(startGame);

    function firstQuestion() {
    headerEl.setAttribute("style","display:none");
    startBtn.setAttribute("style","display:none");
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
    questions.appendChild(marriage);
    questions.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    marriage.setAttribute("style","margin-top:15%;color:white; font-weight:bold; display:flex; flex-wrap:wrap; justify-content:center; text-align:center background-color:pink; padding: 5px;");
    listEl.setAttribute("style"," display:block;flex-direction:column;justify-content:center;max-width:10%;margin-left:43%;text-align:center; lightgrey 1px solid;");
    li1.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    li2.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    li3.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
    li4.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");

    listEl.addEventListener("click",function(event){
        var element = event.target;
        if (element.matches("li3")) {
            var correct = document.createElement("p");
            correct.textContent = "Correct!!";
            marriageQuestions.appendChild(correct);
            correct.setAttribute("style","color:darkgreen; border-top: black dotted 2px;");
            console.log("Hello!");
            // store score in localStorage based on time on clock when clicked?
            secondQuestion();
    } else if (element.matches("li1"||"li2"||"li4")) {
        // Placeholder alert
        var wrong = document.createElement("p");
        wrong.textContent = "Wrong!!";
        marriageQuestions.appendChild(wrong);
        wrong.setAttribute("style","color:darkgreen; border-top: black dotted 2px;")
        // Put in time deduction function here for wrong answer

    }});
};
    function secondQuestion() {
        headerEl.setAttribute("style","display:none");
        startBtn.setAttribute("style","display:none");
        // Create Question
        var quarryMine = document.createElement("p");
        // Create ordered list element
        var listEl = document.createElement("ol");
        // Create ordered list items
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
    
        quarryMine.textContent = "What do you recieve at the end of the quarry mine?"
        li1.textContent = "Prismatic Shard"
        li2.textContent = "Void Pendant"
        li3.textContent = "Diamond"
        li4.textContent = "Golden Scythe"
    
        // Append ordered list 
        questions.appendChild(quarryMine);
        questions.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        quarryMine.setAttribute("style","margin-top:15%;color:white; font-weight:bold; display:flex; flex-wrap:wrap; justify-content:center; text-align:center background-color:pink; padding: 5px;");
        listEl.setAttribute("style"," display:block;flex-direction:column;justify-content:center;max-width:10%;margin-left:43%;text-align:center; lightgrey 1px solid;");
        li1.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
        li2.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
        li3.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
        li4.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");

        listEl.addEventListener("click",function(event){
            var element = event.target;
            if (element.matches("li4")) {
                var correct = document.createElement("p");
                correct.textContent = "Correct!!";
                marriageQuestions.appendChild(correct);
                correct.setAttribute("style","color:darkgreen; border-top: black dotted 2px;");
                console.log("Hello!");
                // store score in localStorage based on time on clock when clicked?
                thirdQuestion();
        } else if (element.matches("li1"||"li2"||"li3")) {
            // Placeholder alert
            var wrong = document.createElement("p");
            wrong.textContent = "Wrong!!";
            questions.appendChild(wrong);
            wrong.setAttribute("style","color:darkgreen; border-top: black dotted 2px;")
            // Put in time deduction function here for wrong answer
    
        }});

    };
    function thirdQuestion() {
        headerEl.setAttribute("style","display:none");
        startBtn.setAttribute("style","display:none");
        // Create Question
        var paternity = document.createElement("p");
        // Create ordered list element
        var listEl = document.createElement("ol");
        // Create ordered list items
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
    
        paternity.textContent = "Which NPC has questionable paternity?"
        li1.textContent = "Abigail"
        li2.textContent = "Vincent"
        li3.textContent = "Emily"
        li4.textContent = "Maru"
    
        // Append ordered list 
        questions.appendChild(paternity);
        questions.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        paternity.setAttribute("style","margin-top:15%;color:white; font-weight:bold; display:flex; flex-wrap:wrap; justify-content:center; text-align:center background-color:pink; padding: 5px;");
        listEl.setAttribute("style"," display:block;flex-direction:column;justify-content:center;max-width:10%;margin-left:43%;text-align:center; lightgrey 1px solid;");
        li1.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
        li2.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
        li3.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");
        li4.setAttribute("style","background-color:purple;color:white;padding:2%; margin: 2%;border:white 2px solid;");

        listEl.addEventListener("click",function(event){
            var element = event.target;
            if (element.matches("li1")) {
                var correct = document.createElement("p");
                correct.textContent = "Correct!!";
                questions.appendChild(correct);
                correct.setAttribute("style","color:darkgreen; border-top: black dotted 2px;");
                console.log("Hello!");
                // store score in localStorage based on time on clock when clicked?
                fourthQuestion();
        } else if (element.matches("li2"||"li3"||"li4")) {
            // Placeholder alert
            var wrong = document.createElement("p");
            wrong.textContent = "Wrong!!";
            questions.appendChild(wrong);
            wrong.setAttribute("style","color:darkgreen; border-top: black dotted 2px;")
            // Put in time deduction function here for wrong answer
    
        }});
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
    
    