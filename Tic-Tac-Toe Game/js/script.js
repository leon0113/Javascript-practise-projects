let btnRef = document.querySelectorAll(".btn-option");
let popupRef = document.querySelector(".popup");
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


//Disable all buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    // enable popup
    popupRef.classList.remove("hide");
}

//enable all buttons for new game and restart
const enableBtns = () => {
    btnRef.forEach(element => {
        element.innerText = "";
        element.disabled = false;
    });
    // disable popup
    popupRef.classList.add("hide");
};

// New game btn
newGameBtn.addEventListener("click", () => {
    count = 0;
    enableBtns();
})
restartBtn.addEventListener("click", () => {
    count = 0;
    enableBtns();

})


// winning function
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins! ";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins! ";
    }
}

// function for draw 
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a draw! "
}

// Win Logic
const winChecker = () => {
    // loop trough all win patterns 
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText
        ];
        // check if elements are filled
        // if 3 empty elements are same then win
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
}

//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            // Display X
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            //Display O
            element.innerText = "O";
            element.disabled = true;
        }
        // Increment count on each click
        count += 1;
        if (count == 9) {
            // Its a draw since there are a total of 9 box
            drawFunction();

        }
        // check for win on every click
        winChecker();
    });
});
//Enable buttons and disable popups on page reload
window.onload = enableBtns;