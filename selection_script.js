var list= "";
var genre= document.getElementById("");

$(document).ready(function(){
    // $("#story").hide();
    console.log("hello");
    $(function(){
    $("#menu").menu();
  });
    //genre
    $("#romance").click(function(){
        $("#story").append("<li>romance story</li>");
    })
    $("#horror").click(function(){
        $("#story").append("<li>horror story</li>");
    })
     $("#comedy").click(function(){
        $("#story").append("<li>comedy story</li>");
    })
     $("#mystery").click(function(){
        $("#story").append("<li>mystery story</li>");
    })
     $("#dystopian").click(function(){
        $("#story").append("<li>dystopian story</li>");
    })
     //setting
     $("#castle").click(function(){
        $("#story").append("<li>haunted castle</li>");
    })
    $("#ship").click(function(){
        $("#story").append("<li>pirate ship</li>");
    })
    $("#shop").click(function(){
        $("#story").append("<li>antique shop</li>");
    })
    $("#home").click(function(){
        $("#story").append("<li>retirement home</li>");
    })
     $("#oasis").click(function(){
        $("#story").append("<li>desert oasis</li>");
    })
     //character
     $("#driver").click(function(){
        $("#story").append("<li>taxi driver</li>");
    })
     $("#guard").click(function(){
        $("#story").append("<li>prison guard</li>");
    })
     $("#counselor").click(function(){
        $("#story").append("<li>marriage counselor</li>");
    })
     $("#contestant").click(function(){
        $("#story").append("<li>beauty pageant contestant</li>");
    })
     $("#singer").click(function(){
        $("#story").append("<li>lead singer of an unsuccessful band</li>");
    })
     //sidekick
     $("#lover").click(function(){
        $("#story").append("<li>clingy love interest</li>");
    })
     $("#dog").click(function(){
        $("#story").append("<li>talking dog</li>");
    })
     $("#coworker").click(function(){
        $("#story").append("<li>sassy coworker</li>");
    })
     $("#sibling").click(function(){
        $("#story").append("<li>annoying sibling</li>");
    })
     //plot
     $("#relative").click(function(){
        $("#story").append("<li>Their unknown relative died and left them millions</li>");
    })
     $("#serial").click(function(){
        $("#story").append("<li>There is a mysterious serial killer on the loose</li>");
    })
     $("#manipulated").click(function(){
        $("#story").append("<li>They are being manipulated by a rich child</li>");
    })
     $("#engaged").click(function(){
        $("#story").append("<li>They are about to engaged to a stranger</li>");
    })
     $("#lottery").click(function(){
        $("#story").append("<li>They won the lottery but lost the ticket</li>");
    })


     $("#finish").click(function(){
        var first= $("li").get(0);
        var genre= $(first).text();
        console.log(first);
        var second= $("li").get(1);
        var setting= $(second).text();
        console.log(setting);
        var third= $("li").get(2);
        var character= $(third).text();
        var fourth= $("li").get(3);
        var sidekick= $(fourth).text();
        var fifth= $("li").get(4);
        var plot= $(fifth).text();
        $("#genre").append(genre);
        $("#setting").append(setting);
        $("#character").append(character);
        $("#sidekick").append(sidekick);
        $("#plot").append(plot);


     });
});



 