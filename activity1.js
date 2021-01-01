score=0
function update(){
     score=score+1;
     document.getElementById("Score").innerHTML = "Score:"+ score
     console.log("score ="+ score)
}
function save(){
    localStorage.setItem("SaveScore",score);
}
function next(){
    window.location="https://www.youtube.com"
}