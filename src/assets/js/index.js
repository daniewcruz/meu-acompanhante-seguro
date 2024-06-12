function darkMode() {
    var textosId = ['titulo', 'titulo_atencaoRiscos', 'secaoConteudo','titulo_conteudo1', 'titulo_conteudo2', 
    'titulo_conteudo3', 'titulo_conteudo4', 'paragrafo_conteudo1', 'paragrafo_conteudo2', 
    'paragrafo_conteudo3', 'paragrafo_conteudo4'];
    
    var RodapeTitulos = document.querySelectorAll('.titulo-footer');
    var RodapeParagrafos = document.querySelectorAll('.paragrafo-footer');

    document.body.style.backgroundColor = '#232c35'
    document.body.style.transition = '600ms'

        textosId.forEach(function(id){ 
            
            var elemento = document.getElementById(id);
                elemento.dataset.originalColor = elemento.style.color || '';
                elemento.style.color = '#FBEEE5';
            })

            RodapeTitulos.forEach(function(elemento) {
                    elemento.dataset.originalColor = elemento.style.color || '';
                    elemento.style.color = '#FBEEE5';

                })
        
        
            RodapeParagrafos.forEach(function(elemento){
                elemento.dataset.originalColor = elemento.style.color || '';
                    elemento.style.color = '#FBEEE5';
                })
}    

function lightMode() {
    var textosId = ['titulo', 'titulo_atencaoRiscos', 'secaoConteudo' ,'titulo_conteudo1', 'titulo_conteudo2', 
    'titulo_conteudo3', 'titulo_conteudo4', 'paragrafo_conteudo1', 'paragrafo_conteudo2', 
    'paragrafo_conteudo3', 'paragrafo_conteudo4'];
    
    var RodapeTitulos = document.querySelectorAll('.titulo-footer');
    var RodapeParagrafos = document.querySelectorAll('.paragrafo-footer');

    document.body.style.backgroundColor = '#FBEEE5'
    document.body.style.transition = '600ms'

        textosId.forEach(function(id){ 
            
            var elemento = document.getElementById(id);
                elemento.dataset.originalColor = elemento.style.color || '';
                elemento.style.color = '#313040'
            })

            RodapeTitulos.forEach(function(elemento) {
                elemento.dataset.originalColor = elemento.style.color || '';
                elemento.style.color = '#313040'
                })
        
        
            RodapeParagrafos.forEach(function(elemento){
                elemento.dataset.originalColor = elemento.style.color || '';
                elemento.style.color = '#313040'
                })

}