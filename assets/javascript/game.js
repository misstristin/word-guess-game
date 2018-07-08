  // words, letters, answer arrays

  var words = ['ron', 'harry', 'hermione', 'lumos', 'polyjuice', 'voldemort', 'hogsmeade', 'hogwarts', 'buckbeak', 'hagrid', 'gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff', 'quidditch', 'firebolt', 'dumbledore', 'butterbeer'];
  var answerArray = [];
  var lettersGuessed = [];

  // beginning values of variables

  var guessesLeft = 10;
  var wins = 0;
  var losses = 0;

  // text and numbers in divs on pageload

  document.querySelector('#guessesLeft').innerText = guessesLeft;
  document.querySelector('#wins').innerText = wins;
  document.querySelector('#losses').innerText = losses;
  document.querySelector('#lettersGuessed').innerText = lettersGuessed;
  
  // pick a random word from array

  var randWord = Math.floor(Math.random()*words.length);
  var randWord = words[randWord];

  // add _ for each letter in random word (answer)

  var answerArray = [];
  for (var i = 0; i < randWord.length; i++) {
      answerArray[i] = "_";
  }
  document.querySelector('#word').innerText = answerArray.join(" ");

  // begin game conditions using user input

      // guess a letter
  
  function wordGame(event){
  var userLet = event.key;
  var withinWord = randWord.indexOf(userLet);
  var guessedAlready = lettersGuessed.indexOf(userLet);
  if (guessedAlready == -1 && withinWord == -1){
      guessesLeft = guessesLeft - 1;
      lettersGuessed.push(userLet);
      document.querySelector('#lettersGuessed').innerText = lettersGuessed.join(" ");
      document.querySelector('#guessesLeft').innerText = guessesLeft;
  } 

      // if the user guesses a correct letter, change the corresponding _ to the letter

  for (var j = 0; j < randWord.length; j++) {
  if (randWord[j] == userLet) {
      answerArray[j] = randWord[j];
      document.querySelector('#word').innerText = answerArray.join(" ");
  }
  }

      // if all the letters are guessed, add 1 to wins, reset game
      
  if (answerArray.indexOf("_") == -1){
    alert('You win!! The answer was ' + randWord + '.')
      wins = wins + 1;
      guessesLeft = 10;
      lastGuess = lettersGuessed.length;
      lettersGuessed.splice(0,lastGuess);
      lastLetter = answerArray.length;
      answerArray.splice(0,lastGuess);
      document.querySelector('#guessesLeft').innerText = guessesLeft;
      document.querySelector('#wins').innerText = wins;
      document.querySelector('#lettersGuessed').innerText = lettersGuessed;
      randWord = Math.floor(Math.random()*words.length);
      randWord = words[randWord];
      for (var i = 0; i < randWord.length; i++) {
      answerArray[i] = "_";
      }
      document.querySelector('#word').innerText = answerArray.join(" ");
      }

      // if all guesses are used, add 1 to losses, reset game

  if(guessesLeft == 0){
      alert('You lose... the answer was ' + randWord + '.')
      losses = losses + 1;
      guessesLeft = 10;
      lastGuess = lettersGuessed.length;
      lettersGuessed.splice(0,lastGuess);
      lastLetter = answerArray.length;
      answerArray.splice(0,lastLetter);
      document.querySelector('#guessesLeft').innerText = guessesLeft;
      document.querySelector('#losses').innerText = losses;
      document.querySelector('#lettersGuessed').innerText = lettersGuessed;
      randWord = Math.floor(Math.random()*words.length);
      randWord = words[randWord];
      for (var i = 0; i < randWord.length; i++) {
      answerArray[i] = "_";
      }
      document.querySelector('#word').innerText = answerArray.join(" ");
      }	
  }

  // end game conditions using user input

// begin game on first key pressed

document.onkeyup = wordGame;