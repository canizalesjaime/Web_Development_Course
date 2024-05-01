let btns=document.querySelectorAll("button");
let sounds=["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
let images=["crash","kick","snare","tom1","tom2","tom3","tom4"];
document.addEventListener("keydown", function (event){keyToSound(event.key)});
 

for (let i=0; i < btns.length; i++)
{
    btns[i].addEventListener("click", 
                             function()
                            {
                                addAnimation(btns[i].textContent);
                                let audio = new Audio("sounds/"+sounds[i]+".mp3"); 
                                audio.play();
                            });
    let imageName = "images/"+images[i]+".png";
    btns[i].style.backgroundImage="url("+imageName+")";
}

function keyToSound(keyChar)
{
    addAnimation(keyChar);
    let keyToSoundMap = {"w": "./sounds/crash.mp3", 
                         "a": "./sounds/kick-bass.mp3","s":"./sounds/snare.mp3",
                         "d": "./sounds/tom-1.mp3", "j": "./sounds/tom-2.mp3",
                         "k": "./sounds/tom-3.mp3", "l": "./sounds/tom-4.mp3"}
    let audio = new Audio(keyToSoundMap[keyChar]);
    audio.play();
}

function addAnimation(drum)
{
    let btn = document.querySelector("."+drum);
    btn.classList.add("pressed");
    setTimeout(function(){btn.classList.remove("pressed");}, 100);
}