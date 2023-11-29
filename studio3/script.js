(function(){
    'use strict'

    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const playericons = document.querySelectorAll('#ocsheet img');
    let counter = 0;

    const gameData = {
        dice: ['images/1die.PNG', 'images/2die.PNG', 'images/3die.PNG', 'images/4die.PNG', 'images/5die.PNG', 'images/6die.PNG'],
        players: ['player 1', 'player 2'],

        BlueBerry:"images/icon1_done.PNG",
        RedVine:"images/icon2_done.PNG",
        CornyCandy:"images/icon3_done.PNG",
        SweetPixy:"images/icon4_done.PNG",

        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29


    };
   
    playericons.forEach(function(eachicon){
        eachicon.addEventListener('click', function(){
            const thisicon = this.id;
            //console.log(thisicon);
            if (counter ==0 ){
                gameData.players[0]=thisicon;
                document.querySelector('#player1').src=gameData[thisicon];
                document.querySelector('#player1name').innerHTML=thisicon;
                 counter++;
            } else if (counter==1){
                gameData.players[1]=thisicon;
                document.querySelector('#player2').src=gameData[thisicon];
                document.querySelector('#player2name').innerHTML=thisicon;
                counter--;
            }
            //console.log(gameData);

        });
    });

startGame.addEventListener('click',function(){
    // random set of game index 
    gameData.index = Math.round(Math.random());
    console.log(gameData.index);

    gameControl.innerHTML = '<h2>The game has started!</h2>';
    gameControl.innerHTML += '<button id="quit">wanna quit?</button>';
    document.getElementById('quit').addEventListener('click',function(){
        location.reload();
    });
    setUpTurn();
});

function setUpTurn(){
game.innerHTML = `<p>roll the dice for ${gameData.players[gameData.index]} </p>`;
actionArea.innerHTML = `<button id= "roll">roll!</button>`;
document.getElementById('roll').addEventListener('click', function(){
    
    throwDice();
});
}

function throwDice(){
    actionArea.innerHTML = '';
    gameData.roll1 = Math.floor(Math.random() * 6)+1;
    gameData.roll2 = Math.floor(Math.random() * 6)+1;
    game.innerHTML = `<p>roll the dice for ${gameData.players[gameData.index]} </p>`;
    game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;

    if(gameData.rollSum === 2){
        //console.log("snake eyes hiss!");
        game.innerHTML += '<p> Snake Eyes! </p>';
        gameData.score[gameData.index] = 0;
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        showCurrentScore();
        setTimeout(setUpTurn, 2000);

    } else if (gameData.roll1 === 1 || gameData.roll2 === 1){
    //console.log("a one was rolled!");
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);

    game.innerHTML += `<p> A 1 was rolled switch to ${gameData.players[gameData.index]}</p>`
    setTimeout(setUpTurn, 2000);

    } else {
        //console.log("the game must go on");
        gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
        actionArea.innerHTML = '<button id ="rollagain"> roll!</button>  <button id= "pass">pass! </button>';

        document.getElementById('rollagain').addEventListener('click',function(){
            setUpTurn();
        });

        document.getElementById('pass').addEventListener('click',function(){
                
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
        });
        //check winning condition
        checkWinningCondition();
       
    }
}

function checkWinningCondition(){
 if ( gameData.score[gameData.index] > gameData.gameEnd){
    score.innerHTML = `<h2>${gameData.players[gameData.index]} has won the game with ${gameData.score[gameData.index]} points! </h2>`;
    actionArea.innerHTML='';
    document.getElementById('quit').innerHTML = "start a new game";
 } else {
   showCurrentScore();
   score.innerHTML = `<p>The score is currently ${gameData.players[0]} is ${gameData.score[0]} and the score for ${gameData.players[1]} is ${gameData.score[1]} </p>`;
 }
}

 function showCurrentScore (){
    score.innerHTML = `<p>The score for ${gameData.players[0]} is ${gameData.score[0]} and the score for ${gameData.players[1]} is ${gameData.score[1]} </p>`;
 }

 const slapBtns = document.querySelectorAll('.slap');
 const slapSound = new Audio('sounds/slap.mp3');

 slapBtns.forEach(function(eachbtn){
eachbtn.addEventListener('click', function () {
    slapSound.play();
});

 });


})();