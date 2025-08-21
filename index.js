let boxes = document.querySelectorAll(".box")
let rbutn = document.querySelector(".reset")
let newgamebutn = document.querySelector("#gbtn")
let msgcontainer = document.querySelector(".msgcontainer")
let msg = document.querySelector(".win")
let turnO = true  //playerX playerO
const winpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
]

const resetgame = () => {
    turnO = true
    enablebtns()
    msgcontainer.classList.add("hide")

}



boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O"
            turnO = false

        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true

        checkwinner()
    })
}
)

const disablebtns = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const enablebtns = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}



const showWinner = (winner) => {
    win.innerText = `Congratulation,  Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disablebtns()
}
const checkwinner = () => {
    for (pattern of winpattern) {
        let pos1value = boxes[pattern[0]].innerText
        let pos2value = boxes[pattern[1]].innerText
        let pos3value = boxes[pattern[2]].innerText

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value == pos2value && pos2value == pos3value) {

                showWinner(pos1value);

            }
        }
    }
}

gbtn.addEventListener("click", resetgame)
rbutn.addEventListener("click", resetgame)

