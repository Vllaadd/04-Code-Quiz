function startQuiz(){
    emptyElements();
    startTimer();
    showQuestionAndAnswers();
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


function answerQuestion(idQuestion) {
	updateScore(idQuestion);

	emptyElements();

	if (!checkQuizIsFinished()) {
		switchToNextQuestionStep();
		showQuestionAndAnswers();
	} else {
		showHighScore();
	}
}


function checkQuizIsFinished() {
	nextStep = questionStep + 1;
	if (nextStep < questions.length) {		
		return false;
	}

	return true;
}

function emptyElements() {
	$('#question').empty();
	$('#answers').empty();
}

function showQuestionAndAnswers() {
	var question = questions[questionStep];
	$('#question').append(question.name);
	var htmlContent = "<ul>";

	for (var i = 0; i < question.answers.length; i++) {
		var answer = question.answers[i];
		htmlContent += "<li><button class=\"btn btn-primary\" onclick=answerQuestion("+answer.id+")>"+answer.name+"</button></li>";
	}
	
	htmlContent += "</ul>";

	$('#answers').append(htmlContent);
}

function switchToNextQuestionStep() {
	questionStep++;
}

function updateScore(idQuestion) {
	var question = questions[questionStep];

	if (question.rightAnswer == idQuestion) {		
		score += 1;
	} else {
		score -= 0.5;
    } 
    var currentScore = document.getElementById('score-track');
    currentScore.innerHTML = 'Your score' + score;
}