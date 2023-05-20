function calcular(tipo, valor) {
    var lcdPrincipal = document.getElementById('lcd-principal'),
        lcdResultado = document.getElementById('lcd-resultado'),
        lcdOperador = document.getElementById('lcd-operador');


    if (tipo === 'acao') {
        switch (valor) {
            case 'c':
                limparValores(lcdPrincipal, lcdResultado, lcdOperador);
                break;
            case '%':
                porcentagem();
                break
            case '+/-':
                inverterSinal(lcdPrincipal);
                break
            case 'bks':
                backSpace(lcdPrincipal);
                break
            case '/':
                /* dividir(); */
                jogarResultado(lcdPrincipal, lcdResultado, lcdOperador, valor);
                break
            case 'x':
                /* multiplicar(); */
                jogarResultado(lcdPrincipal, lcdResultado, lcdOperador, valor);
                break;
            case '-':
                /* subtrair(); */
                jogarResultado(lcdPrincipal, lcdResultado, lcdOperador, valor);
                break
            case '+':
                /* somar(); */
                jogarResultado(lcdPrincipal, lcdResultado, lcdOperador, valor);
                break
        }
    }
    if (tipo === 'valor') {
        adicionarValor(lcdPrincipal, valor);
    }
}


function adicionarValor(lcdPrincipal, valor) { // Concatenar o valor ao input

    if (valor == ',' && lcdPrincipal.value.includes(',')) {
        valor = ''
    }
    if (valor == ',' && lcdPrincipal.value === '')
        valor = '0,'
    if (valor == '0' && lcdPrincipal.value == '') {
        valor = ''
    }
    lcdPrincipal.value += valor;

}

function limparValores(...lcdPrincipal) {
    for (const elemento of lcdPrincipal) {
        elemento.value = '';
    }
}
function jogarResultado(lcdPrincipal, lcdResultado, lcdOperador, operador) {
    lcdResultado.value = lcdPrincipal.value;
    if (lcdPrincipal.value !== ""){
        lcdOperador.value = operador;
        lcdPrincipal.value = '';
    }

}

function porcentagem() {
    alert('porcentagem');
}
function inverterSinal(lcdPrincipal) {
    lcdPrincipal.value *= (-1);
    if (lcdPrincipal.value == 0) {
        lcdPrincipal.value = '';
    }
}
function backSpace(lcdPrincipal) {
    lcdPrincipal.value = lcdPrincipal.value.slice(0, -1);
}