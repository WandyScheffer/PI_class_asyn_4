var board = ['', '', '', '', '', '', '', '', ''];
const win_sequences = [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                    ];
const options = ['X', 'O'];
var winner = '';
var turn = 0;
var game_over = false;
var game = document.querySelector(".board");


function start() {
    draw_board();
}

function draw_board() {
    if (game_over) {
        return;
    }
    game.innerHTML = '';
    game.innerHTML = board.map((value, i) => {
        return `<div onclick='play(${i})'>${value}</div>`
    }).reduce((content, current) => content + current);

}

function play(position) {
    if (board[position] != '') {
        return;
    }
    board[position] = options[turn];
    draw_board();
    
    let check = check_win(board[position]);

    if(check >= 0){
        // alert(`The ${board[position]}'s player is the winner!!!`);
        alert_win();
        return;
    }

    if (turn==0) {
        turn=1;
    } else {
        turn=0;
    }
}

function check_win(symbol) {
    for ( i in win_sequences ) {
        // console.log(i);
        if (board[ win_sequences[i][0] ] == symbol &&
            board[ win_sequences[i][1] ] == symbol &&
            board[ win_sequences[i][2] ] == symbol) {
            game_over = true;
            winner = symbol;
            console.log('winning sequences INDEX:' + i);
            return i;
        }
    };
    console.log("there isn't a winner yet");
    return -1;
}

function alert_win() {
    const info_winner = document.querySelector("h2");
    info_winner.innerText = `Jogador "${winner}" ganhou!!!`;
    info_winner.style.marginTop = "5%";
    info_winner.style.color = "var(--tic_tac_toe_color_font)";

    const tic_tac_toe = document.querySelector(".game");
    tic_tac_toe.appendChild(info_winner);
}

function restart() {
    game_over = false;
    board.fill('');
    winner = '';
    turn = 0;
    const info_winner = document.querySelector("h2");
    info_winner.innerText = '';
    start();
}

start();