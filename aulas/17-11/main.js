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