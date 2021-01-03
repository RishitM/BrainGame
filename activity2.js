getScore=0
function reload(){
    window.location="activity_1.html"
}
function Get(){
   getScore=localStorage.getItem("SaveScore");
   document.getElementById("points").innerHTML = ("Score:"+ getScore)
}
