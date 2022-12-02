var a = document.getElementById("song");
var b = document.getElementById("video");
function submit(){
    document.getElementById("BDY").style.display = "block";
    var a = document.getElementById("B").value; 
    

}
function BD(){
    var a = document.getElementById("B").value; 
    alert("Happy Birthday To " + a + ". Here is my gift.") 
    document.getElementById("Birth").style.display = "block";
    document.getElementById("BDY").style.display = "none";
    document.getElementById("hey").style.display = "none";
    document.getElementById("B").style.display = "none";
    document.getElementById("and").style.display = "block"
    document.getElementById("video").style.display = "none"
    document.body.style.backgroundImage = "url('rick-astly-rick-rolled.gif')"
    var a = document.getElementById("song");
    a.play();
    a.loop();
   
    
}
