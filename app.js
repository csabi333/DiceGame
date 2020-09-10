/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundscore,activePlayer;


scores= [0,0];
roundscore=0;
activePlayer=0;

/*
document.querySelector('#current-'+ activePlayer).textContent= dice;
*/

//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+dice+'</em>';


//var x = document.querySelector('#score-0').textContent;

//console.log(x);

document.querySelector('.dice').style.display = 'none';

//function btn(){
    //do smth
//}
//btn(); //event listener btn anonymous func
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';



document.querySelector('.btn-roll').addEventListener('click', function(){
                                                     
                                                    var dice = Math.floor(Math.random()*6+1);

                                                    var diceDOM = document.querySelector('.dice');  
                                                    diceDOM.style.display = 'block';
                                                    diceDOM.src='dice-'+ dice +'.png';
                                                    
    if(dice !== 1){
        //addscore
        roundscore += dice;
        document.querySelector('#current-'+ activePlayer).textContent= roundscore;
        
    }else{
        //next player
    nextPlayer();
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    }
                                                    
                                                        
                                                     });

document.querySelector('.btn-hold').addEventListener('click',function(){
    //addcurrentscore to global score
    scores[activePlayer] += roundscore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    checkwinner();
    nextPlayer();
    
    
    //check if player won
    
})

document.querySelector('.btn-new').addEventListener('click',function(){
    
    scores = [0,0];
    activePlayer=0;
    roundscore=0;
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer=1 : activePlayer =0;
        roundscore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display ='none';
        
}
function checkwinner(){
    if(scores[activePlayer] >= 20){
        activePlayer === 0 ? document.getElementById('name-'+ activePlayer).textContent='Player '+1+' won!' : document.getElementById('name-'+ activePlayer).textContent='Player '+2+' won!';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        nextPlayer();

    }
    
}




































