//  Potential Words to Guess
    var word =['jam', 'dog','cat','car', 'horse','phoenix', 'game', 'ham', 'water', 'iphone', 'html', 'cola']
//  Ranomly Chosen Words
    var randomWord = word[Math.floor(Math.random()*word.length)];
//  Holds Letters in the Word
//  UnderScore for Words
    var dashes = [];
//  Correct letter player needs to guess
    var cletters = [];
//  Wrong letter player can guess
    var wletters = [];
//  Counters
    var winCount = 0;
    var loseCount = 0;
    var guessesLeft = 10;
//  Choose words Randomnly
    var lettersInWord = randomWord.split('');    
    console.log(lettersInWord);

var docdashes = document.getElementsByClassName('words');
var doccletters = document.getElementsByClassName('rightguesses');
var docwletters = document.getElementsByClassName('wrongguesses');

    var generatedashes = () => {
        for (var i = 0; i < randomWord.length; i++) {
            dashes.push('_');
        }
        return dashes;
    }

//  Log players letters
document.addEventListener('keypress', (event) => {
window.onload = document.addEventListener('keypress', (event));
    var keyword = String.fromCharCode(event.keyCode);
    var key = event.key;
    
    if (cletters.indexOf(' ' + key) !== -1) {
        return false;
    }

    if (wletters.indexOf(' ' + key) !== -1) {
        return false;
    }
    function newGame() {
        location.reload();
        // $('.rightguesses').empty();
        // $('.wrongguesses').empty();
        // $('.tguess').empty();
        // $('.words').empty();
        // $('.words').generatedashes();
    }

//  If the player guesses the right letters

    if (randomWord.indexOf(keyword) > -1) {
        cletters.push(' ' + keyword);
        dashes[randomWord.indexOf(keyword)] = keyword;
        docdashes[0].innerHTML = dashes.join(' ');
        doccletters[0].innerHTML = cletters;

        if (dashes.join('') === randomWord) {
            alert('You Win!');
            return newGame();
        }
    }
    
    else {
        wletters.push(' ' + keyword);
        docwletters[0].innerHTML = wletters;
        guessesLeft--;
        if (guessesLeft == 0) {
            alert('You Lose!');
            return newGame();   
        }
    }
    document.querySelector('.tguess').innerHTML = guessesLeft;
});

docdashes[0].innerHTML = generatedashes().join(' ');
