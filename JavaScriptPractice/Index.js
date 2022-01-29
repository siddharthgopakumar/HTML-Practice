function alertFunctionality()    {
    alert("This is a message written using \"alert\"");
}
function promtFunctionality()   {
    const INPUT_FROM_PROMPT = prompt("This is a message using \"Prompt\"");
    console.log("The input from prompt is ",INPUT_FROM_PROMPT );
}
function confirmFunctionality() {
    const INPUT_USING_CONFIRM = confirm("Are you sure?");
    console.log("The input from confirm is",INPUT_USING_CONFIRM );
}
const INPUT_ELEMENT = document.createElement('input'); // Create a tag <input></input>
INPUT_ELEMENT.setAttribute("class","classname");  // I can use any attribute in place of class.