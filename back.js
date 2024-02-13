let blocks = document.querySelectorAll('button.blocks');
let reset = document.querySelector('button.reset');
let newGame = document.querySelector('button.newgame');
let result = document.querySelector('.result');
let f = 0;
result.classList.add("hidden");
newGame.classList.add("hidden");
let turn = true;
reset.addEventListener('click', () => {
    for (let box of blocks) {
        box.innerHTML = "";
    }
    newGame.classList.add("hidden");
    result.classList.add("hidden");
    enableAllButton();
    turn = true;
});
newGame.addEventListener('click', () => {
    for (let box of blocks) {
        box.innerHTML = "";
    }
    result.classList.add("hidden");
    newGame.classList.add("hidden");
    enableAllButton();
    turn = true;
});

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

Array.from(blocks).forEach((block) =>
    block.addEventListener('click', () => { 
        if (turn) {
            block.classList.replace("text-blue-600","text-red-600");
            block.innerHTML = "X";
            turn = false;
        }
        else {
            block.classList.replace("text-red-600","text-blue-600");
            block.innerHTML = "O";
            turn = true;
        }
        block.disabled = true;    
        checkWinner();
    }));

let checkWinner = () => {
    for (let pattern of wins) {
        let pos0 = blocks[pattern[0]].innerText;
        let pos1 = blocks[pattern[1]].innerText;
        let pos2 = blocks[pattern[2]].innerText;
        if (pos0 != "" && pos1 != "" && pos2 != "") { 
            if (pos1 === pos2 && pos0 === pos1) {
                winner(pos1);
            }
        }
    }
}
disableAllButton = () => {
    for (let box of blocks) {
        box.disabled = true;
    }

}
enableAllButton = () => {
    for (let box of blocks) {
        box.disabled = false;
    }

}

let winner = w => {
    disableAllButton();
    result.classList.remove("hidden");
    newGame.classList.remove("hidden"); 
    document.querySelector('.result').innerHTML = `Winner is ${w}.`;
}
 