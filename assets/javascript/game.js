var words = ['golf', 'tennis', 'soccer', 'hockey', 'basketball', 'baseball', 'football'];
var computerWord = '';
var computerWordLength = 0;
var wins = 0;
var letterGuess = '';
var guesses = '';

// Set up default photo

newHtml = "<img src='assets/images/sports.svg' alt='Martial Arts'>";
document.getElementById('sportPhotoDiv').innerHTML = newHtml;
newHtml = "Sports";
document.getElementById('sportNameDiv').innerHTML = newHtml;

function sport(name, photo) {
    this.sportName = name;
    this.sportPhoto = photo;
};

var golf = new sport("Golf", "<img src='assets/images/golf.jpg' alt='Golf'>");
var tennis = new sport("Tennis", "<img src='assets/images/tennis.jpg' alt='Tennis'>");
var soccer = new sport("Soccer", "<img src='assets/images/soccer.png' alt='Soccer'>");
var hockey = new sport("Hockey", "<img src='assets/images/hockey.jpg' alt='Hockey'>");
var basketball = new sport("Basketball", "<img src='assets/images/basketball.jpg' alt='Basketball'>");
var baseball = new sport("Baseball", "<img src='assets/images/baseball.jpg' alt='Baseball'>");
var football = new sport("Football", "<img src='assets/images/football.jpg' alt='Football'>");

setupGame();

function setupGame() {
    // Set up word to guess 
    computerWordIndex = Math.round(Math.random() * 6);
    computerWord = words[computerWordIndex];
    computerWordLength = computerWord.length;

    newHtml = "Enter a letter to get started!";
    document.getElementById('hangmanDiv').innerHTML = newHtml;

    // Initial Win Counter

    newHtml = "Wins" + "<br/>" + wins;
    document.getElementById('currentWinsDiv').innerHTML = newHtml;

    // Initalize Current Word

    currentWord = [];
    for (i = 0; i < computerWordLength; i++) {
        currentWord[i] = "_";
    }
    newHtml = "Current Word" + "<br/>" + currentWord.join(" ");
    document.getElementById('currentWordDiv').innerHTML = newHtml;

    // Initial Guess Counter

    guessCounter = 10;
    newHtml = "Guesses Remaining" + "<br/>" + guessCounter;
    document.getElementById('guessCounterDiv').innerHTML = newHtml;

    // Intials Guesses Made

    guesses = [];
    newHtml = "Letters Guessed" + "<br/>" + guesses;
    document.getElementById('guessesSoFarDiv').innerHTML = newHtml;

    checkGuess();
}

function checkGuess() {
    document.onkeyup = function (event) {

        // Set up default photo

        newHtml = "<img src='assets/images/sports.svg' alt='Martial Arts'>";
        document.getElementById('sportPhotoDiv').innerHTML = newHtml;
        newHtml = "Sports";
        document.getElementById('sportNameDiv').innerHTML = newHtml;

        // Read users guess
        letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (computerWord.search(letterGuess) === -1 && currentWord.indexOf(letterGuess) === -1)
        // If the user's guess is not found in the word and user has not guess the letter before then decrease the guess counter by 1 and check to see if user has any more guess left. If not restart game. If user has not guess the letter add the letter to list of letters guessed.	
        {
            if (guesses.indexOf(letterGuess) === -1) {
                guessCounter--;
                if (guessCounter === 0) {
                    sportDetails();
                    /*setupGame();*/
                }
                else {
                    guesses.push(letterGuess);
                }
            }
        } else {
            // If the user's guess is found in in the word. Look for every instance of the letter in the word. Update the user's word.	
            do {
                currentWord[computerWord.search(letterGuess)] = letterGuess
                computerWord = computerWord.replace(letterGuess, "_");
            } while (computerWord.search(letterGuess) !== -1);
            newHtml = "Current Word" + "<br/>" + currentWord.join(" ");
            document.getElementById('currentWordDiv').innerHTML = newHtml;
        }

        if (currentWord.indexOf("_") === -1)
        // Check to see if the user has guessed all the letters in the word. If user has update the photo and caption matching the word.	
        {
            wins++;
            sportDetails();
        } else {
            // If user has not guess all the letters update remaining quesses and the quesses made.	
            newHtml = "Keep guessing.";
            document.getElementById('hangmanDiv').innerHTML = newHtml;
            newHtml = "Guesses left" + "<br/>" + guessCounter;
            document.getElementById('guessCounterDiv').innerHTML = newHtml;
            newHtml = "Your guesses so far" + "<br/>" + guesses;
            document.getElementById('guessesSoFarDiv').innerHTML = newHtml;
            checkGuess();
        }

    }
}

function sportDetails() {
    switch (computerWordIndex) {
        case 0:
            newHtml = golf.sportName;
            document.getElementById('sportNameDiv').innerHTML = newHtml;
            newHtml = golf.sportPhoto;
            document.getElementById('sportPhotoDiv').innerHTML = newHtml;
            break;
        case 1:
            newHtml = tennis.sportName;
            document.getElementById('sportNameDiv').innerHTML = newHtml;
            newHtml = tennis.sportPhoto;
            document.getElementById('sportPhotoDiv').innerHTML = newHtml;
            break;
        case 2:
            newHtml = soccer.sportName;
            document.getElementById('sportNameDiv').innerHTML = newHtml;
            newHtml = soccer.sportPhoto;
            document.getElementById('sportPhotoDiv').innerHTML = newHtml;
            break;
        case 3:
            newHtml = hockey.sportName;
            document.getElementById('sportNameDiv').innerHTML = newHtml;
            newHtml = hockey.sportPhoto;
            document.getElementById('sportPhotoDiv').innerHTML = newHtml;
            break;
        case 4:
            newHtml = basketball.sportName;
            document.getElementById('sportNameDiv').innerHTML = newHtml;
            newHtml = basketball.sportPhoto;
            document.getElementById('sportPhotoDiv').innerHTML = newHtml;
            break;
        case 5:
            newHtml = baseball.sportName;
            document.getElementById('sportNameDiv').innerHTML = newHtml;
            newHtml = baseball.sportPhoto;
            document.getElementById('sportPhotoDiv').innerHTML = newHtml;
            break;
        case 6:
            newHtml = football.sportName;
            document.getElementById('sportNameDiv').innerHTML = newHtml;
            newHtml = football.sportPhoto;
            document.getElementById('sportPhotoDiv').innerHTML = newHtml;
            break;
    }
    setupGame();
}