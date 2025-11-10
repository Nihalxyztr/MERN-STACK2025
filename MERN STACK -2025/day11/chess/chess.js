let board = document.getElementById("board");

for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){

        if ((i + j) % 2 == 0) {
            board.innerHTML += "<div style='width:50px;height:50px;display:inline-block;background-color:#f0d9b5'></div>";
        } else {
            board.innerHTML += "<div style='width:50px;height:50px;display:inline-block;background-color:black'></div>";
        }
    }
    board.innerHTML += "<br/>";
}
