function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.parentNode.id);      
  } 
  function replace (node1, data1) {        
      data1.appendChild(node1);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.parentNode.appendChild(document.getElementById(data).children[0]);  
    replace(ev.target,document.getElementById(data))          
  }
