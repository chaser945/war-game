const newDeckBtn = document.getElementById("new-deck");
const drawCardsBtn = document.getElementById("draw-cards");
const warEle = document.getElementById("war");
const remainingCards = document.getElementById("remaining-cards");
const compScoreEle = document.getElementById("comp-score");
const playerScoreEle = document.getElementById("player-score");
let deckId;
let playerScore = 0;
let compScore = 0;

newDeckBtn.addEventListener("click", newDeck);
drawCardsBtn.addEventListener("click", function () {
  drawCards(deckId);
});

//DISPLAYING CARDS ON NODE//

function newDeck() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      getRemainingCards(data);
    });
}

function drawCards(id) {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${id}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById(
        "card-1"
      ).innerHTML = `<img src=${data.cards[0].image} />`;
      document.getElementById(
        "card-2"
      ).innerHTML = `<img src=${data.cards[1].image} />`;
      findHigherCard(data.cards[0], data.cards[1]);
      getRemainingCards(data);
      determineCardWinner(data.cards[0], data.cards[1]);

      if (data.remaining < 2) {
        drawCardsBtn.disabled = true;
        drawCardsBtn.classList.remove("btn");
        drawCardsBtn.classList.add("disable");
      }

      displayWinner();
    });
}

// WHCIH CARD IS BIG ?//

const cardsValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE",
];

function findHigherCard(card1, card2) {
  const card1index = cardsValues.indexOf(card1.value);
  const card2index = cardsValues.indexOf(card2.value);
  if (card1index > card2index) {
    warEle.textContent = "Computer Wins";
  } else if (card1index < card2index) {
    warEle.textContent = "Player Wins";
  } else {
    warEle.textContent = "War";
  }
}

function getRemainingCards(obj) {
  remainingCards.textContent = `Remaining Cards: ${obj.remaining}`;
}

function determineCardWinner(card1, card2) {
  const card1index = cardsValues.indexOf(card1.value);
  const card2index = cardsValues.indexOf(card2.value);
  if (card1index > card2index) {
    compScore++;
    compScoreEle.textContent = `Computer Score: ${compScore}`;
  } else if (card1index < card2index) {
    playerScore++;
    playerScoreEle.textContent = `Player Score: ${playerScore}`;
  }
}

function displayWinner() {
  if (drawCardsBtn.disabled === true) {
    if (playerScore > compScore) {
      warEle.textContent = "Player has won the game";
    } else if (compScore > playerScore) {
      warEle.textContent = "Computer has won the game";
    } else {
      warEle.textContent = "It was a tie";
    }
  }
}

fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  .then((res) => res.json())
  .then((data) => {
    deckId = data.deck_id;
    console.log(deckId);
  });
