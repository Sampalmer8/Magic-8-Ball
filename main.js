// Variables
let ball = document.getElementById("ball");
let output = document.getElementById("output");

// Event Listeners
ball.addEventListener("click", ballClicked);

// If Statements

function ballClicked() {

    let answer = document.getElementById("answer").value;

   let randNum = Math.random();
    if (answer == "") {
        output.innerHTML = "Ask anything..."
    } else if (answer == "Is Sam Palmer the best") {
        output.innerHTML = "You know it";
    } else if (answer == "Is computer science fun") {
        output.innerHTML = "Yes, it is";
    } else if (randNum <= 0.2) {
        output.innerHTML = "Don't count on it";
    } else if (randNum <= 0.4) {
        output.innerHTML = "Without a doubt";
    } else if (randNum <= 0.6) {
        output.innerHTML = "As I see it, yes";
    } else if (randNum <= 0.8) {
        output.innerHTML = "Not a great chance";
    } else if (randNum <= 1) {
        output.innerHTML = "It is possible";
    } 
}