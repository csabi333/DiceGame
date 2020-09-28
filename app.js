/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundscore,activePlayer,prevdice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
                                                     
                                                    var dice = Math.floor(Math.random()*6+1);
    console.log(dice);
                                                    var prevdiceDOM= document.querySelector('.prevdice');
                                                    document.querySelector('.dice1').style.display='none';
    
                                                    if ((prevdice == dice)&&(dice == 6)){
                                                        
                                                        prevdiceDOM.src='dice-'+prevdice+'.png';
                                                        prevdiceDOM.style.display = 'block';
                                                        
                                                        document.querySelector('.double6-'+activePlayer).style.display='block';
                                                        document.querySelector('.player-current-box-'+activePlayer).style.display='none';
                                                        document.querySelector('.btn-pass').style.display='block';
                                                        document.querySelector('.btn-roll').style.display = 'none';
                                                        document.querySelector('.btn-hold').style.display = 'none';
                                                    scores[activePlayer]=0;  
                                                        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                                                    //nextPlayer();
                                                    }else{
                                                        if(prevdice!=0){
                                                        prevdiceDOM.src='dice-'+prevdice+'.png';
                                                        prevdiceDOM.style.display = 'block';
                                                        document.querySelector('.prevdtext').style.display='block';}
                                                        prevdice=dice;
                                                        
                                                      
                                                         }
    
    
                                                    var diceDOM = document.querySelector('.dice');  
                                                    diceDOM.style.display = 'block';
                                                    diceDOM.src='dice-'+ dice +'.png';
                                                    
 if(dice !== 1){
        roundscore += dice;
        document.querySelector('#current-'+ activePlayer).textContent= roundscore;
        
        
    }else{
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-ok').style.display = 'block';
        document.querySelector('.lose-points').style.display='block';
        document.querySelector('.dice1').style.display='block';
    nextPlayer();    
    }
                                                    
                                                        
                                                     });

document.querySelector('.btn-pass').addEventListener('click',function(){
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-pass').style.display='none';
    nextPlayer();
    
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //addcurrentscore to global score
    scores[activePlayer] += roundscore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    checkwinner();
    nextPlayer();
    
    
    //check if player won
    
})

document.querySelector('.btn-ok').addEventListener('click',function(){
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.lose-points').style.display='none';
    document.querySelector('.btn-ok').style.display='none';
    document.querySelector('.dice1').style.display='none';
    
});

document.querySelector('.btn-new').addEventListener('click',init)

function nextPlayer(){
    document.querySelector('.player-current-box-'+activePlayer).style.display='block';
    
    activePlayer === 0 ? activePlayer=1 : activePlayer =0;
    
        roundscore=0;
        prevdice=0;
    
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.double6-0').style.display='none';
        document.querySelector('.double6-1').style.display='none';
    
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.prevdice').style.display='none';
        document.querySelector('.prevdtext').style.display='none';
        
}
function checkwinner(){
    if(scores[activePlayer] >= 100){
        activePlayer === 0 ? document.getElementById('name-'+ activePlayer).textContent='Player '+1+' won!' : document.getElementById('name-'+ activePlayer).textContent='Player '+2+' won!';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.player-current-box-0').style.display='none';
        document.querySelector('.player-current-box-1').style.display='none';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //nextPlayer();

    }
    
}

function init(){
    scores = [0,0];
    activePlayer=0;
    roundscore=0;
    prevdice=0;
    document.querySelector('.lose-points').style.display='none';
    document.querySelector('.player-current-box-0').style.display='block';
    document.querySelector('.player-current-box-1').style.display='block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-ok').style.display='none';
    document.querySelector('.btn-pass').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice1').style.display='none';
    document.querySelector('.double6-0').style.display='none';
    document.querySelector('.double6-1').style.display='none';
    document.querySelector('.prevdice').style.display='none';
    document.querySelector('.prevdtext').style.display='none';
    
    
                                                    
}




































