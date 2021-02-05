let gameBoard = (() => {
  board = [];
  for (i = 0; i < 9; i++) {
    board.push('');
  };

  let container = document.querySelector('.container');

  let infoBox = document.querySelector('.infoBox');
  infoBox.style.display = 'none';

  board.forEach((item, index) => {
    let box = document.createElement('div');
    box.className = 'box';
    box.innerText = board[index];
    container.appendChild(box);
  });

  document.querySelector('.reset').addEventListener('click', () => {
    Array.from(container.children).forEach((item, index) => {
      board[index] = '';
      item.innerText = '';
      game.counter = 0;
      item.style.pointerEvents = 'auto';
      infoBox.textContent = "Player 1";
      gameBoard.infoBox.style.display = 'none';
      game.checkPlayer = game.playerX;
      container.style.opacity = '100%';
      document.getElementById("inputPlayer1").style.background = "lightblue";
      document.getElementById("inputPlayer2").style.background = "lightgrey";
    });
  })

  Array.from(container.children).forEach((item, index) => {
    item.addEventListener('click', () => {
      board[index] = game.checkPlayer.marker;
      item.innerText = game.checkPlayer.marker;
      item.style.pointerEvents = 'none';
      game.changePlayer();
      game.counter += 1;
      game.checkWinner();
    })
  });
  return { board, infoBox, container }
})();

let addPlayer = (name, marker) => {
  return { name, marker };
}

let game = (() => {
  let playerX = addPlayer('Player 1', 'X');
  let playerO = addPlayer('Player 2', 'O');
  let checkPlayer = playerX;

  document.getElementById("inputPlayer1").style.backgroundColor = "lightblue";
  document.getElementById("inputPlayer2").style.backgroundColor = "lightgrey";

  function changePlayer() {
    this.checkPlayer === playerX ? (this.checkPlayer = playerO
      ,
      document.getElementById("inputPlayer2").style.backgroundColor = "lightblue"
      ,
      document.getElementById("inputPlayer1").style.backgroundColor = "lightgrey"
    )
      : (this.checkPlayer = playerX
        ,
        document.getElementById("inputPlayer1").style.backgroundColor = "lightblue"
        ,
        document.getElementById("inputPlayer2").style.backgroundColor = "lightgrey"

      );
  }

  let counter = 0;

  function checkWinner() {
    console.log("run");
    if (gameBoard.board[0] == 'X' && gameBoard.board[1] == 'X' && gameBoard.board[2] == 'X'
      || gameBoard.board[3] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[5] == 'X'
      || gameBoard.board[6] == 'X' && gameBoard.board[7] == 'X' && gameBoard.board[8] == 'X'
      || gameBoard.board[0] == 'X' && gameBoard.board[3] == 'X' && gameBoard.board[6] == 'X'
      || gameBoard.board[1] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[7] == 'X'
      || gameBoard.board[2] == 'X' && gameBoard.board[5] == 'X' && gameBoard.board[8] == 'X'
      || gameBoard.board[0] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[8] == 'X'
      || gameBoard.board[2] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[6] == 'X'
    ) {
      gameBoard.infoBox.textContent = document.getElementById("inputPlayer1").value + " is the winner!";
      gameBoard.infoBox.style.display = 'block';
      gameBoard.container.style.opacity = '40%';
      document.getElementById("inputPlayer1").style.background = "lightgreen";
      document.getElementById("inputPlayer2").style.background = "lightgrey";
      gameBoard.infoBox.style.background = 'lightgreen';

    }
    else if (gameBoard.board[0] == 'O' && gameBoard.board[1] == 'O' && gameBoard.board[2] == 'O'
      || gameBoard.board[3] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[5] == 'O'
      || gameBoard.board[6] == 'O' && gameBoard.board[7] == 'O' && gameBoard.board[8] == 'O'
      || gameBoard.board[0] == 'O' && gameBoard.board[3] == 'O' && gameBoard.board[6] == 'O'
      || gameBoard.board[1] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[7] == 'O'
      || gameBoard.board[2] == 'O' && gameBoard.board[5] == 'O' && gameBoard.board[8] == 'O'
      || gameBoard.board[0] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[8] == 'O'
      || gameBoard.board[2] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[6] == 'O'
    ) {
      gameBoard.infoBox.textContent = document.getElementById("inputPlayer2").value + " is the winner!";
      gameBoard.infoBox.style.display = 'block';
      gameBoard.container.style.opacity = '40%';
      document.getElementById("inputPlayer1").style.background = "lightgrey";
      document.getElementById("inputPlayer2").style.background = "lightgreen";
      gameBoard.infoBox.style.background = 'lightgreen';

    }
    else if (game.counter == 9) {
      gameBoard.infoBox.textContent = "This game  was a tie. ";
      gameBoard.infoBox.style.display = 'block';
      gameBoard.container.style.opacity = '40%';
      document.getElementById("inputPlayer1").style.background = "lightgrey";
      document.getElementById("inputPlayer2").style.background = "lightgrey";
      gameBoard.infoBox.style.background = 'lightblue';
    }
  }
  return { checkPlayer, changePlayer, checkWinner, counter, playerX, }
})();