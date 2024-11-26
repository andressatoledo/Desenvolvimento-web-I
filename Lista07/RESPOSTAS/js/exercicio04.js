function exer4(){

    const p = document.createElement("p");
    const ptext = document.createTextNode("Andressa");
    p.appendChild(ptext);

    const saida = document.querySelector("#saida");
    saida.appendChild(p);
}


