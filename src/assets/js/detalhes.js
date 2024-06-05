function darkMode() {
    var bodyDarkMode = document.querySelector('body');
    var elementosTituloIds = ['titulo', 'titulo_conteudo'];
    var elementosParagrafoIds = ['texto'];
    var elementosRodapeTitulo = document.querySelectorAll('.titulo-footer');
    var elementosRodapeParagrafo = document.querySelectorAll('.paragrafo-footer');

    if (bodyDarkMode.classList.contains('darkMode')) {
        // Remover o modo escuro e restaurar cores originais
        bodyDarkMode.classList.remove('darkMode');
        bodyDarkMode.style.backgroundColor = '#fff';

        elementosTituloIds.forEach(function(id) {
            var elemento = document.getElementById(id);
            elemento.style.color = elemento.dataset.originalColor || '';
        });

        elementosParagrafoIds.forEach(function(id) {
            var elemento = document.getElementById(id);
            elemento.style.color = elemento.dataset.originalColor || '';
        });

        elementosRodapeTitulo.forEach(function(elemento) {
            elemento.style.color = elemento.dataset.originalColor || '';
        });

        elementosRodapeParagrafo.forEach(function(elemento) {
            elemento.style.color = elemento.dataset.originalColor || '';
        });
    } else {
        // Aplicar o modo escuro
        bodyDarkMode.classList.add('darkMode');
        bodyDarkMode.style.backgroundColor = '#232c35';

        elementosTituloIds.forEach(function(id) {
            var elemento = document.getElementById(id);
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = '#58BDB2';
        });

        elementosParagrafoIds.forEach(function(id) {
            var elemento = document.getElementById(id);
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = 'white';
        });

        elementosRodapeTitulo.forEach(function(elemento) {
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = 'white';
        });

        elementosRodapeParagrafo.forEach(function(elemento) {
            elemento.dataset.originalColor = elemento.style.color || '';
            elemento.style.color = 'white';
        });
    }
}

