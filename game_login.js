var player1Name="";
var player2Name="";
function newScreen(){
  player1Name= document.getElementById("p1").value;
  player2Name= document.getElementById("p2").value;
  localStorage.setItem("Player1NAME", player1Name);
  localStorage.setItem("Player2NAME", player2Name);
  window.location="game_page.html";
}