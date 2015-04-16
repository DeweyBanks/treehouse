var questions = [
  ['Nickname for New York City', 'The Big Apple'],
  ['Who was the first president', 'George Washington'],
  ['Which is bigger, the moon or the sun?', 'Sun'],
  ['What band does Gordon Gano sing for?', 'Violent Femmes'],
  ['What band does Michael Stipe sing for?', 'REM']
];

var correct = 0;
var incorrect = 0;
var questionsWrong = [];
var questionsRight = [];


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
   listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for ( var i = 0; i < questions.length; i ++) {
  var question = questions[i][0];
  var answer = questions[i][1];
  var response = prompt(question);
  if (response === answer) {
    correct += 1;
    questionsRight.push(question);
  } else {
    incorrect += 1;
    questionsWrong.push(question);
  }
}

html = "You got " + correct + " questions right."
html += '<h2>You got these questions correct:</h2>';
html += buildList(questionsRight);
html += '<h2>You got these questions wrong</h2>';
html += buildList(questionsWrong);
print(html);
