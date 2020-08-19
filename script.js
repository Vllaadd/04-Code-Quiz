function startQuiz(){
    emptyElements();
    startTimer();
    showQuestionsAndAnswers;
}

function emptyElements(){
    $('#question').empty();
    $('#answers').empty();
}

function startTimer(){
    var x = setInterval(function(){
        timeLeft=10;
        timeLeft--;
        if(timeLeft == 0){
            stopQuiz(x);
        }
        $('#countdown').append(timeLeft);
    }, 1000)
}

function stopQuiz(x){
    clearInterval(x);
}






// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score