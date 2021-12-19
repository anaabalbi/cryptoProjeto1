function codificar(mensagem, passo) {
  var alfMaiusculo = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  var alfMinusculo = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var codigo = '';
  var index = 0;
  for (i = 0; i < mensagem.length; i++) {
    for (j = 0; j < alfMaiusculo.length; j++) {
      if (mensagem[i] === alfMaiusculo[j]) {
        index = alfMaiusculo[j].charCodeAt() + passo;
        if (index > 90) {
          var novoIndex = index - 90 + 64;
          codigo = codigo + String.fromCharCode(novoIndex);
        } else {
          codigo = codigo + String.fromCharCode(index);
        }
      } else if (mensagem[i].charCodeAt() === 32) {
        codigo = codigo + String.fromCharCode(32);
      } else {
        codigo = codigo;
      }
    }
  }
  for (i = 0; i < mensagem.length; i++) {
    for (j = 0; j < alfMinusculo.length; j++) {
      if (mensagem[i] === alfMinusculo[j]) {
        console.log(mensagem[i]);
        index = alfMinusculo[j].charCodeAt() + passo;
        if (index > 122) {
          var novoIndex = index - 122 + 96;
          codigo = codigo + String.fromCharCode(novoIndex);
        } else {
          codigo = codigo + String.fromCharCode(index);
        }
      } else if (mensagem[i].charCodeAt() === 32) {
        codigo = codigo + String.fromCharCode(32);
      } else {
        codigo = codigo;
      }
    }
  }
  console.log(codigo);
  return codigo;
}

function decodificar(mensagem, passo) {
  var codigo = '';
  var index = 0;
  for (i = 0; i < mensagem.length; i++) {
    for (j = 65; j < 91; j++) {
      if (mensagem[i].charCodeAt() === j) {
        index = j - passo;
        if (index < 0) {
          for (k = 0; index < 65; k++) {
            index = index + 65;
          }
        } else if (index > 90) {
          var novoIndex = index - 90 + 65;
          codigo = codigo + String.fromCharCode(novoIndex);
        } else if (index < 65) {
          var novoIndex = index + 26;
          codigo = codigo + String.fromCharCode(novoIndex);
        } else {
          codigo = codigo + String.fromCharCode(index);
        }
      } else if (mensagem[i].charCodeAt() === 32) {
        codigo = codigo + String.fromCharCode(32);
      } else {
        codigo = codigo;
      }
    }
  }
  var codigo = '';
  var index = 0;
  for (i = 0; i < mensagem.length; i++) {
    for (j = 97; j < 122; j++) {
      if (mensagem[i].charCodeAt() === j) {
        index = j - passo;
        if (index < 0) {
          for (k = 0; index < 97; k++) {
            index = index + 97;
          }
        } else if (index > 122) {
          var novoIndex = index - 122 + 97;
          codigo = codigo + String.fromCharCode(novoIndex);
        } else if (index < 97) {
          var novoIndex = index + 26;
          codigo = codigo + String.fromCharCode(novoIndex);
        } else {
          codigo = codigo + String.fromCharCode(index);
        }
      } else if (mensagem[i].charCodeAt() === 32) {
        codigo = codigo + String.fromCharCode(32);
      } else {
        codigo = codigo;
      }
    }
  }
  console.log(codigo);
  return codigo;
}

var radio = document.querySelectorAll('.radio');
var botao = document.querySelector('.butao');

botao.addEventListener('click', function (e) {
  e.preventDefault();
  var areadeTexto = document.querySelector('.codigo');
  var passo = document.querySelector('.passo');
  var radio = document.querySelectorAll('.radio');
  var mensagem = document.querySelector('.mensagem');
  var select = document.querySelector('.modo').value;
  if (radio[0].checked && select == 'césar') {
    areadeTexto.innerHTML = codificar(mensagem.value, parseInt(passo.value));
  } else if (radio[1].checked && select == 'césar') {
    areadeTexto.innerHTML = decodificar(mensagem.value, parseInt(passo.value));
  } else if (radio[0].checked && select == 'base64') {
    areadeTexto.innerHTML = btoa(mensagem.value);
  } else if (radio[1].checked && select == 'base64') {
    areadeTexto.innerHTML = atob(mensagem.value);
  }
});

radio[0].addEventListener('click', function () {
  if (radio[0].checked) {
    botao.innerText = 'codificar';
  }
});

radio[1].addEventListener('click', function () {
  if (radio[1].checked) {
    botao.innerText = 'decodificar';
  }
});

transicao = document.addEventListener('click', function () {
  var select = document.querySelector('.modo').value;
  var passo = document.querySelector('.passo');
  if (select == 'base64') {
    passo.style.display = 'none';
  } else {
    passo.style.display = 'block';
  }
});
