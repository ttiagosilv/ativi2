function boaTarde() {
    var nome = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Boa tarde, " + nome;
}

function boaNoite() {
    var nome = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Boa noite, " + nome;
}

function mostrarRandomico() {
    var numero = Math.random() * 10 + 1;
    document.getElementById("resultado").innerHTML = "Número randômico: " + numero.toFixed(2);
}

function mostrarAbsoluto() {
    var numero = prompt("Digite um número para obter o valor absoluto:");
    document.getElementById("resultado").innerHTML = "Valor absoluto: " + Math.abs(numero);
}

function mostrarMaior() {
    var num1 = prompt("Digite o primeiro número:");
    var num2 = prompt("Digite o segundo número:");
    document.getElementById("resultado").innerHTML = "Maior número: " + Math.max(num1, num2);
}

function mostrarArredondado() {
    var numero = prompt("Digite um número real:");
    document.getElementById("resultado").innerHTML = "Número arredondado: " + Math.round(numero);
}

function mostrarPotencia() {
    var base = prompt("Digite a base:");
    var expoente = prompt("Digite o expoente:");
    document.getElementById("resultado").innerHTML = "Resultado da potência: " + Math.pow(base, expoente);
}
function mostrarTamanho() {
    var texto = document.getElementById("texto").value;
    document.getElementById("resultadoTexto").innerHTML = "Tamanho do texto: " + texto.length;
}

function converterMinusculo() {
    var texto = document.getElementById("texto").value;
    document.getElementById("resultadoTexto").innerHTML = "Texto em minúsculo: " + texto.toLowerCase();
}

function substituirLetras() {
    var texto = document.getElementById("texto").value;
    var resultado = texto.replace(/a/g, '@').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0');
    document.getElementById("resultadoTexto").innerHTML = "Texto modificado: " + resultado;
}

function removerEspacos() {
    var texto = document.getElementById("texto").value;
    document.getElementById("resultadoTexto").innerHTML = "Texto sem espaços: " + texto.trim();
}

function exibirNomeCompleto() {
    var nome = document.getElementById("nomeCompleto").value;
    var sobrenome = document.getElementById("sobrenome").value;
    document.getElementById("nomeCompletoResultado").innerHTML = nome + " " + sobrenome;
}

function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var soma = num1 + num2;
    var diferenca = num1 - num2;
    document.getElementById("resultadoCalc").innerHTML = "Soma: " + soma + "<br>Diferença: " + diferenca;
}

function limparCaixa() {
    document.getElementById("caixaLimpar").value = "";
}

function copiarTexto() {
    var texto = document.getElementById("caixa1").value;
    document.getElementById("caixa2").value = texto;
}
