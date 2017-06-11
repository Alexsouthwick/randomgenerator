var list= "";
var genre= document.getElementById("");

$(document).ready(function(){
    // $("#story").hide();
    console.log("hello");
    $(function(){
    $("#menu").menu();
  });
    $("#romance").click(function(){
        $("#story").append("<li>romance</li>");
    })
    $("#horror").click(function(){
        $("#story").append("<li>horror</li>");
    })
     $("#comedy").click(function(){
        $("#story").append("<li>comedy</li>");
    })
     $("#castle").click(function(){
        $("#story").append("<li>haunted castle</li>");
    })
    $("#ship").click(function(){
        $("#story").append("<li>pirate ship</li>");
    })
     $("#oasis").click(function(){
        $("#story").append("<li>desert oasis</li>");
    })
     $("#finish").click(function(){
        var first= $("li").get(0);
        var genre= $(first).text();
        var second= $("li").get(1);
        var setting= $(second).text();
        $("#genre").append(genre);
        $("#setting").append(setting);


     });
});



 