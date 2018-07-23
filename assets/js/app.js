var panel = $("#quiz-area");

// Question set
var questions = [{
    question: "honestly upset i have not been invited to the westminster dog show especially with the amount of people who call me a dog daily on twitter",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Chrissy Tiegen"
    },
    {
    question: "How Can Mirrors Be Real If Our Eyes Aren't Real",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Jaden Smith"
    },
    {
    question: "Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don't know what to do. Love!",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Donald Trump"
    },
    {
    question: "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Donald Trump"
    },
    {
    question: "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now i gotta be responsible for this water bottle",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Kanye West"
    },
    {
    question: "No you shut up",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Chrissy Tiegen"
    },
    {
    question: "I'M SO HYPE RIGHT NOW   EVERYTHING HAS CHANGED ... HAVE YA'LL EVER SEEN TRON? THE END OF THE TRON WHERE EVERYTHING LIGHT UP!!!!",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Kanye West"
    },
    {
    question: "What Is The Definition Of 'Light'?",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Jaden Smith"
    },
    {
    question: "Man ... ninjas are so cool ... I just don't know any personally",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Kanye West"
    },
    {
    question: "Do you ever feel like your dog is disappointed in you?",
    answers: ["Kanye West", "Jaden Smith", "Donald Trump", "Chrissy Tiegen"],
    correctAnswer: "Chrissy Tiegen"
    },
];

var game = {

    correct: 0,
    incorrect: 0,
    counter: 120,

    //we need 4 functions. 
    //countdown
    //start
    //end
    //result

    //countdown function.
    //keep track of the counter variable
    countdown: function(){
    game.counter--;
    $("#counter-number").html(game.counter);
        if (game.counter === 0){
            console.log("Time's up!");
            game.end();
        }
    },

    //start function
    start: function(){

        //set the interval for the timer
        timer = setInterval(game.countdown, 1000);

        //on game start, prepend the sub-wrapper so that it displays time remaining
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

        //use the .remove() method to remove the start div
        $("#start").remove();

        //consult the array of questions. 
        //for each question, append  the panel with the question presented
        for (var i = 0; i < questions.length; i++){
            panel.append("<h2>" + questions[i].question + "</h2>");
            //for each question, list the possible answers displayed with 
            //radio buttons
            for (var j = 0; j < questions[i].answers.length; j++){
                //having trouble getting a space in between the radio buttons and the names
                panel.append("<br>" + "<input type='radio' name='question-" + i + "''>" +  questions[i].answers[j] + " ")
            }
        }
        //add a "done" button
        panel.append("<button id='end'>Finished!</button>");
    },

    end: function(){
        //check for 10 questions
        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val() === questions[0].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
            console.log(game.correct);
            console.log(game.incorrect);
        });
        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).val() === questions[1].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).val() === questions[2].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if ($(this).val() === questions[3].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).val() === questions[4].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).val() === questions[5].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).val() === questions[6].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).val() === questions[7].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function(){
            if ($(this).val() === questions[8].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });        $.each($("input[name='question-9']:checked"), function(){
            if ($(this).val() === questions[9].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        this.result();
        

    },

    result: function(){
        
        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        panel.html("<h2>All done!</h2>");
        panel.append("<h2>Correct Answers: " + this.correct + "</h2>");
        panel.append("<h2>Incorrect Answers: " + this.incorrect + "</h2>");
        panel.append("<h2>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h2>");
    }
};


$(document).on("click", "#start", function(){
    game.start();
});
$(document).on("click", "#end", function(){
    game.end();
})