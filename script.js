const player = document.querySelector(".display-player");
let turn = 'X';
const squares = [];


function istie(element) {
  return element != '';
}



function winner() {

  //  this a very good way to fill the square array , please try to convert this syntax as a forech 

  // for (let i = 1; i < 10; i++) {
  //   squares[i] = document.getElementById('item' + i).innerHTML;
  // }

  const squaresIndex0 = [...document.querySelectorAll(".tile")];
  squaresIndex0.forEach(function(tile, index) {
    squares[index + 1] = document.getElementById('item' + (index + 1)).innerHTML

  })



  // row win
  if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
    player.innerHTML = `${squares[1]} is the winner!`;
    document.getElementById('item' + 1).style.background = "#1C3879";
    document.getElementById('item' + 2).style.background = "#1C3879";
    document.getElementById('item' + 3).style.background = "#1C3879";
  }
  else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
    player.innerHTML = `${squares[4]} is the winner!`;
    document.getElementById('item' + 4).style.background = "#1C3879";
    document.getElementById('item' + 5).style.background = "#1C3879";
    document.getElementById('item' + 6).style.background = "#1C3879";

  }
  else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
    player.innerHTML = `${squares[9]} is the winner!`;
    document.getElementById('item' + 7).style.background = "#1C3879";
    document.getElementById('item' + 8).style.background = "#1C3879";
    document.getElementById('item' + 9).style.background = "#1C3879";
  }

  //column win
  else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
    player.innerHTML = `${squares[1]} is the winner!`;
    document.getElementById('item' + 1).style.background = "#1C3879";
    document.getElementById('item' + 4).style.background = "#1C3879";
    document.getElementById('item' + 7).style.background = "#1C3879";
  }

  else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
    player.innerHTML = `${squares[2]} is the winner!`;
    document.getElementById('item' + 2).style.background = "#1C3879";
    document.getElementById('item' + 5).style.background = "#1C3879";
    document.getElementById('item' + 8).style.background = "#1C3879";
  }

  else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
    player.innerHTML = `${squares[3]} is the winner!`;
    document.getElementById('item' + 3).style.background = "#1C3879";
    document.getElementById('item' + 6).style.background = "#1C3879";
    document.getElementById('item' + 9).style.background = "#1C3879";
  }

  // intersection win
  else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
    player.innerHTML = `${squares[1]} is the winner!`;
    document.getElementById('item' + 1).style.background = "#1C3879";
    document.getElementById('item' + 5).style.background = "#1C3879";
    document.getElementById('item' + 9).style.background = "#1C3879";
  }

  else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
    player.innerHTML = `${squares[3]} is the winner!`;
    document.getElementById('item' + 3).style.background = "#1C3879";
    document.getElementById('item' + 5).style.background = "#1C3879";
    document.getElementById('item' + 7).style.background = "#1C3879";
  }
  else if (squares.every(istie)) {
    player.innerHTML = "It is a tie!";
  }


}

function game(id) {
  // the tiles empty
  let tile = document.getElementById(id);
  if (turn === 'X' && tile.innerHTML == '') {
    tile.innerHTML = 'X';
    turn = 'O';
    player.innerHTML = 'player O turn';
  }
  else if (turn === 'O' && tile.innerHTML == '') {
    tile.innerHTML = 'O';
    turn = 'X';
    player.innerHTML = 'player X turn';
  }
  winner();

}