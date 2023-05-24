function calcular(tipo, valor, ultimoDigito) {
    var lcdPrincipal = document.getElementById('lcd-principal'),
        lcdResultado = document.getElementById('lcd-resultado');

    if (tipo === 'valor') {
        adicionarValor(lcdPrincipal, valor);

    }
    if (tipo === 'operador') {
        jogarResultado(lcdPrincipal, lcdResultado, valor);
    }

    if (tipo === 'acao') {
        switch (valor) {
            case 'c':
                limparValorPrincipal(lcdPrincipal);
                limparValorResultado(lcdResultado);
                break;
            case '+/-':
                inverterSinal(lcdPrincipal);
                break
            case 'bks':
                backSpace(lcdPrincipal);
                break
            case '=':
                resolverConta(lcdPrincipal, lcdResultado, ultimoDigito);
        }
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

function resolverConta(lcdPrincipal, lcdResultado, ultimoDigito) {
    const resultado = lcdResultado.value + lcdPrincipal.value;
    try {
        const resultadoCalculado = eval(resultado);
        lcdPrincipal.value = resultadoCalculado;
    } catch (error) {
        console.log('Formato Inválido');
    }
    limparValorResultado(lcdResultado);
}

function jogarResultado(lcdPrincipal, lcdResultado, valor) {

    lcdResultado.value += lcdPrincipal.value + valor
    limparValorPrincipal(lcdPrincipal);

}

function limparValorPrincipal(lcdPrincipal) {
    lcdPrincipal.value = ''
}

function limparValorResultado(lcdResultado) {
    lcdResultado.value = ''
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

