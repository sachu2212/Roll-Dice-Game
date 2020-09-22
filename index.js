// var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// var randomImage = "dice" +randomNumber1+ ".png";
// var randomImageSource1 = "images/"+randomImage;
// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// var randomImageSource2 = "images/dice" +randomNumber2+ ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if(randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player-1 Wins!";
// } else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player-2 Wins!";
// } else {
//   document.querySelector("h1").innerHTML = "Draw!!";
// }

document.querySelector("button").addEventListener("click", function() {
  rollDice();
});

function rollDice () {
  randomNumber1 = Math.floor(Math.random() * 6 + 1);
  randomImage = "dice" +randomNumber1+ ".png";
  randomImageSource1 = "images/"+randomImage;
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  randomNumber2 = Math.floor(Math.random() * 6 + 1);
  randomImageSource2 = "images/dice" +randomNumber2+ ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<i class='fas fa-trophy text-warning' style='color: #a30c0c'></i> Player-1 Wins! ";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player-2 Wins! <i class='fas fa-trophy' style='color: #a30c0c'></i>";
  } else {
    document.querySelector("h1").innerHTML = "Draw!!";
  }
}