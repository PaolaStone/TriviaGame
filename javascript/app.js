$(document).ready(function(){

var questionsArray = [
    {
        question: "Who was Ross's second wife?",
        choices: ["Monica" , "Emma",  "Emily",  "Rachel" ],
        answer: "Matthew Perry",
    },

    {
        question: "Who plays Chandler?",
        choices: ["Matt LeBlanc" , "David Schwimmer",  "Joshua Jackson",  "Matthew Perry"],
        answer: "Matthew Perry",
    },
    {
        question: "Monica is a _______ freak.",
        choices: ["mean" , "neat",  "loud",  "cool"],
        answer: "Neat",
    },
    {
        question: "Ross was which of these?",
        choices: ["Lawyer" , "Accountant",  "Magician",  "Doctor"],
        answer: "doctor",
    },
    {
        question: "Gunther speaks another language besides English. What is it?",
        choices: ["Dutch" , "German",  "French",  "Spanish"],
        answer: "Dutch",
    },
    {
        question: "Who came up with Rachel's daughter's name?",
        choices: ["Monica" , "Ross",  "Emily",  "Rachel"],
        answer: "Monica",
    },
    {
        question: "What country did Phoebe say she was from when she gave Rachel a massage in the massage parlor?",
        choices: ["Canada" , "Sweden",  "Czechia",  "Norway"],
        answer: "Sweden",
    },
    {
        question: "Whose agent is Estelle??",
        choices: ["Monica" , "Joey",  "Chandler",  "Phoebe"],
        answer: "Joey",
    },
    {
        question: "How many times did Ross get married?",
        choices: ["One" , "Four",  "Three",  "Five"],
        answer: "Three",
    },
    {
        question: "Which holiday does Chandler not like?",
        choices: ["Memorial Day" , "Christmas",  "Independence Day",  "Thanksgiving"],
        answer: "Thanksgiving ",
    },

]

$("#start").click(startQuestions);

var number = 10;
var intervalId;
var i = 0;

function startQuestions(){
    
    $(console.log($("#question").text(questionsArray[i].question)));
    $(console.log($("#option1").text(questionsArray[i].choices[0])));
    $(console.log($("#option2").text(questionsArray[i].choices[1])));
    $(console.log($("#option3").text(questionsArray[i].choices[2])));
    $(console.log($("#option4").text(questionsArray[i].choices[3])));
    run();
    endOfgame();
}

function endOfgame(){
    if (i === 10){
        alert("End Of Game");
    }else{
        nextQuestion()
    }
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
    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        alert("Time Up!");
        stop();
      }
    }

function stop() {
    clearInterval(intervalId);
}

    

   

});



