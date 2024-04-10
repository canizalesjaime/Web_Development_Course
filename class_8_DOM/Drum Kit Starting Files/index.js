//document.querySelectorAll("button").addEventListener("click", handleClick)


// let btns=document.querySelectorAll("button");
// for (let btn of btns)
//     btn.addEventListener("click", handleClick)



// function handleClick()
// {
//         alert("I got clicked!")
// }



let btns=document.querySelectorAll("button");
for (let btn of btns)
    btn.addEventListener("click", addNoise)


function addNoise()
{
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}