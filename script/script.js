var interval = null;
var wordList = [
  "else",
  "loop",
  "scope",
  "while",
  "array",
  "variable",
  "const",
  "boolean",
  "integer",
  "javascript",
  "wpf"
];
var wordIndex = 0;


function startGame() {
  document.getElementById("startButton").style.display = "none";
  clearInterval(interval);
  wordIndex = 0;
  shuffleWords();

  var rocket = document.getElementById("myAnimation");
  rocket.style.left = 0 + 'px';

  var wordDiv = document.getElementById("myWord");
  wordDiv.innerText = wordList[wordIndex];

  document.getElementById("inputWordGuess").focus();
  myMove();
}

function setWord() {
  var wordDiv = document.getElementById("myWord");
  wordDiv.innerText = wordList[wordIndex];
}

function myMove() {
  var rocket = document.getElementById("myAnimation");
  var rocketPosition = 0;
  clearInterval(interval);
  interval = setInterval(frame, 1);
  function frame() {
    if (rocketPosition == 800) {
      clearInterval(interval);
      alert("You lost, close this message to play again");
      startGame();
    } else {
      rocketPosition++;
      rocket.style.left = rocketPosition + 'px';
    }
  }
}

function guessWord(input) {
  if (input.value.toLowerCase() == wordList[wordIndex].toLowerCase()) {
    wordIndex++;
    if (wordIndex >= wordList.length) {
      alert("You did it! you won!");
      startGame();
    }
    setWord();
    document.getElementById("myAnimation").left = 0;
    myMove();
    input.value = "";
  }
}

function shuffleWords() {
  wordList.sort(() => Math.random() - 0.5)
}