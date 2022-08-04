var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.asc')
var resposta = document.getElementById("p1")
var resposta1 = document.getElementById("p2")
var resposta2 = document.getElementById("p3")

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  } else {
    ul.classList.add('open')
  }
}

function validatePassword() {
  if (password.value != "ludmyla13") {
    confirm_password.setCustomValidity("Senha Invalida!");
  } else {
    confirm_password.setCustomValidity('');
    window.location.replace('pagina-02.html');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


function edit() {
  resposta.innerHTML = window.prompt("Escreva o texto");
}

function edit1() {
  resposta1.innerHTML = window.prompt("Escreva o texto");
}

function edit2() {
  resposta2.innerHTML = window.prompt("Escreva o texto");
}