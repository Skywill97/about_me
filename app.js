'use strict';

function question1() {
  var sport = prompt('Is my preferred sport Basketball?').toLowerCase();
  console.log('preferred sport', sport);
  if(sport === 'yes' || sport === 'y') {
    console.log('true', sport);
    alert('It is!');
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
  }
}
question3();

function question4() {
  var tvSeries = prompt('Am I currently watching Breaking Bad on Netflix?').toLowerCase();
  console.log('tv series i am currently watching', tvSeries);
  if (tvSeries === 'yes' || tvSeries === 'y') {
    console.log('true', tvSeries);
    alert('Thats right!');
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
  }
}
question5();
