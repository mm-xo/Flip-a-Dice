let firstRandom = Math.floor(Math.random() * 6) + 1;
let secondRandom = Math.floor(Math.random() * 6) + 1;

let images = document.querySelectorAll("img");

let firstImage = images[0];
firstImage.setAttribute("src", `./images/dice${firstRandom}.png`);

let secondImage = images[1];
secondImage.setAttribute("src", `./images/dice${secondRandom}.png`);

let outcome = document.querySelector("#outcome");
if (firstRandom === secondRandom) {
    outcome.textContent = "Draw!";
} else if (firstRandom > secondRandom) {
    outcome.textContent = "Player 1 Wins!";
} else {
    outcome.textContent = "Player 2 Wins!"
}
