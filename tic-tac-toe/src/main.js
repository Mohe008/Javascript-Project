const box = document.querySelectorAll(".box");

let turnZero = true;
const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

box.forEach((b) => {
    b.addEventListener("click", () => {
        if (turnZero) {
            b.textContent = "O";
            turnZero = false;
            b.classList.add("text-[#F67D31]");
        } else {
            b.textContent = "X";
            turnZero = true;
            b.classList.add("text-[#2FA4D7]");
        }
        b.setAttribute("disabled", true);
        winCheck();
    });
});


const winCheck = () => {
    for (const list of winList) {
        const [a, b, c] = list;
        if (
            box[a].textContent && 
            box[a].textContent === box[b].textContent && 
            box[a].textContent === box[c].textContent
        ) {
            setTimeout (() => {
                alert(`Player ${box[a].textContent} wins!`);
            }, 300)
            return;
        }

    }
}