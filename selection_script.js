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
        $("#story").append("<li>dog</li>");
    })
     $("#coworker").click(function(){
        $("#story").append("<li>sassy coworker</li>");
    })
     $("#sibling").click(function(){
        $("#story").append("<li>annoying sibling</li>");
    })
     $("#finish").click(function(){
        var first= $("li").get(0);
        var genre= $(first).text();
        var second= $("li").get(1);
        var setting= $(second).text();
        console.log(setting);
        var third= $("li").get(2);
        var character= $(third).text();
        var fourth= $("li").get(3);
        var sidekick= $(fourth).text();
        $("#genre").append(genre);
        $("#setting").append(setting);
        $("#character").append(character);
        $("#sidekick").append(sidekick);


     });
});



 