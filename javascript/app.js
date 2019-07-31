$(document).ready(function(){

    var questionsArray = [
        {
            question: "Who was Ross's second wife?",
            choices: ["Monica" , "Emma",  "Emily",  "Rachel" ],
            answer: ["Emily", "2"],
            imageRight: "images/correct1.gif",
            imageWrong: "images/wrong1.gif",
        },
    
        {
            question: "Who plays Chandler?",
            choices: ["Matt LeBlanc" , "David Schwimmer",  "Joshua Jackson",  "Matthew Perry"],
            answer: ["Matthew Perry", "3"],
            imageRight: "images/correct2.gif",
            imageWrong: "images/wrong2.gif",
        },
        {
            question: "Monica is a _______ freak.",
            choices: ["mean" , "neat",  "loud",  "cool"],
            answer: ["Neat", "1"],
            imageRight: "images/correct3.gif",
            imageWrong: "images/wrong3.gif",
        },
        {
            question: "Ross was which of these?",
            choices: ["Lawyer" , "Accountant",  "Magician",  "Doctor"],
            answer: ["Doctor", "3"],
            imageRight: "images/correct4.gif",
            imageWrong: "images/wrong4.gif",
        },
        {
            question: "Gunther speaks another language besides English. What is it?",
            choices: ["Dutch" , "German",  "French",  "Spanish"],
            answer: ["Dutch", "0"],
            imageRight: "images/correct5.gif",
            imageWrong: "images/wrong5.gif",
        },
        {
            question: "Who came up with Rachel's daughter's name?",
            choices: ["Monica" , "Ross",  "Emily",  "Rachel"],
            answer: ["Monica", "0"],
            imageRight: "images/correct6.gif",
            imageWrong: "images/wrong6.gif",
        },
        {
            question: "What country did Phoebe say she was from when she gave Rachel a massage in the massage parlor?",
            choices: ["Canada" , "Sweden",  "Czechia",  "Norway"],
            answer: ["Sweden", "1"],
            imageRight: "images/correct7.gif",
            imageWrong: "images/wrong7.gif",
        },
        {
            question: "Whose agent is Estelle?",
            choices: ["Monica" , "Joey",  "Chandler",  "Phoebe"],
            answer: ["Joey", "1"],
            imageRight: "images/correct8.gif",
            imageWrong: "images/wrong8.gif",
        },
        {
            question: "How many times did Ross get married?",
            choices: ["One" , "Four",  "Three",  "Five"],
            answer: ["Three", "2"],
            imageRight: "images/correct9.gif",
            imageWrong: "images/wrong9.gif",
        },
        {
            question: "Which holiday does Chandler not like?",
            choices: ["Memorial Day" , "Christmas",  "Independence Day",  "Thanksgiving"],
            answer: ["Thanksgiving ", "3"],
            imageRight: "images/correct10.gif",
            imageWrong: "images/wrong10.gif",
        },
    
    ]
    
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var noAnswers = 0;
    var number = 15;
    var i = 0;
    var intervalId;

    timerShow();
    gameAreaHide();
    imagesHide();
      
    function reset (){
        number = 10;
        i = 0;
        rightAnswers = 0;
        wrongAnswers = 0;
        noAnswers = 0;
        $("#right").empty();
        $("#wrong").empty();
        $("#noAnswer").empty();
        $("#start").on("click",(startQuestions))
        startQuestions()
        
    }
    
    function start(){
        $("#start").on("click",(reset)); 
        console.log("this is the start function")
        var number = 10;
    }
    
    start()

    function gameAreaHide() {
        var x = document.getElementById("gameArea");
        x.style.display = "none";
    }
    
    function gameAreaShow() {
        var x = document.getElementById("gameArea");
        x.style.display = "block";
    }
    
    function screenHide() {
        var x = document.getElementById("screen");
        x.style.display = "none";
    }
    
    function screenShow() {
        var x = document.getElementById("screen");
        x.style.display = "block";
    }
        
    function startQuestions(){
        
        if (i > 9){
            screenShow();
            timerHide();
            imagesHide();
            $("#right").append("Correct answers:  " + rightAnswers);
            $("#wrong").append("Incorrect answers:  " + wrongAnswers);
            $("#noAnswer").append("Not answered:  " + noAnswers);
            i = 0
            
            start()

            }else{
            screenHide();
            imagesHide();
            timerShow();
            gameAreaShow();
           
            $("#question").text(questionsArray[i].question);
            $("#option1").text(questionsArray[i].choices[0]);
            $("#option2").text(questionsArray[i].choices[1]);
            $("#option3").text(questionsArray[i].choices[2]);
            $("#option4").text(questionsArray[i].choices[3]);
                
            nextQuestion();
            run();
        }
    }
    
    function nextQuestion() {
        i++;
        number = 15;
        $("#image").empty()
    }
    
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
     
      function decrement() {
        number--;
        $("#timer").html("Time remaining: " + number);
        if (number === 0) {
            noAnswers++
            console.log(noAnswers)
            stop();
            $("#timer").html(" ");
            $("#timer").html("Time's up!  The right answer was: " + questionsArray[i-1].answer[0]);
            var img = $("<img>").attr("src", questionsArray[i-1].imageWrong);
            $("#image").append(img);
            gameAreaHide();
            imagesShow()
            delay();
          }
    }
    
    function stop() {
        clearInterval(intervalId);
        
    }
    
    function imagesHide(){
        var x = document.getElementById("image");
        x.style.display = "none";
    }
    
    function imagesShow(){
        var x = document.getElementById("image");
        x.style.display = "block";
    }
    
    function timerHide(){
        var x = document.getElementById("timer");
        x.style.display = "none";
    }
    
    function timerShow(){
        var x = document.getElementById("timer");
        x.style.display = "block";
    }
        
    function delay(){
        setTimeout(startQuestions,4000)
    }
    
    function selection(){
        $(".button").click(function() {
            if($(".button").on("click")) { 
                if (this.value === questionsArray[i-1].answer[1]) {
                    rightAnswers++
                    console.log("this is rights:  " + rightAnswers)
                    stop();
                    $("#timer").html(" ");
                    $("#timer").html(questionsArray[i-1].answer[0] + "  is the right answer");
                    gameAreaHide();
                    imagesShow();
                    delay();
                    
                    var img = $("<img>").attr("src", questionsArray[i-1].imageRight);
                    $("#image").append(img);
                    document.getElementById("image").height = "300";
                    document.getElementById("image").width = "300";
                    }else{
                    wrongAnswers++
                    console.log(wrongAnswers)
                    stop();
                    $("#timer").html(" ");
                    $("#timer").html("Wrong! The correct answer is " + questionsArray[i-1].answer[0] );
                    gameAreaHide();
                    imagesShow();
                    delay();
                    var img = $("<img>").attr("src", questionsArray[i-1].imageWrong);
                    $("#image").append(img);
                
                }
            };
        });
    }
    
selection();
    
});
    
    



