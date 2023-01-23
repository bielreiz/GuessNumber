const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btnStart');

const GuessNumber = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function() {
        return Math.round(Math.random() * this.max)
    },
    showButton: function() {
        btnRestart.style.display = 'flex';
    },
    clearInput: function() {
        inputValue.value = '';
    },
    updateAttempt: function(value) {
        attempt.innerHTML =  value;
    },
    correct: function() {
        this.showButton();
        statusTitle.innerHTML = 'Parabéns você acertou!!'
        statusTitle.classList.remove('incorrect-answear');
        statusTitle.classList.add('status-correct');

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answear');

        this.clearInput();
    },
    incorrect: function(message) {
        statusTitle.innerHTML = message;
        statusTitle.classList.add('incorrect-answear');

        this.clearInput();
        inputValue.focus();
    }
};

const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e){
    e.preventDefault();

    if (!inputValue.value) {
        alert('Digite um número!');
        return;
    }

    GuessNumber.updateAttempt(++GuessNumber.attemptsNumber)

    if (inputValue.value == numberDraw) {
        GuessNumber.correct();
    } else if (inputValue.value > numberDraw){
        GuessNumber.incorrect('O número é menor');
    }
      else if (inputValue.value < numberDraw){
        GuessNumber.incorrect('O número é maior');
    }
};

function restart() {
    location.reload();
}
