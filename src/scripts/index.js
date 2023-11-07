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
   },
   drawBoxes: {
    player: document.querySelector('#player-cards'),
    computer: document.querySelector('#computer-cards')
   }
  },
  actions: {
    button: document.querySelector('#next-duel')
  }
}

// const pathImages = '.src/assets/icons/'
const pathImages = './src/assets/icons/'

const cardsData = [
  {
    id: 0,
    name: "Blue Eye White Dragon",
    type: 'Paper',
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    loseOf: [2],
  },
  {
    id: 1,
    name: "Dark Magician",
    type: 'rock',
    img: `${pathImages}magician.png`,
    WinOf: [2],
    loseOf: [0],
  },
  {
    id: 2,
    name: "Exodia",
    type: 'Scissors',
    img: `${pathImages}exodia.png`,
    WinOf: [0],
    loseOf: [1],
  }
]

// const playerSides = {
//   player1:  'player-field-card',
//   computer: 'computer-field-card'
// }


async function drawCards(nCards,fieldSide) {
  for (let i = 0; i < nCards; i++) {
    const randomIdCard = await getRandomCardId()
    const cardImage = await createCardImage(randomIdCard, fieldSide)

    fieldSide.appendChild(cardImage)
  }
}

async function getRandomCardId(){
  const randomIndex = Math.floor(Math.random() * cardsData.length)
  return cardsData[randomIndex].id
}
async function createCardImage(idCard,fieldSide){
  const cardImage = document.createElement("img")
  cardImage.setAttribute('height','100px')
  cardImage.setAttribute('src',`${pathImages}card-back.png`)
  cardImage.dataset.id = idCard


  if(fieldSide === state.view.drawBoxes.player){
    cardImage.addEventListener('click', () => {
      setCardsField(cardImage.getAttribute('data-id'))
    })
    cardImage.classList.add('card')

    cardImage.addEventListener('mouseover', () =>{
      drawSelectCard(idCard)
    })
  }

  return cardImage

}


async function drawSelectCard(cardId){

  state.view.cardSprites.avatar.src = `${cardsData[cardId].img}`

  state.view.cardSprites.name.textContent = `${cardsData[cardId].name}`
  state.view.cardSprites.type.textContent = `Attribute: ${cardsData[cardId].type}`

}


async function setCardsField(cardId){
  await clearFieldImage

  state.view.fieldCards.player.src = `${cardsData[cardId].img}`

  const computerCardId = await getRandomCardId()
  state.view.fieldCards.computer.src = `${cardsData[computerCardId].img}`

  if(cardsData[cardId].WinOf.includes(computerCardId)){
    state.actions.button.textContent = 'Perdeu'
    state.actions.button.classList.add('active')
  }
  if(cardsData[cardId].loseOf.includes(computerCardId)){
    state.actions.button.textContent = 'Perdeu'
    state.actions.button.classList.add('active')
  }
}



function init(){
  drawCards(5,state.view.drawBoxes.player)
  drawCards(5,state.view.drawBoxes.computer)

}

// state.actions.button.addEventListener('click', ()=> {
//   state.view.cardSprites.avatar.src = "";
//   state.actions.button.classList.remove('active')

//   state.view.fieldCards.player.style.display = "none";
//   state.view.fieldCards.computer.style.display = "none";

//   init();
// })

init()