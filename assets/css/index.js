//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score


var startBtn = document.querySelector("#start-button");
var timer = document.querySelector("#timer")
console.log(startBtn)
var questions = [
    {
        prompt: "Is Java a nickname for Javascript?\n(a) false\n(b) true",
        answer: "b"
    },
    {
        prompt: "Is HTML a proggramming language?\n(a) true\n(b) false",
        answer: 'b'
    }
] 
var score = 0;
var time = 30
function startQuiz(){
setInterval(deacreaseTime,1000);

    askTheQuestion()
    showTheScore()
};
function showTheScore(){
    alert("you got it" + score + "/" + questions.length);
}
function askTheQuestion(){
    for(var i=0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt);
        if(response == [i].answer){
    score++;
    alert("correct!");
        } else{
            alert("wrong!")
        }
    
        
    }
}



function deacreaseTime(){
    time = time-1
    console.log(time)
    timer.innerHTML = time
}
startBtn.addEventListener("click",startQuiz)




