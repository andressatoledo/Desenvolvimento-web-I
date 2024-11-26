
function exibir(){
    alert("Exibindo");
  }

// function exer10(){

//     const entrada = document.querySelector("#entrada").value;
    
//     if (entrada.length > 0 ){

//         const title = document.createAttribute("title");
//         title.value = entrada;
    
//         const ol = document.querySelector("ol");
//         const li = document.createElement("li");
//         const litext = document.createTextNode(entrada);
     
       

       
//         const alerta = document.createAttribute("alerta");
//         alerta.value = "exibir()";
        
//         li.setAttributeNode(alerta);

//         li.setAttributeNode(title);
//         li.appendChild(litext);
//         ol.appendChild(li);

//         document.querySelector("#entrada").value = '';

//         const total = document.querySelectorAll("li");
//         document.querySelector("#total").innerHTML = total.length;
        
//     }
// }

function exer10() {
 
    const entrada = document.querySelector("#entrada").value;

    if (entrada.length > 0) {

        const title = document.createAttribute("title");
        title.value = entrada;

        const ol = document.querySelector("ol");

        const li = document.createElement("li");
        const litext = document.createTextNode(entrada);

        li.setAttributeNode(title);

        const onclick = document.createAttribute("onclick");
        onclick.value = "exibir()";
      
        li.setAttributeNode(onclick);
        li.appendChild(litext);
        ol.appendChild(li);

        document.querySelector("#entrada").value = '';

        const total = document.querySelectorAll("li");
        document.querySelector("#total").innerHTML = total.length;
    }
}
