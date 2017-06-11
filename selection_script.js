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
        $("#story").append("<li>romance</li>");
    })
    $("#horror").click(function(){
        $("#story").append("<li>horror</li>");
    })
     $("#comedy").click(function(){
        $("#story").append("<li>comedy</li>");
    })
     $("#mystery").click(function(){
        $("#story").append("<li>mystery</li>");
    })
     $("#dystopian").click(function(){
        $("#story").append("<li>dystopian</li>");
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
     $("#finish").click(function(){
        var first= $("li").get(0);
        var genre= $(first).text();
        var second= $("li").get(1);
        var setting= $(second).text();
        var third= $("li").get(2);
        var character= $(third).text();
        $("#genre").append(genre);
        $("#setting").append(setting);
        $("#character").append(character);


     });
});



 