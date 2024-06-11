function darkMode() {
    var textosId = ['titulo', 'titulo_proximoConteudo','titulo_conteudo', 'texto'];
    
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
    var textosId = ['titulo', 'titulo_proximoConteudo', 'titulo_conteudo', 'texto'];
    
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

function ouvir(){
    // Obtém o texto do parágrafo
    var texto = document.getElementById('texto').innerText;
    
    // Cria uma nova instância de SpeechSynthesisUtterance
    var fala = new SpeechSynthesisUtterance(texto);
    
    // Define o idioma (opcional)
    fala.lang = 'pt-BR';
    
    // Usa a SpeechSynthesis para falar o texto
    window.speechSynthesis.speak(fala);
};