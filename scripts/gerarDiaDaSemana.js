function gerarDiaDaSemana (){

        // DATA E HORA
        const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
        const data = new Date().toLocaleDateString("pt-br");
        const hora = new Date().toLocaleTimeString("pt-BR", {
            hour:"numeric",
            minute:"numeric"
        });
        const dataCompleta =` ${diaDaSemana} (${data}) às ${hora}` ;

        return dataCompleta;
}

export default gerarDiaDaSemana ;