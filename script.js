function startQuiz(){
    emptyElements();
    startTimer();
    showQuestionsAndAnswers;
}

function emptyElements(){
    $('#question').empty();
    $('#answers').empty();
}

secondsCount = 0;
secondsLeft = 60;

function startTimer() {
    if (secondsCount === 0) {
        secondsCount = setInterval(function () {
            secondsLeft--;
            countdown.textContent = secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(secondsCount);
                countdown.textContent = "Time's up!";
            }
        }, 1000);
    }
};

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