const firstH = document.querySelector(".firstH");
const secondH = document.querySelector(".secondH");
const thirdH = document.querySelector(".thirdH");
const btnH = document.querySelector(".btnH");
btnH.addEventListener("click", ()=> {
    setTimeout(()=> {
        firstH.style.color = "red";
        setTimeout(()=> {
            secondH.style.color = "blue";
            setTimeout(()=> {
                thirdH.style.color = "green";
            },2000);
        },3000);
    },1000);  
});