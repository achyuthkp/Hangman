var answersEasy = [
  ["D","O","G"],
  ["C","A","T"],
  ["C","O","W"]
];
var answersMedium = [
  ["F","A","C","E","B","O","O","K"],
  ["T","W","I","T","T","E","R"],
  ["P","I","N","T","R","E","S","T"],
  ["I","N","S","T","A","G","R","A","M"],
  ["L","I","N","K","E","D","I","N"],
  ["Y","O","U","T","U","B","E"]
];
var answersHard = [
  ["N","E","T","H","E","R","L","A","N","D","S"],
  ["S","W","I","T","Z","E","R","L","A","N","D"],
  ["L","U","X","E","M","B","O","U","R","G"],
  ["L","I","T","H","U","A","N","I","A"],
  ["S","L","O","V","E","N","I","A"],
  ["B","U","L","G","A","R","I","A"]
];
function getDifficultyLevel(){
    var url = window.location.href;
    var stringValues = url.substring( url.indexOf('?') + 1 );
    var stringArray = stringValues.split('=');
    difficulty = stringArray[1];
    return difficulty;
}
function displayHint(){
  var level = getDifficultyLevel();
  if (level == "Easy") 
    {
      document.getElementById("hint").innerHTML = "Animals";
    }
    else if (level == "Medium") 
      {
        document.getElementById("hint").innerHTML = "Social Media Sites";
      } 
    else {
      document.getElementById("hint").innerHTML = "Countries in Europe";
    }
}  
function assignAnswer() {
    var difficulty = getDifficultyLevel();
    var result;
      if (difficulty == "Easy") 
    {
      result = answersEasy;
    }
    else if (difficulty == "Medium") 
      {
        result = answersMedium;
      } 
    else {
      result = answersHard;
    }
    console.log(difficulty);
    console.log(result);
    return result;
}
var answers = assignAnswer();  
var random = Math.floor((Math.random()*(answers.length-1))); 
var guessWord = answers[random]; 
var wordFill = new Array(guessWord.length);
var errors = 0;
for (var i = 0; i < wordFill.length; i++){
  wordFill[i] = "_ ";
}
function printWordFill(){
  for (var i = 0; i < wordFill.length; i++){
  var guessfield = document.getElementById("guessfield");
  var letters = document.createTextNode(wordFill[i]);
  guessfield.appendChild(letters);
  }
}
var checkLetter = function(){
  var form = document.checkForm; 
  var guessElement = form.elements["checkguessLetter"]; 
  var guessLetter = guessElement.value; // the letter provided by the user
  guessLetter = guessLetter.toUpperCase();
  for (var i = 0; i < guessWord.length; i++){
    if(guessWord[i] === guessLetter){
      wordFill[i] = guessLetter + " ";
      var flag = true;
    }
  guessElement.value = "";
  }
  var guessfield = document.getElementById("guessfield");
  guessfield.innerHTML=""; 
  printWordFill();
  if(!flag){
    var wrongLetters = document.getElementById("wrongLetters");
    var letters = document.createTextNode(" " + guessLetter);
    wrongLetters.appendChild(letters); 
    errors++;
    var errorField = document.getElementById("error");
    errorField.innerHTML = "Errors: " + errors;
  }
  var success = true;
  for (var i = 0; i < wordFill.length; i++){
    if(wordFill[i] === "_ "){
      success = false;
    }
  }
  if(success){
    window.alert("You win!");
  }
  if(errors === 6){
    window.alert("Sorry, you lose!");
    window.location = '../index.html';
  }
}
function init(){  
  printWordFill();
}
window.onload = init;