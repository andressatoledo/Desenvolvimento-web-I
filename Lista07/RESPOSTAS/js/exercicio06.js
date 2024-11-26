function exer6(){

    const entrada = document.querySelector("#entrada").value;
    const title = document.createAttribute("title");
    title.value = "Nome fornecido";

    const p = document.createElement("p");
    const ptext = document.createTextNode(entrada);

    p.setAttributeNode(title);
    p.appendChild(ptext);

    const saida = document.querySelector("#saida");
    saida.appendChild(p);
}

