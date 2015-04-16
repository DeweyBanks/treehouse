var students = [
  {
    name: 'Mark Adams',
    track: 'Ruby on Rails',
    achievements: 4,
    points: 1234
  },
  {
    name: 'Ricky Adams',
    track: 'iOS development',
    achievements: 2,
    points: 896
  },
  {
    name: 'Chris Scott',
    track: 'Python',
    achievements: 9,
    points: 3109
  },
  {
    name: 'Mary Lew Johnston',
    track: 'JQuery',
    achievements: 5,
    points: 1569
  },
  {
    name: 'Johnny Hall',
    track: 'Photoshop',
    achievements: 3,
    points: 1194
  }
]

var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Achievments: ' + student.achievements + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
}

print(message);
