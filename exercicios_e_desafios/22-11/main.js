'use strict';

document.getElementById('nome').addEventListener('keyup', geraLogin)

document.getElementById('sobrenome').addEventListener('keyup', geraLogin)

function geraLogin () {
  document.getElementById('login').value = document.getElementById('nome').value.toLowerCase() + '.' + document.getElementById('sobrenome').value.toLowerCase()
}

document.getElementById('formulario').addEventListener('submit', function (evento) {
  evento.preventDefault();
  enviarDado('nome');
  enviarDado('sobrenome');
  enviarDado('email');
  enviarDado('login');
  enviarDado('senha');
  enviarDado('cep');
  enviarDado('endereco');
  enviarDado('complemento');
  enviarDado('bairro');
  enviarDado('cidade');
  enviarDado('estado');
  enviarDado('github');
  enviarDado('academia');
  enviarDado('professor');
  enviarDado('termos');
  enviarDado('info');
  document.getElementById('tabela-dados').classList.remove('d-none');
  alert('As informações foram salvas');
  document.getElementById('formulario').reset();
})

function enviarDado(campo) {
  if(campo == 'info') {
    document.getElementById('t-' + campo).innerText = document.forms.formulario.elements.info.value;
  } else {
    document.getElementById('t-' + campo).innerText = document.getElementById(campo).value;
  }
}

const pesquisarCep = async () => {
  const cep = document.getElementById('cep').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  
  /* FETCH SEM AWAIT */
  // fetch(url)
  // .then(resposta => resposta.json())
  // .then(function (retorno) {
  //   console.log(retorno.bairro);
  // });

  const retornoUrl = await fetch(url);
  const endereco = await retornoUrl.json();
  if (endereco.erro) {
    document.getElementById('cep-erro').classList.remove('d-none');
  } else {
    document.getElementById('cep-erro').classList.add('d-none');
    preencherInputs(endereco);
  }
}

function preencherInputs(endereco) {
  document.getElementById('endereco').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('estado').value = endereco.uf;
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);