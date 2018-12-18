const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const reseti = document.querySelector('.alusta');
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

const lowOrHighText = 'Viimane pakkumine oli ';

const checkGuess = () => {
  let userGuess = Number(guessField.value);
  
  if (guessCount === 1) {
    guesses.textContent ='Eelnevad pakkumised: '
  };
  
  guesses.textContent += `${userGuess} `;
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Palju Õnne sa võitsid!';
    lastResult.style.backgroundColor = 'green';  // siia kood, kui kasutaja arvab õigesti
    lowOrHigh.textContent = '';
    reset();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Palju Õnne sa kaotasid!';
    lastResult.style.backgroundColor = 'red';
    lowOrHigh.textContent = '';
    reset();
    // kui kasutaja paneb 10 korda mööda
  } else {
    lastResult.textContent = 'Vale vastus!';
    lastResult.style.backgroundColor = 'red';
    
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = lowOrHighText + 'liiga madal'; //liiga madal
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = lowOrHighText + 'liiga kõrge'; //liiga kõrge
    };
  };
  guessCount++;  // sama mis guessCount + 1
  guessField.value = '';
  guessField.focus();
  
function reset() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
}  
reseti.addEventListener('click', function() {
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessCount = 1;
  guesses.textContent = '';
  lastResult.textContent = '';
  lastResult.style.backgroundColor = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
})
};
guessSubmit.addEventListener('click', checkGuess);

