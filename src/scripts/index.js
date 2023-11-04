const state = {
  value: {
    playerScore: 0,
    computerScore: 0
  },
  view: {
   score: {
    scoreBoxWin: document.querySelector('.score-box #win'),
    scoreBoxLose: document.querySelector('.score-box #lose')
   },
   cardSprites: {
    avatar: document.querySelector('.card-avatar #card-image'),
    name: document.querySelector('#card-name'),
    type: document.querySelector('#card-type'),
   },
   fieldCards: {
    player: document.querySelector('#player-field-card'),
    computer: document.querySelector('#computer-field-card')
   }
  },
  actions: {

  }
}


function init(){

}

init()