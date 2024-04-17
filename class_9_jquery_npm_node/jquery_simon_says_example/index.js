// Main
///////////////////////////////////////////////////////////////////////////////
let buttonColors=["red","blue","green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];
let level=0;
let started = false;

$(".btn").click(function(){
    let userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    if(userChosenColor === gamePattern[userClickedPattern.length-1])
    {
        playSound(userChosenColor);
        animatePress(userChosenColor);
    }
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},500);
        $("h1").text("Game Over, Press Any Key to Restart");
        gamePattern=[];
        userClickedPattern=[];
        level=0;
        started=false;
    }
    
    if(userClickedPattern.length === gamePattern.length && gamePattern.length !=0)
    {
        setTimeout(nextSequence, 500);
        userClickedPattern=[];
    }
    
});


$("html").keydown(function(){
    if (!started)
    {
        started = true;
        nextSequence();
    }   
}); 


///////////////////////////////////////////////////////////////////////////////
function nextSequence()
{
    level++;
    $("h1").text("Level "+level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("."+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);  
}


///////////////////////////////////////////////////////////////////////////////
function playSound(color)
{
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}


///////////////////////////////////////////////////////////////////////////////
function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){$("#"+currentColor).removeClass("pressed");},100);
}
