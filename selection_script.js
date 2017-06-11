
$(document).ready(function(){
    $("#story").hide();
    $("#finished").hide();
    console.log("hello");
    $(function(){
    $("#menu").menu();
  });
    //genre
    $("#romance").click(function(){
        $("#story").append("<li>romance story</li>");
        $("#genre").text("Romance");
    })
    $("#horror").click(function(){
        $("#story").append("<li>horror story</li>");
        $("#genre").text("Horror");
    })
     $("#comedy").click(function(){
        $("#story").append("<li>comedy story</li>");
        $("#genre").text("Comedy");
    })
     $("#mystery").click(function(){
        $("#story").append("<li>mystery story</li>");
        $("#genre").text("Mystery");
    })
     $("#dystopian").click(function(){
        $("#story").append("<li>dystopian story</li>");
        $("#genre").text("Dystopian");
    })
     //setting
     $("#castle").click(function(){
        $("#story").append("<li>haunted castle</li>");
        $("#setting").text("Castle");
    })
    $("#ship").click(function(){
        $("#story").append("<li>pirate ship</li>");
        $("#setting").text("Ship");
    })
    $("#shop").click(function(){
        $("#story").append("<li>antique shop</li>");
        $("#setting").text("Shop");
    })
    $("#home").click(function(){
        $("#story").append("<li>retirement home</li>");
        $("#setting").text("Home");
    })
     $("#oasis").click(function(){
        $("#story").append("<li>desert oasis</li>");
        $("#setting").text("Desert");
    })
     //character
     $("#driver").click(function(){
        $("#story").append("<li>taxi driver</li>");
        $("#character").text("Driver");
    })
     $("#guard").click(function(){
        $("#story").append("<li>prison guard</li>");
        $("#character").text("Guard");
    })
     $("#counselor").click(function(){
        $("#story").append("<li>marriage counselor</li>");
        $("#character").text("Counselor");
    })
     $("#contestant").click(function(){
        $("#story").append("<li>beauty pageant contestant</li>");
        $("#character").text("Contestant");
    })
     $("#singer").click(function(){
        $("#story").append("<li>lead singer of an unsuccessful band</li>");
        $("#character").text("Singer");
    })
     //sidekick
     $("#lover").click(function(){
        $("#story").append("<li>clingy love interest</li>");
        $("#sidekick").text("Lover");
    })
     $("#dog").click(function(){
        $("#story").append("<li>talking dog</li>");
        $("#sidekick").text("Dog");
    })
     $("#coworker").click(function(){
        $("#story").append("<li>sassy coworker</li>");
        $("#sidekick").text("Coworker");
    })
     $("#sibling").click(function(){
        $("#story").append("<li>annoying sibling</li>");
        $("#sidekick").text("Sibling");
    })
     //plot
     $("#relative").click(function(){
        $("#story").append("<li>their unknown relative died and left them millions</li>");
        $("#plot").text("Relative");
    })
     $("#serial").click(function(){
        $("#story").append("<li>there is a mysterious serial killer on the loose</li>");
        $("#plot").text("Serial Killer");
    })
     $("#manipulated").click(function(){
        $("#story").append("<li>they are being manipulated by a rich child</li>");
        $("#plot").text("Rich Kid");
    })
     $("#engaged").click(function(){
        $("#story").append("<li>they are about to engaged to a stranger</li>");
        $("#plot").text("Engaged");
    })
     $("#lottery").click(function(){
        $("#story").append("<li>they won the lottery but lost the ticket</li>");
        $("#plot").text("Lottery");
    })


     $("#finish").click(function(){
        $("#finished").show();
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
        $("#genre1").append(genre);
        $("#setting1").append(setting);
        $("#character1").append(character);
        $("#sidekick1").append(sidekick);
        $("#plot1").append(plot);


     });
});



 