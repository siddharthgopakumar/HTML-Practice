const btn = document.querySelector("button");
btn.addEventListener("click",() =>{
    const input = document.querySelector("#textBox");
    const para = document.createElement("p");
    para.innerHTML = handleValue(input.value, toUpper);
    document.querySelector("body").appendChild(para);
});
function toUpper(value)    {
    return (value.toUpperCase());
}
function handleValue(name, cb)  {
    const fullName = `${name} Smith`;
    return cb(fullName);
}

