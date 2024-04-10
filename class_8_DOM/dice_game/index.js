let num1 = Math.ceil(Math.random()*6), num2=Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","./images/dice"+num1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+num2+".png");

if (num1 > num2) document.querySelector("h1").textContent="🚩PLayer 1 Wins!";

else if (num1 < num2) document.querySelector("h1").textContent="PLayer 2 Wins!🚩";

else  document.querySelector("h1").textContent="Draw!";
