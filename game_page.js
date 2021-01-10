first_lettter="";
get_word="";
p1Q="";
p1A="";
score1=0;
score2=0;
var Player1name= localStorage.getItem("Player1NAME");
var Player2name= localStorage.getItem("Player2NAME");
document.getElementById("Name1").innerHTML= Player1name + ":";
document.getElementById("Name2").innerHTML= Player2name + ":";
document.getElementById("Score1").innerHTML= score1;
document.getElementById("Score2").innerHTML= score2;
p1Q=Player1name; 
document.getElementById("playerQ").innerHTML=Player1name;
p1A=Player2name;
 document.getElementById("playerA").innerHTML=Player2name;
 function Send(){
       get_word=document.getElementById("Word").value;
       word=get_word.toLowerCase();
       console.log(word);
       first_letter=word.charAt(1);
       console.log(first_letter);
       last_letter=word.length-1;
       last_letter=word.charAt(last_letter);
       console.log(last_letter);
       middle_letter=Math.floor(word.length/2);
       middle_letter=word.charAt(middle_letter);
       console.log(middle_letter);
       remove_first_letter=word.replace(first_letter,"_");
       remove_middle_letter=remove_first_letter.replace(middle_letter,"_");
       remove_last_letter=remove_middle_letter.replace(last_letter,"_");
       console.log(remove_last_letter);
       final_input_box="<br><input placeholder='Guess the Word'id='answer'class='form-control'><br>";
       check_button="<button onclick='check()' class='btn-success'>Check</button>";
       document.getElementById("output").innerHTML= "<center>"+remove_last_letter + final_input_box + check_button+"</center>";
       document.getElementById("Word").value=""
 }
 function check(){
       get_answer=document.getElementById("answer").value;
       answer=get_answer.toLowerCase();
       if(answer==word){
             if(p1A==Player1name){
                   score1+=1;
                   console.log("anything");
                   document.getElementById("Score1").innerHTML= score1;
                   p1Q=Player1name;
                   p1A=Player2name;
                   document.getElementById("playerA").innerHTML=p1A;
                   document.getElementById("playerQ").innerHTML=p1Q;
                  
             }
             else if(p1A==Player2name){
                  score2+=1;
                   document.getElementById("Score2").innerHTML= score2;
                   p1Q=Player2name;
                   p1A=Player1name;
                   document.getElementById("playerQ").innerHTML=p1Q;
                   document.getElementById("playerA").innerHTML=p1A;
                   
             }
             
       }
       else if(answer!=word){
            if(p1A==Player1name){
                  p1Q=Player1name;
                  p1A=Player2name;
                  document.getElementById("playerA").innerHTML=p1A;
                  document.getElementById("playerQ").innerHTML=p1Q;
                 
            }
            else if(p1A==Player2name){
                  p1Q=Player2name;
                  p1A=Player1name;
                  document.getElementById("playerQ").innerHTML=p1Q;
                  document.getElementById("playerA").innerHTML=p1A;
                  
            }
       }
       document.getElementById("output").innerHTML=""
 }