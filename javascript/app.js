$(document).ready(function(){

var questionsArray = [
    {
        question: "Who was Ross's second wife?",
        choices: ["Monica" , "Emma",  "Emily",  "Rachel" ],
        answer: ["Emily", "2"]
    },

    {
        question: "Who plays Chandler?",
        choices: ["Matt LeBlanc" , "David Schwimmer",  "Joshua Jackson",  "Matthew Perry"],
        answer: ["Matthew Perry", "3"],
    },
    {
        question: "Monica is a _______ freak.",
        choices: ["mean" , "neat",  "loud",  "cool"],
        answer: ["Neat", "1"],
    },
    {
        question: "Ross was which of these?",
        choices: ["Lawyer" , "Accountant",  "Magician",  "Doctor"],
        answer: ["Doctor", "3"],
    },
    {
        question: "Gunther speaks another language besides English. What is it?",
        choices: ["Dutch" , "German",  "French",  "Spanish"],
        answer: ["Dutch", "0"],
    },
    {
        question: "Who came up with Rachel's daughter's name?",
        choices: ["Monica" , "Ross",  "Emily",  "Rachel"],
        answer: ["Monica", "0"],
    },
    {
        question: "What country did Phoebe say she was from when she gave Rachel a massage in the massage parlor?",
        choices: ["Canada" , "Sweden",  "Czechia",  "Norway"],
        answer: ["Sweden", "1"],
    },
    {
        question: "Whose agent is Estelle?",
        choices: ["Monica" , "Joey",  "Chandler",  "Phoebe"],
        answer: ["Joey", "1"],
    },
    {
        question: "How many times did Ross get married?",
        choices: ["One" , "Four",  "Three",  "Five"],
        answer: ["Three", "2"],
    },
    {
        question: "Which holiday does Chandler not like?",
        choices: ["Memorial Day" , "Christmas",  "Independence Day",  "Thanksgiving"],
        answer: ["Thanksgiving ", "3"],
    },

]

$("#start").click(startQuestions);

var number = 10;
var intervalId;
var i = 0;

function startQuestions(){
    if (i >= 10){
        alert("End Of Game");
    };

    $("#question").text(questionsArray[i].question);
    $("#option1").text(questionsArray[i].choices[0]);
    $("#option2").text(questionsArray[i].choices[1]);
    $("#option3").text(questionsArray[i].choices[2]);
    $("#option4").text(questionsArray[i].choices[3]);
    
    nextQuestion();
    run();

    
}

function nextQuestion() {
    i++;
    number = 10;
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
 
  
function decrement() {
    number--;
    $("#timer").html("Time remaining: " + number);
    if (number === 0) {
        stop();
        console.log("Time Up! The right answer was: " + questionsArray[i-1].answer[0])
      }
    }

function stop() {
    clearInterval(intervalId);
}



function selection(){
$(".button").click(function() {
    if($(".button").is(":checked")) { 
        console.log("it's checked"); 
        console.log(this.value);
        console.log(questionsArray[i-1].answer[1])
        if (this.value === questionsArray[i-1].answer[1]) {
            console.log(questionsArray[i-1].answer[0] + "  is the right answer");
        }else{
            console.log("Wrong! The correct answer is " + questionsArray[i-1].answer[0]);

        }
    };



 });



}

selection();

   

});



