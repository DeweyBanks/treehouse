//The Object Literal:

var student = {
  name: "Dave",
  grades: [80, 85, 90, 95]
}

var person = {
  name: "Sarah",
  country: "US",
  age: 35,
  treehouseStudent: true,
  skills: ["JavaScript", "HTML", "CSS" ]
}

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';

print(message);

// for in loop

for ( key in person) {
  console.log(prop, ': ', person['prop']);
}
