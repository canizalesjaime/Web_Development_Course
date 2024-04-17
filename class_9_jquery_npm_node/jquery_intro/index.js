//if you include it in head for some reason
///////////////////////////////////////////////////////////////////////////////
$(document).ready(function()  {
    $("h1").css("color", "red");
});

// returns an object where all the properties share selector name
///////////////////////////////////////////////////////////////////////////////
console.log($("h1"));

// returns the first element with the selector name 
///////////////////////////////////////////////////////////////////////////////
console.log(document.querySelector("h1"));

// returns an array where all the properties share selector name
/////////////////////////////////////////////////////////////////////////////// 
console.log(document.querySelectorAll("h1"));

$("h1").text("bye");

$("button").html("<em> Hey </em>");

// one parameter is get, two parameters is set
///////////////////////////////////////////////////////////////////////////////
console.log($("img").attr("src"));

$("a").css("color", "orange");
$("a").attr("href","https://www.yahoo.com");

console.log($("h1").attr("class"));


// add event listener alternatives
///////////////////////////////////////////////////////////////////////////////
$("h1").click( function() {
    $("h1").css("color","purple");
    });

for (let i = 0; i < 5; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){
                            document.querySelector("h1").style.color="purple";
                                            });
}

//but instead of that for loop we can just:
$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keydown(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "yellow");
});

//Adding and removing elements with jquery
///////////////////////////////////////////////////////////////////////////////
$("h1").before("<button>New Before</button>");

$("h1").after("<button>New Before</button>");

//adds inside h1
$("h1").prepend("<button>New Before</button>");

//adds inside h1
$("h1").append("<button>New Before</button>");

// Website animation
///////////////////////////////////////////////////////////////////////////////
$("button").click(function(){
    $("h1").animate({opacity: .5});
});
