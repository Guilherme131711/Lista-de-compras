import { criarItemDaLista } from "./scripts/criarItemDaLista.js";   
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listaDeCompras = document.getElementById('lista-de-compras');
const btnSalvar = document.getElementById('adicionar-item');


btnSalvar.addEventListener('click', (evento) => {
    evento.preventDefault(); // evita o comportamento padrão do formulário (carregar a página);//

    const listaItem  = criarItemDaLista(); 

    listaDeCompras.appendChild(listaItem);
   
    verificarListaVazia(listaDeCompras);

});



verificarListaVazia(listaDeCompras);
