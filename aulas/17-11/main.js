// Exemplo 1
function exibirAlerta() {
    alert("Essa é a mensagem de alerta!")
}

document.getElementById('btn-exemplo-1').onclick = exibirAlerta

// Exemplo 2
document.getElementById('btn-exemplo-2').onclick = function () { document.getElementById('p-exemplo-2').innerHTML = "Texto substituído." }

// Exemplo 3
document.querySelector('#btn-exemplo-3').onclick = function () {
    document.getElementById('exemplo-3').style.display = 'none'
}

// Exemplo 4
document.querySelector('#btn-on').onclick = function () {
    document.querySelector('.lampada').src = './images/lamp-on.png'
}

document.querySelector('#btn-off').onclick = function () {
    document.querySelector('.lampada').src = './images/lamp-off.png'
}

// Exemplo 5
console.log("A área do círculo de raio 3 é " + Math.PI * Math.pow(3,2))

// Exemplo 6
let data = new Date()
let dia = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

document.querySelector('.dia-semana').innerHTML = dia[data.getDay()]

// Exemplo 7
document.getElementById('converter-temperatura').onclick = function () {
    const celsius = document.getElementById('tempCelsius').value
    const farenheit = document.getElementById('tempFarenheit')
    farenheit.value = celsius * 1.8 + 32
}

/*

EXEMPLOS DE JSON E FUNÇÕES

const retornoURL = '{"USDBRL":{"code":"USD","codein":"BRL","name":"Dólar Americano/Real Brasileiro","high":"5.3991","low":"5.2817","varBid":"0.0005","pctChange":"0.01","bid":"5.3586","ask":"5.3596","timestamp":"1669152601","create_date":"2022-11-22 18:30:01"}}'

const moeda = JSON.parse(retornoURL)

//console.log(moeda.USDBRL.bid)

// Função escrita tradicionalmente
function tradicional(dado){
    return dado
}
console.log(tradicional('Função Tradicional'))


// Função escrita no formato anônimo
let anonima = function (dado) {
    return dado
}
console.log(anonima('Função Anônima'))


// Função escrita no formato de seta (Arrow Function)
let seta = dado => dado
console.log(seta('Arrow Function'))

*/

// Exemplo 8
document.getElementById('converter-moeda').onclick = function () {
    const valorReal = document.getElementById('real').value
    const valorDolar = document.getElementById('dolar')
    //converterMoeda(valorReal, valorDolar)
    converterMoedaAsync(valorReal, valorDolar)
}
// Consultando de forma síncrona
function converterMoeda(real, dolar) {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
    fetch(url).then(resposta => resposta.json())
              .then(dados => {
                dolar.value = dados.USDBRL.bid * real
              })
}


// Consultando de forma assíncrona
let converterMoedaAsync = async (real, dolar) => {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
    const resposta = await fetch(url)
    const dados = await resposta.json()
    dolar.value = dados.USDBRL.bid * real
}