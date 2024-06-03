
//Função darkMode
function darkMode() {

    //Mudando a cor do Background buscando a classe estilizada do CSS via DOM 
    document.body.classList.toggle('darkMode');

    //Inserindo ID's em um Array
    var elementosTituloIds = ['titulo', 'titulo_atencaoRiscos', 'titulo_conteudo1', 'titulo_conteudo2', 'titulo_conteudo3', 'titulo_conteudo4'];
    var elementosParagrafoIds = ['paragrafo_conteudo1', 'paragrafo_conteudo2', 'paragrafo_conteudo3', 'paragrafo_conteudo4'];
    
    //Inserindo as Classes em um Array
    var elementosRodapeTitulos = document.querySelectorAll('.titulo-footer');
    var elementosRodapeParagrafos = document.querySelectorAll('.paragrafo-footer');


    elementosTituloIds.forEach(function(id) {
        var elemento = document.getElementById(id);
        if (document.body.classList.contains('darkMode')) {
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = '#58BDB2';
        } else {
            elemento.style.color = elemento.dataset.originalColor;
        }
    });

    elementosParagrafoIds.forEach(function(id) {
        var elemento = document.getElementById(id);
        if (document.body.classList.contains('darkMode')) {
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = 'white';
        } else {
            elemento.style.color = elemento.dataset.originalColor;
        }
    });

    elementosRodapeTitulos.forEach(function(elemento) {
        if (document.body.classList.contains('darkMode')) {
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = 'white';
        } else {
            elemento.style.color = elemento.dataset.originalColor;
        }
    });


    elementosRodapeParagrafos.forEach(function(elemento) {
        if (document.body.classList.contains('darkMode')) {
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = 'white';
        } else {
            elemento.style.color = elemento.dataset.originalColor;
        }
    });
}
