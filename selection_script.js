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
     $("#finish").click(function(){
        var first= $("#story").get(0);
        console.log(first);
        var genre= $(first).text();
        console.log(genre);
        $("p").append(genre);

     })
});



 