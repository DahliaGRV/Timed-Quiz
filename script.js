// TODO: Global Scope Variables Here
var upTime = document.querySelector("upTime");
var highScore =document.querySelector("highscore");
var h1El = document.querySelector("h1");
var timer;
var timerLeft = 200;
var score = localStorage.getItem("score") || 0;
var isPlaying = false;

// TODO: Sart Quiz Button
   // Have Title of Quiz + description + start button 
//    highScore.addEventListener("click", function(){})
   var startBtn = document.querySelector("#start");
   startBtn.addEventListener("click", startGame());

   function startGame() {
    if (isPlaying) {
      return;
    }
    isPlaying = true;
    timeLeft = 200;
    //  Start timer when start button is pushed 
    //  Displays time left on top right corner
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
      if (isPlaying === true){
    function firstQuestion(){
    // Create ordered list element
    var listEl = document.createElement("ol");
    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    li1.textContent = "Eight"
    li2.textContent = "Fourteen"
    li3.textContent = "Twelve"
    li4.textContent = "Nine"

    // Append ordered list 
    body.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    listEl.setAttribute("style","text-align:center;border-bottom: lightgrey 1px solid;");
    li1.setAttribute("style","background-color:purple;color:white;padding:5px;margin-left:35px;");
    li2.setAttribute("style","background-color:purple;color:white;padding:5px;margin-left:35px;");
    li3.setAttribute("style","background-color:purple;color:white;padding:5px;margin-left:35px;");
    li4.setAttribute("style","background-color:purple;color:white;padding:5px;margin-left:35px;");
    // Attempt to add hover effect in JQery
    $(document).ready(function(){
        $(li1, li2, li3, li4).hover(function(){
          $(this).css("background-color", "pink");
          }, function(){
          $(this).css("background-color", "purple");
        });
      });
      }}

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
    
    