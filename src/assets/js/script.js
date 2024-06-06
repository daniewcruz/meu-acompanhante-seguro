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