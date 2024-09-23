function hasim(){
localStorage.setItem("Username","HasimKhan")
localStorage.setItem("password","4693")
var m=document.getElementById("hasim").value
var n=document.getElementById("demo").value


console.log(localStorage.getItem("Username"));
console.log(localStorage.getItem("password"));

var a=localStorage.getItem("Username")
var b=localStorage.getItem("password")

if(m == a && n == b){
    console.log("login Sucessful");}
else{
console.log("login Failed");}}

    





