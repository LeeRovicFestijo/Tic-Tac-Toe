const cellDivs = document.querySelectorAll ('.game-cell');
const resetDiv = document.querySelector ('.reset');

let gameIsLive = true;
let xturn = true;
let winner = null;



const checkWinner = () => {
  const topLeft = cellDivs[0].classList[2];
  const topMid = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];
  const midLeft = cellDivs[3].classList[2];
  const midMid = cellDivs[4].classList[2];
  const midRight = cellDivs[5].classList[2];
  const bottomLeft = cellDivs[6].classList[2];
  const bottomMid = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];
 
  if (topLeft && topLeft === topMid && topLeft === topRight) {
    gameIsLive = false;
    winner = topLeft;
    alert(`Player ${topLeft} is the winner!`);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  }  else if (midLeft && midLeft === midMid && midLeft === midRight) {
    gameIsLive = false;
    winner = midLeft;
    alert(`Player ${midLeft} is the winner!`);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  }   else if (bottomLeft && bottomLeft === bottomMid && bottomLeft === bottomRight) {
    gameIsLive = false;
    winner = bottomLeft;
    alert(`Player ${bottomLeft} is the winner!`); 
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  }   else if (topLeft && topLeft === midLeft && topLeft === bottomLeft) {
    gameIsLive = false;
    winner = topLeft;
    alert(`Player ${topLeft} is the winner`);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  }   else if (topMid && topMid === midMid && topMid === bottomMid) {
    gameIsLive = false;
    winner = topMid;
    alert(`Player ${topMid} is the winner!`); 
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  }   else if (topRight && topRight === midRight && topRight === bottomRight) {
    gameIsLive = false;
    winner = topRight;
    alert(`Player ${topRight} is the winner!`);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  }   else if (topLeft && topLeft === midMid && topLeft === bottomRight) {
    gameIsLive = false;
    winner = topLeft;
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
    alert(`Player ${topLeft} is the winner!`);
  }   else if (topRight && topRight === midMid && topRight === bottomLeft) {
    gameIsLive = false;
    winner = topRight;
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
    alert(`Player ${topRight} is the winner!`);
  }   else if (topLeft && topMid && topRight && midLeft && midMid && midRight && bottomLeft && bottomMid && bottomRight) {
    gameIsLive = false;
    alert(`Draw!`);
  }
};

const handleReset = () => {
  xturn = true;
  gameIsLive = true;
  winner = null;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
};

resetDiv.addEventListener ('click', handleReset);

const handleCellClick = (e) => {
  const location = e.target.classList[1];
  const classList = e.target.classList;

  if (!gameIsLive || classList[2] === 'x' || classList[2] === 'o') {
    return;
  }

  if (xturn) {
    classList.add ('x');
    checkWinner();

    xturn = !xturn;
  } else {
    classList.add ('o');
    checkWinner();

    xturn = !xturn; 
  }

};

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick);
};