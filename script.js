function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value;

if(message == "") return;

let chatbox = document.getElementById("chatbox");

let userMsg = document.createElement("div");
userMsg.className = "message user";
userMsg.innerText = message;

chatbox.appendChild(userMsg);

let botReply = getBotReply(message);

setTimeout(function(){

let botMsg = document.createElement("div");
botMsg.className = "message bot";
botMsg.innerText = botReply;

chatbox.appendChild(botMsg);

chatbox.scrollTop = chatbox.scrollHeight;

},800);

input.value="";
}

function getBotReply(msg){

msg = msg.toLowerCase();

if(msg.includes("hello") || msg.includes("hi"))
return "Hello 👋 How can I help you?";

else if(msg.includes("name"))
return "I am your Smart Chatbot 🤖";

else if(msg.includes("course"))
return "Computer Engineering is a great field!";

else if(msg.includes("bye"))
return "Bye! Have a nice day 😊";

else
return "Sorry, I don't understand that.";
}