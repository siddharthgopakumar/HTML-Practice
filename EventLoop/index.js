function callAux()   {
    setInterval(setInt, 3000);  // Keeps on printing.
    setTimeout(setTimeOut,4000); // Prints only once after the given time.
}   // Latentflip.com check oout how call stack, web apis and callback queues work.

function setInt(){
    const div = document.createElement("div");
    div.innerHTML = "Hey how are you";
    const body = document.querySelector("body");
    body.appendChild(div);
}
function setTimeOut(){
    const div = document.createElement("div");
    div.innerHTML = "I am doing good, how about you?";
    const body = document.querySelector("body");
    body.appendChild(div);
}