'use strict';
var uName = name;
console.log('name of user', uName);
var score = 0;
console.log('score', score);
function userName() {
  var name = prompt('Welcome to my page! Whats your name?');
  alert('Hi! ' + name +'! Lets play a quick gussing game!');
  console.log('name', name);
}
userName();

function question1() {
  var sport = prompt('Is my preferred sport Basketball?').toLowerCase();
  console.log('preferred sport', sport);
  if(sport === 'yes' || sport === 'y') {
    console.log('true', sport);
    alert('It is!');
    score++;
  } else {
    console.log('false', sport);
    alert('Wrong! It is Basketball!');
  }
}
question1();

function question2() {
  var state = prompt('Was I born in Washington?').toLowerCase();
  console.log('birth state', state);
  if(state === 'yes' || state === 'y') {
    console.log('true', state);
    alert('Correct!');
    score++;
  } else {
    console.log('false', state);
    alert('Wrong! I was!');
  }
}
question2();

function question3() {
  var favGenre = prompt('Is Jazz my favorite genre of music?').toLowerCase();
  console.log('favorite genre of music', favGenre);
  if(favGenre === 'yes' || favGenre === 'y') {
    console.log('true', favGenre);
    alert('Nope! Its Rock/Metal!');
  } else {
    console.log('false', favGenre);
    alert('Its not! Its Rock/Metal!');
    score++;
  }
}
question3();

function question4() {
  var tvSeries = prompt('Am I currently watching Breaking Bad on Netflix?').toLowerCase();
  console.log('tv series i am currently watching', tvSeries);
  if (tvSeries === 'yes' || tvSeries === 'y') {
    console.log('true', tvSeries);
    alert('Thats right!');
    score++;
  } else {
    console.log('false', tvSeries);
    alert('Wrong! I am!');
  }
}
question4();

function question5() {
  var favColor = prompt('Is my favorite color green?').toLowerCase();
  console.log('favorite colors', favColor);
  if (favColor === 'yes' || favColor === 'y' ) {
    console.log('true', favColor);
    alert('Nope! Its red!');
  } else {
    console.log('false', favColor);
    alert('Its not! Its red!');
    score++;
  }
}

question5();

function question6() {
  for(var i = 0; i < 4; i++) {
    var age = prompt('Can you guess how old I am?');
    console.log('age', age);
    if (age === '20') {
      console.log('true', age);
      alert('Correct!!');
      score++;
      break;
    } else if(age > 20) {
      console.log('too high', age);
      alert('Too high! Try again!');
      break;
    } else {
      (age < 20);
      console.log('too low', age);
      alert('Too low! Try again!');
    }
  }
}
question6();
function question7() {
  var stateParks = ['Colorado', 'Washington', 'Wyoming', 'California', 'Arizona', 'Tennessee'];
  for (var i = 6; i > 0; i--) {
    var parkGuess = prompt('Can you guess a state that has a popular national park?').toLowerCase();
    console.log(stateParks[i]);
    if (stateParks.includes(parkGuess)) {
      console.log('correct guess', stateParks);
      alert('Correct!');
      score++;
      break;
    } else {
      console.log('false', parkGuess);
      alert('Wrong! Try again!');
    }
  }
}
question7();

console.log('score');
alert('Thanks for playing! You got ' + score + ' out of 7 correct!');
