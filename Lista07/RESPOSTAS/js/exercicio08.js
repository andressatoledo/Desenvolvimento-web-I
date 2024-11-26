function exer8(){

    const entrada = document.querySelector("#entrada").value;
    
    if (entrada.length > 0 ){

        const title = document.createAttribute("title");
        title.value = entrada;
    
        const ol = document.querySelector("ol");
        const li = document.createElement("li");
        const litext = document.createTextNode(entrada);

        li.setAttributeNode(title);
        li.appendChild(litext);
        ol.appendChild(li);
    }
}


