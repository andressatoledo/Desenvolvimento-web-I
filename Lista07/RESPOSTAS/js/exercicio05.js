function exer5(){

    entrada = document.querySelector("#entrada").value;
    
    const p = document.createElement("p");
    const ptext = document.createTextNode(entrada);
    p.appendChild(ptext);

    const saida = document.querySelector("#saida");
    saida.appendChild(p);
}


