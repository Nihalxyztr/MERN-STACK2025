let balls = document.querySelectorAll(".ball");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

start.addEventListener("click", () => {
    balls.forEach(ball => ball.classList.add("bouncing"));
});

stop.addEventListener("click", () => {
    balls.forEach(ball => ball.classList.remove("bouncing"));
});
