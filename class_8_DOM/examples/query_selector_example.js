//document.query : HTML->body->ul->last(third) li
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "jim";

let elem=document.querySelector(".list2");
elem.innerHTML='JIM';

elem = document.querySelector("li a");
elem.style.color='green';

elem = document.querySelector("button");
elem.style.backgroundColor="yellow";

elem = document.querySelector("button").classList.add("huge");
document.querySelector("button").classList.toggle("huge");
document.querySelector("button").classList.toggle("huge");

elem= document.querySelector("").textContent;

elem = document.querySelector("a").attributes;
elem = document.querySelector("a").getAttribute("href");
elem = document.querySelector("a").setAttribute("href", "https://www.bingo.com");

let elems = document.querySelectorAll("li");
alert(elems);
