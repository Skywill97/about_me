'use strict';

var sport = prompt('Is my preferred sport Basketball?');
sport = sport.toLowerCase();
console.log('preferred sport', sport);
if(sport === 'yes' || sport === 'y') {
  console.log('true', sport);
  alert('It is!');
} else {
  console.log('false', sport);
  alert('Wrong! It is Basketball!');
}
var state = prompt('Was I born in Washington?');
state = state.toLowerCase();
console.log('birth state', state);
if(state === 'yes' || state === 'y') {
  console.log('true', state);
  alert('Correct!');
} else {
  console.log('false', state);
  alert('Wrong! I was!');
}
var favGenre = prompt('Is Jazz my favorite genre of music?');
favGenre = favGenre.toLowerCase();
console.log('favorite genre of music', favGenre);
if(favGenre === 'yes' || favGenre === 'y') {
  console.log('true', favGenre);
  alert('Nope! Its Rock/Metal!');
} else {
  console.log('false', favGenre);
  alert('Its not! Its Rock/Metal!');
}
var tvSeries = prompt('Am I currently watching Breaking Bad on Netflix?');
tvSeries = tvSeries.toLowerCase();
console.log('tv series i am currently watching', tvSeries);
if (tvSeries === 'yes' || tvSeries === 'y') {
  console.log('true', tvSeries);
  alert('Thats right!');
} else {
  console.log('false', tvSeries);
  alert('Wrong! I am!');
}
var favColor = prompt('Is my favorite color green?');
favColor = favColor.toLowerCase();
console.log('favorite colors', favColor);
if (favColor === 'yes' || favColor === 'y' ) {
  console.log('true', favColor);
  alert('Nope! Its red!');
} else {
  console.log('false', favColor);
  alert('Its not! Its red!');
}
