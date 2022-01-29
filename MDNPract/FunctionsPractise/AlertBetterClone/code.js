const btn = document.querySelector("button");
btn.addEventListener("click",() => displayMessage('Your inbox is almost full — delete some mails', 'warning'));

function displayMessage(msgText, msgType)   {
    const html = document.querySelector("html");

    const panel = document.createElement("div");
    panel.setAttribute("class","msgBox");
    html.appendChild(panel);
    html.style.backgroundImage = "url('https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Collage_cover_1_YAP7dMt.max-1000x1000.png')";

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.addEventListener("click",()=> panel.parentNode.removeChild(panel));

    if (msgType === 'warning') {
        msg.style.backgroundImage = "url('https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/functions/icons/warning.png')";
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = "url('https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/functions/icons/chat.png')";
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }
}
