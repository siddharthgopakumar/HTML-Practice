function testFunction() {
    var one = document.querySelectorAll("[data-ns-test=price]");   
    let sum = 0; 
    for(let i = 0; i < one.length; i++) {
        sum += Number(one[i].textContent);
    }
    var two = document.querySelectorAll("[data-ns-test=grandTotal]");  
    two[0].innerHTML = sum;
    console.log(two[0].textContent)
    console.log(sum);
}