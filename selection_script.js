
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
        $("#genre").text("1. Romance");
    })
    $("#horror").click(function(){
        $("#story").append("<li>horror story</li>");
        $("#genre").text("1. Horror");
    })
     $("#comedy").click(function(){
        $("#story").append("<li>comedy story</li>");
        $("#genre").text("1. Comedy");
    })
     $("#mystery").click(function(){
        $("#story").append("<li>mystery story</li>");
        $("#genre").text("1. Mystery");
    })
     $("#dystopian").click(function(){
        $("#story").append("<li>dystopian story</li>");
        $("#genre").text("1. Dystopian");
    })
     //setting
     $("#castle").click(function(){
        $("#story").append("<li>haunted castle</li>");
        $("#setting").text("2. Castle");
    })
    $("#ship").click(function(){
        $("#story").append("<li>pirate ship</li>");
        $("#setting").text("2. Ship");
    })
    $("#shop").click(function(){
        $("#story").append("<li>antique shop</li>");
        $("#setting").text("2. Shop");
    })
    $("#home").click(function(){
        $("#story").append("<li>retirement home</li>");
        $("#setting").text("2. Home");
    })
     $("#oasis").click(function(){
        $("#story").append("<li>desert oasis</li>");
        $("#setting").text("2. Desert");
    })
     //character
     $("#driver").click(function(){
        $("#story").append("<li>taxi driver</li>");
        $("#character").text("3. Driver");
    })
     $("#guard").click(function(){
        $("#story").append("<li>prison guard</li>");
        $("#character").text("3. Guard");
    })
     $("#counselor").click(function(){
        $("#story").append("<li>marriage counselor</li>");
        $("#character").text("3. Counselor");
    })
     $("#contestant").click(function(){
        $("#story").append("<li>beauty pageant contestant</li>");
        $("#character").text("3. Contestant");
    })
     $("#singer").click(function(){
        $("#story").append("<li>lead singer of an unsuccessful band</li>");
        $("#character").text("3. Singer");
    })
     //sidekick
     $("#lover").click(function(){
        $("#story").append("<li>clingy love interest</li>");
        $("#sidekick").text("4. Lover");
    })
     $("#dog").click(function(){
        $("#story").append("<li>talking dog</li>");
        $("#sidekick").text("4. Dog");
    })
     $("#coworker").click(function(){
        $("#story").append("<li>sassy coworker</li>");
        $("#sidekick").text("4. Coworker");
    })
     $("#sibling").click(function(){
        $("#story").append("<li>annoying sibling</li>");
        $("#sidekick").text("4. Sibling");
    })
     //plot
     $("#relative").click(function(){
        $("#story").append("<li>their unknown relative died and left them millions</li>");
        $("#plot").text("5. Relative");
    })
     $("#serial").click(function(){
        $("#story").append("<li>there is a mysterious serial killer on the loose</li>");
        $("#plot").text("5. Serial Killer");
    })
     $("#manipulated").click(function(){
        $("#story").append("<li>they are being manipulated by a rich child</li>");
        $("#plot").text("5. Rich Kid");
    })
     $("#engaged").click(function(){
        $("#story").append("<li>they are about to engaged to a stranger</li>");
        $("#plot").text("5. Engaged");
    })
     $("#lottery").click(function(){
        $("#story").append("<li>they won the lottery but lost the ticket</li>");
        $("#plot").text("5. Lottery");
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



 