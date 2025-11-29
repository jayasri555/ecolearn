function signup(){let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;
localStorage.setItem("ecoUser",user);localStorage.setItem("ecoPass",pass);
alert("Account created!");window.location.href="index.html";}
function login(){let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;
let u=localStorage.getItem("ecoUser");let p=localStorage.getItem("ecoPass");
if(user===u && pass===p){window.location.href="dashboard.html";}
else{alert("Invalid login");}}