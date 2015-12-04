var score = 0;
var audio = new Audio('');
// Game function
function doClick() {  // When you click the picture
  score = score + 3;
  if (score > 1000) document.write("Why are you still clicking?");
  document.getElementById("scoretext").innerHTML = score;
  audio.play();
}
// Secrets
function youWin() {  // Secret: Win the game
  var overkill = new Audio('');
  overkill.play();
  score = score + 10000000000;
  document.write("you win! perfect!<br>");
  document.write("With a score of: " + score);
}
//function youLose() {  // Secret: Get to 1000 points
//  score = 999;
//  audio.play();
//  document.getElementById("scoretext").innerHTML = score;
//}
// Initializer
function initAll(picname, scorename="Score: ", width=200) {
  var x = document.createElement("IMG");
  x.setAttribute("src", "http://u.cubeupload.com/Elliot/examplebobblehead.png");
  x.setAttribute("width", width);
  x.setAttribute("onClick", "doClick()");
  document.body.appendChild(x);
  var y = document.createElement("P");
  var z = document.createElement("P");
  y.setAttribute("id", "name");
  z.setAttribute("id", "scoretext");
  document.body.appendChild(y);
  document.body.appendChild(z);
  document.getElementById("name").innerHTML = scorename;
  document.getElementById("scoretext").innerHTML = score;
}
