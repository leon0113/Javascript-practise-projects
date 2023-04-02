let btnRef = document.querySelectorAll(".btn-option");
let popupRef = document.querySelectorAll(".popup");
let newGameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("msg");

// Winning combinations

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8]
];

//  player X playes first

let xTurn = true;
let count = 0;

//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            // Display Y
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            //Display O
            element.innerText = "O";
            element.disabled = true
        }
    })
})