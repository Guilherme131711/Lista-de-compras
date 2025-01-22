import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById('input-item');
let contador ="0";

export function criarItemDaLista (){

    if (inputItem.value=== ""){  // evita criar uma lista vazia e avisa para o usuario
        alert("Por favor, insira um item válido.");
        return;
    }

    // CRIA UM NOVO ITEM NA LISTA DE COMPRAS;
    const listaItem = document.createElement("li");

    // CRIA O CONTAINER DA LISTA COM O CHECKBOX E O NOME DO ITEM;
    const containerDaLista = document.createElement("div");
    containerDaLista.classList.add("lista-item-container");

    // CRIA O INPUT DO CHECKBOX E O NOME DO ITEM;
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id= `checkbox-${contador++}`;

    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = inputItem.value;

    inputCheckbox.addEventListener('click', function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        }else{
            nomeItem.style.textDecoration = "none";
        }
    });

    // ADICIONA OS ELEMENTOS NA LISTA;

    const dataCompleta = gerarDiaDaSemana();

    containerDaLista.appendChild(inputCheckbox);
    containerDaLista.appendChild(nomeItem);
    listaItem.appendChild(containerDaLista);


    
    // TEXTO QUE MOSTRA DATA E HORA NA ORDEM CORRETA DE ACORDO COM O FIGMA;
    const textoData = document.createElement("p");
    textoData.classList.add("texto-data");
    textoData.innerHTML = `${dataCompleta}`;
    listaItem.appendChild(textoData);
  
    return listaItem;

};