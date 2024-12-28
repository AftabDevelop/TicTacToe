let trun = 'O';
let total_turn = 0;
let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const board_array = new Array(9).fill("E");

function checkwinner() {
    for (let [index0, index1, index2] of winner) {
        if (board_array[index0] != "E" &&
            board_array[index0] == board_array[index1] &&
            board_array[index1] == board_array[index2]) {
            return true;
        }
    }
    return false;
}

const printer = (event) => {
    const element = event.target;

    if (element.id && board_array[element.id] === "E") {
        total_turn++;
        if (trun === 'O') {
            element.innerHTML = "O";
            board_array[element.id] = 'O';
            if (checkwinner()) {
                const result = document.getElementById("result");
                result.innerHTML = "Winner is O";

                // Remove event listener after a winner is declared
                parent.removeEventListener('click', printer);
            }
            trun = 'X';
        } else {
            element.innerHTML = "X";
            board_array[element.id] = 'X';
            if (checkwinner()) {
                const result = document.getElementById("result");
                result.innerHTML = "Winner is X";

                // Remove event listener after a winner is declared
                parent.removeEventListener('click', printer);
            }
            trun = 'O';
        }
        if(total_turn==9){
            result.innerHTML = "Match is Draw";
        }
    }
};

const parent = document.querySelector('.board');
parent.addEventListener('click', printer);

const btn = document.getElementById("hello");
btn.addEventListener('click',()=>{
    location.reload();
})
