var randomNumber1 = Math.floor(Math.random() * 6) + 1; //select numbers from 1-6...
var randomDiceImage = "dice" + randomNumber1 + ".png"; //to select image...
var randomImageSource = "images/" + randomDiceImage; //to get image path...(any random of six images)
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 😎😎Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "😎😎 Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "😒 Draw!";
}
