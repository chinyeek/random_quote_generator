/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//create the array of quote objects, with source, citation, year and tags.

var quotes = [
  {
    quote: 'Life isn\'t about getting and having, it\'s about giving and being.',
    source: 'Kevin Kruse',
    citation: 'Forbes',
    year: '2010',
    tags: 'life'
  },
  {
    quote: 'Every child is an artist. The problem is how to remain an artist once he grows up.',
    source: 'Pablo Picasso',
    citation: 'parenting.com',
    year: '1965',
    tags: 'parenting'
  },
  {
    quote: 'Children are educated by what the grown-up is and not by his talk.',
    source: 'Carl Jung',
    year: '1958',
    tags: 'parenting'
  },
  {
    quote: 'Life is what happens to you while you\'re busy making other plans.',
    source: 'John Lennon',
    citation: 'Lennon remembers',
    year: '1971',
    tags: 'life'
  },
  {
    quote: 'You don\'t have to be great to start, but you have to start to be great.',
    source: 'Zig Ziglar',
    citation: 'learninginbloom.com',
    year: '2019',
    tags: 'learning'
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin',
    citation: 'Wiki',
    tags: 'learning'
  }
];

//create the 'getRandomQuote' function to return a random quote from the array.

function getRandomQuote () {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//create the 'getRandomColor' function to return a random color.

function getRandomColor () {
  var colorArray = [];
  for (var i = 0; i < 3; i++) {
    colorArray.push(Math.floor(Math.random() * 256));
  }
  var randomColor = 'rgb( ' + colorArray.join() + ' )';
  return randomColor;
}

//create the 'printQuote' function to print the random quote on the page with random colored background and button

function printQuote() {
  var randomQuote = getRandomQuote();
  var HTML ='';
  HTML += '<p class="quote">' + randomQuote.quote + '</p>';
  HTML += '<p class="source">' + randomQuote.source;
  if (randomQuote.hasOwnProperty('citation')) {
    HTML += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.hasOwnProperty('year')) {
    HTML += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.hasOwnProperty('tags')) {
    HTML += '<span class="tag">' + randomQuote.tags + '</span>';
  }
  HTML += '</p>';
  document.getElementById("quote-box").innerHTML = HTML;
  // add one Variable here to store the result of getRandomColor function. This will ensure the same color appear for Background and Button.
  var generateRandomColor = getRandomColor();
  document.body.style.background = generateRandomColor;
  document.getElementById("loadQuote").style.background = generateRandomColor;
}


/***
 When the "Show another quote" button is clicked, the event listener 
 below will be triggered, and it will call, or "invoke", the `printQuote` 
 function. So do not make any changes to the line of code below this 
 comment.
 ***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//automatically show another random quote every 20 seconds if button was not clicked.

var autoRefresh = window.setInterval(printQuote, 20000);

document.getElementById("quote-box") = autoRefresh;