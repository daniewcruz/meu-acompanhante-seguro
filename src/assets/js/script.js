window.onload = function() {
    let elementBody = document.querySelector('body');
    let elementBtnIncreaseFont = document.getElementById('aumentar_fonte');
    let elementBtnDecreaseFont = document.getElementById('diminuir_fonte');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    let fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    let increaseDecrease = 11;
    // Variável para controlar o número de cliques no botão de aumentar fonte
    let increaseClicks = 0;
    // Limite máximo de cliques para aumentar fonte
    let maxIncreaseClicks = 3;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        if (increaseClicks < maxIncreaseClicks) {
            fontSize += increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
            increaseClicks++;
        }
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        if (increaseClicks > 0) {
            fontSize -= increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
            increaseClicks--;
        }
    });
}



function darkMode() {
    var textosId = ['titulo', 'titulo_atencaoRiscos', 'titulo_conteudo1', 'titulo_conteudo2', 
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
    var textosId = ['titulo', 'titulo_atencaoRiscos', 'titulo_conteudo1', 'titulo_conteudo2', 
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