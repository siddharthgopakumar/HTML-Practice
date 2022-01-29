
    let sum = 0;
function add(){
    let name = document.getElementById("item-name-input");
    let price = document.getElementById("item-price-input");
    const row=document.createElement("tr");
    document.getElementById("table").appendChild(row);
    let cell=document.createElement("td");
    let cell1=document.createElement("td");
    let cell2 = document.createElement("td");
    cell1.innerHTML= name.value;
    cell2.innerHTML= price.value;
    sum += Number(price.value);
    document.getElementById("total").innerHTML=sum;
    row.appendChild(cell);
    row.appendChild(cell1);
    row.appendChild(cell2);
    name.value = "";
    price.value = "";
}
