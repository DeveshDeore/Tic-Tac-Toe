let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let winmsg = document.querySelector("#winmsg");
let para = document.querySelector(".winmsg");



let ternO = true;


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (ternO === true) {
            box.innerText = "O";
            ternO = false;
        } else {
            box.innerText = "X";
            ternO = true;
        }
        box.disabled = true;

        checkWiner();
    });
});
resetBtn.addEventListener("click", () => {
    para.classList.add("winmsg");
    console.log("mi add zalo");
})

const checkWiner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {

                disableBoxes();

                winmsg.innerText = (`Winner is ${ pos1Val}`);
                confetti();




                const defaults = {
                    spread: 360,
                    ticks: 100,
                    gravity: 0,
                    decay: 0.94,
                    startVelocity: 30,
                    shapes: ["heart"],
                    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
                };

                confetti({
                    ...defaults,
                    particleCount: 50,
                    scalar: 2,
                });

                confetti({
                    ...defaults,
                    particleCount: 25,
                    scalar: 3,
                });

                confetti({
                    ...defaults,
                    particleCount: 10,
                    scalar: 4,
                });

            }

        }

    }
};



const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const resetGame = () => {
    ternO = true;
    enableBoxes();
    winmsg.innerText = "You can play";
};
const nocation = () => {
    ternO = true;
    enableBoxes();
    winmsg.innerText = "";
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", nocation);