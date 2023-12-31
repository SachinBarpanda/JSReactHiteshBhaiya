let generatedNumber = (parseInt(Math.random()*100 + 1));
const submit = document.getElementById("subt");
const textField = document.getElementById("textField");
const guessSlot = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".remainingGuess")
const lowOrHigh = document.querySelector(".lowOrHigh");

const startOver = document.querySelector("#result");

const p = document.createElement('p');
const playerScore = document.querySelector('.thisPlayerScore');

const recordTable = document.querySelector('.recordList');

let prevGuess = [];
let prevPlayers = [];
const currentPlayer = document.querySelector('#playerName');
let currentPlayerScore = 0;
let currentPlayerBestScore = 0;

let currGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let guessNo = parseInt(textField.value);
        validateGuess(guessNo);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`);
    }else if (guess<1){
        alert(`Enter a number above 1`);
    }else if( guess > 100){
        alert(`Enter a number below 100`);
    }else{
        prevGuess.push(guess);
        if(currGuess===11){
            displayGuess(guess);
            displayMessage(`Game over, Random number was ${generatedNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    console.log(generatedNumber);
    if(guess === generatedNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < generatedNumber){
        displayMessage(`Number is TOO low`);
    }else if(guess > generatedNumber){
        displayMessage(`Number is TOO High`);
    }
}

function displayGuess(guess){   
    textField.value = '';
    guessSlot.innerHTML += `${guess},`;
    currGuess++;
    remainingGuess.innerHTML = `${11-currGuess}`;

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    textField.value = '';
    textField.setAttribute('disabled','');
    // p.className = 'button';
    p.classList.add('button') ;
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;

    newGame();
    refreshStat();
}

function showRecord(flag,thisPlayer){
    let row = recordTable.insertRow(-1);
    let holder = row.insertCell(0);
    let record = row.insertCell(1);
    holder.innerHTML = currentPlayer.value;
    record.innerHTML = currentPlayerScore;
    if(flag){
        recordTable.deleteRow(thisPlayer+1);
    }
}

function refreshStat(){

    if(prevPlayers.length===0){
        prevPlayers.push([currentPlayer.value,currentPlayerScore]);
        currentPlayerScore = (11-currGuess)*100;
        showRecord();

    }else{
        let thisPlayer = -1;
        console.log(`current player ${currentPlayer.value}`);
        for(let i = 0 ; i < prevPlayers.length ; i++){
            if(prevPlayers[i][0] === currentPlayer.value){
                thisPlayer = i;
                break;
            }
        }
        
        console.log(`this player ${thisPlayer}`);
        if(thisPlayer !== -1){
            currentPlayerScore = (11-currGuess)*100;
            currentPlayerBestScore = prevPlayers[thisPlayer][1];
            if(currentPlayerScore>currentPlayerBestScore){
                prevPlayers[thisPlayer][1] = currentPlayerScore;
                console.log(`this player ${prevPlayers[thisPlayer][1]}`);
                showRecord(true,thisPlayer);
            }else{
                displayMessage("You have to do better");
            }
        }else{
            currentPlayerScore = (11-currGuess)*100;
            prevPlayers.push([currentPlayer.value,currentPlayerScore]);
            showRecord();

        }
    }
}

function newGame(){
    const newGameButton = document.querySelector(`#newGame`)
    newGameButton.addEventListener('click',function(e){
        generatedNumber = (parseInt(Math.random()*100 + 1));
        prevGuess = [];
        currGuess = 1;
        guessSlot.innerHTML = '';
        remainingGuess.innerHTML = `${11-currGuess}`;
        textField.removeAttribute('disabled');
        startOver.removeChild(p);
        currentPlayerScore = 0;
        currentPlayerBestScore = 0;
    })
}
