function game(){
    const button = document.querySelector("#button");  
        button.addEventListener('click', ()=>{        
            const input = document.querySelector("input").value; 
            document.querySelector("#input").value = "";
            document.querySelector("#quesses").innerHTML = document.querySelector("#quesses").innerHTML + " " + input;
            let randomValue = Math.floor(Math.random() * 100 + 1);
            if(randomValue == input)    {
                alert(`Correct Answer!`);
            }   else {
                alert(`You are wrong! and the correct answer is ${randomValue}`);
            }
        });
        function setGameOver() {
            guessField.disabled = true;
            guessSubmit.disabled = true;
            resetButton = document.createElement('button');
            resetButton.textContent = 'Start new game';
            document.body.append(resetButton);
            resetButton.addEventListener('click', resetGame);
          }
}
game();