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
  var age = 20;
  while(age > 0) {
    var guessAge = prompt('Can you guess how old I am?');
    console.log('guess age', guessAge);
    guessAge = parseInt(guessAge);
    if (guessAge === age) {
      alert('Correct!!');
      score++;
      break;
    }
    else if (guessAge > 20){
      console.log('too high', guessAge);
      alert('You guessed too high!');
      break;
    } else {
      (guessAge < 20);
      console.log('too low');
      alert('You guessed too low!');
      break;

    }

  }
}

question6();

function question7() {
  var states = ['Colorado', 'Washington', 'Wyoming', 'California', 'Arizona', 'Tennessee'];
  if(guessState !== states[0] && guessState !== states[1] && guessState !== states[2] && guessState !== states[3] && guessState !== states[4] && guessState !== states[5]) {
    var guessState = prompt('Can you guess a state that has a popular national park?').toLowerCase();
    console.log('what states', guessState);
    alert('Correct! The states were: '+ states[0] +', '+ states[1] +', '+ states[2] +', '+ states[3] +', '+ states[4] +' and '+ states[5] +'!');
    score++;
  }
  else {
    console.log('wrong state', guessState);
    alert('wrong! The correct states were: '+ states[0] +', '+ states[1] +', '+ states[2] +', '+ states[3] +', '+ states[4] +' and '+ states[5] +'!');

  }
}

question7();

console.log('score');
alert('Thanks for playing! You got ' + score + ' out of 7 correct!');
