var randomImage = new Array();
var clicks = 0;
var clickOneImg;
var clickTwoImg;
var p = 0;
var objOneID;
var objTwoID;
randomImage[0] = "1.jpg";
randomImage[1] = "2.jpg";
randomImage[2] = "3.jpg";
randomImage[3] = "4.jpg";
randomImage[4] = "5.jpg";
    const numbers = [];
    let i = 0;
    let j = 0;
    var temp = Math.floor(Math.random() * 5);   
    while(i < 6)    {
        let number = Math.floor(Math.random() * 5);
        if(temp == number && j++ < 2)   {
             numbers.push(number);           
             i++;
         } 
         else if(!numbers.includes(number)) {
            numbers.push(number);
            i++;
        }
    }
    numbers.forEach(imagePrinter) ;  
 function clickOclick(obj, no){
    clicks++;
    if(clicks == 1)  {
        clickOneImg = no;        
        console.log(obj);
        objOneID = obj.id;
        document.getElementById("reset").style.display = "block";
    }
    if(clicks == 2) {

        clickTwoImg = no;
        console.log(obj);
        objTwoID = obj.id;
        if(objOneID != objTwoID)
        document.getElementById("btn").style.display = "block";
    }   
    if(clicks == 3)  {
        // document.getElementById("btn").style.display = "none";
        clickOneImg = no;        
        console.log(obj);
        objOneID = obj.id;
        clicks = 1;
    } 
}    
function resetter(){
    clicks = 0;
    const ele = document.getElementById("reset");
    document.getElementById("btn").style.display = "none";
    ele.style.display = "none";
}
function printInternalData(){
    console.log(document.getElementById("container").innerHTML);
    
}
function imagePrinter(number){     
    if(number != temp)   {         
        const imageObj = document.createElement("img");
         imageObj.src = randomImage[number];
         imageObj.id = number;
         
         imageObj.setAttribute('data-ns-test',"img" + (number + 1));
         imageObj.onclick = function(event) {clickOclick(event.target,(number + 1));}
         const body = document.getElementById("container");
         body.appendChild(imageObj); 
    }
    else {
        if(p == 0)  {
            const imageObj = document.createElement("img");
            imageObj.src = randomImage[number];
            imageObj.id = number;
            console.log(imageObj.id );
            imageObj.setAttribute('data-ns-test',"img" +(number + 1));
            imageObj.onclick = function(event) {
                clickOclick(event.target,(number + 1));
                
            }
            p++;
            const body = document.getElementById("container");
            body.appendChild(imageObj);
        }
        else       {
            const imageObj = document.createElement("img");
            imageObj.src = randomImage[number];
            console.log("id " + (number + p));
            imageObj.id = (number + p);
            imageObj.setAttribute('data-ns-test',"img" +(number + 1));
            imageObj.onclick = function(event) {clickOclick(event.target,(number + 1));}
            const body = document.getElementById("container");
            body.appendChild(imageObj);
        }         
    }
}
function verify(){    
    console.log("from verify");
    console.log(clickOneImg + " " + clickTwoImg + " " +objOneID + " " + objTwoID )  ;
    if(clickOneImg == clickTwoImg && objOneID != objTwoID)  {
        const para = document.createElement("p");
        para.innerHTML = "You are a human. Congratulations!";
        const body = document.getElementById("container");
         body.appendChild(para);
        console.log("Happy hai Happy");
        
    }   else{
        const para = document.createElement("p");
        para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
        const body = document.getElementById("container");
         body.appendChild(para);
    }
}