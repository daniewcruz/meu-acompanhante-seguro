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



/// leitor de texto por voz///

let estaLendo = false;
let partesTexto = []; // Array para armazenar os objetos SpeechSynthesisUtterance
let indiceParteAtual = 0; // Índice da parte atual sendo lida
let pausadoEmParte = null; // Armazena o utterance onde a leitura foi pausada

// Seleciona o botão de leitura e a imagem
const botaoLer = document.getElementById('BotaoAudio');
const imgAudio = document.getElementById('imagemAudio');

// Função para inicializar a leitura do texto completo
function iniciarLeitura() {
    // Limpa o array de partesTexto apenas se não estiver vazio
    if (partesTexto.length > 0) {
        partesTexto = [];
    }

    // Obtém o texto do parágrafo
    const texto = document.getElementById('texto').textContent.trim();

    // Divide o texto em partes (por exemplo, por parágrafos)
    const partes = texto.split('\n').filter(part => part.trim() !== '');

    // Cria um objeto SpeechSynthesisUtterance para cada parte
    partes.forEach(part => {
        const parteTexto = new SpeechSynthesisUtterance(part);
        partesTexto.push(parteTexto);

        // Configurações adicionais do objeto parteTexto, se necessário
        parteTexto.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'pt-BR');
        
        // Evento para quando a leitura termina
        parteTexto.onend = () => {
            // Marca o índice da parte que foi lida completamente
            indiceParteAtual++;
            // Se ainda houver partes para ler, inicia a próxima parte
            if (indiceParteAtual < partesTexto.length) {
                iniciarProximaParte();
            } else {
                // Se todas as partes foram lidas, redefine as variáveis
                indiceParteAtual = 0;
                estaLendo = false;
                imgAudio.src = 'assets/images/icon_audio.png';
            }
        };

        // Evento para lidar com erros na leitura
        parteTexto.onerror = (event) => {
            console.error('Erro na síntese de fala:', event.error);
            estaLendo = false;
            imgAudio.src = 'assets/images/icon_audio.png';
        };
    });

    // Inicia a primeira parte da leitura
    iniciarProximaParte();
}

// Função para iniciar a próxima parte da leitura
function iniciarProximaParte() {
    if (indiceParteAtual < partesTexto.length) {
        const parteTexto = partesTexto[indiceParteAtual];
        // Se foi pausado anteriormente, retoma a partir do parteTexto onde foi pausado
        if (pausadoEmParte === parteTexto) {
            speechSynthesis.resume();
        } else {
            speechSynthesis.speak(parteTexto);
        }
        imgAudio.src = 'assets/images/icon_audio_stop.png'; // Imagem de parar leitura
        estaLendo = true;
    }
}

// Evento de clique no botão de leitura
botaoLer.addEventListener('click', () => {
    if (estaLendo) {
        // Pausa a leitura se já estiver lendo
        speechSynthesis.pause();
        pausadoEmParte = partesTexto[indiceParteAtual]; // Armazena o parteTexto onde a leitura foi pausada
        imgAudio.src = 'assets/images/icon_audio.png';
        estaLendo = false;
    } else {
        // Se a leitura estiver pausada, retoma a partir da parte atual
        if (indiceParteAtual < partesTexto.length) {
            speechSynthesis.resume();
            imgAudio.src = 'assets/images/icon_audio_stop.png'; // Imagem de parar leitura
            estaLendo = true;
        } else {
            // Inicia a leitura completa se não estiver lendo nada
            iniciarLeitura();
        }
    }
});

// Evento para lidar com o encerramento da página ou aplicação
window.addEventListener('beforeunload', () => {
    // Cancela a leitura ao sair da página ou aplicação
    speechSynthesis.cancel();
});
