// conversor romano p arabico


function romanoParaArabico(numeralRomano) {
  const numerosRomanos = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  let resultado = 0;

  for (let i = 0; i < numeralRomano.length; i++) {
    const simboloAtual = numeralRomano[i];
    const valorAtual = numerosRomanos[simboloAtual];
    const proximoSimbolo = numeralRomano[i + 1];
    const valorProximo = numerosRomanos[proximoSimbolo];

    if (valorProximo && valorProximo > valorAtual) {
      resultado += valorProximo - valorAtual;
      i++;
    } else {
      resultado += valorAtual;
    }
  }

  return resultado;
}
//converso arabico p romando
function arabicoParaRomano(numeroArabico) {
  if (numeroArabico < 1 || numeroArabico > 3999) {
    return 'Forneça um número entre 1 e 3999';
  }

  const numerosArabicos = [
    { valor: 1000, numeral: 'M' },
    { valor: 900, numeral: 'CM' },
    { valor: 500, numeral: 'D' },
    { valor: 400, numeral: 'CD' },
    { valor: 100, numeral: 'C' },
    { valor: 90, numeral: 'XC' },
    { valor: 50, numeral: 'L' },
    { valor: 40, numeral: 'XL' },
    { valor: 10, numeral: 'X' },
    { valor: 9, numeral: 'IX' },
    { valor: 5, numeral: 'V' },
    { valor: 4, numeral: 'IV' },
    { valor: 1, numeral: 'I' }
  ];

  let resultado = '';

  for (let i = 0; i < numerosArabicos.length; i++) {
    const numeralAtual = numerosArabicos[i];

    while (numeroArabico >= numeralAtual.valor) {
      resultado += numeralAtual.numeral;
      numeroArabico -= numeralAtual.valor;
    }
  }

  return resultado;
}
// limitação do conversor entre 1 e 3999 
function converter() {
  const inputValue = document.getElementById('inputValue').value.toUpperCase();
  const numero = parseInt(inputValue, 10);
  let resultado;

  if (!isNaN(numero)) {
    if (numero >= 1 && numero <= 3999) {
      resultado = arabicoParaRomano(numero);
    } else {
      resultado = 'Forneça um número entre 1 e 3999';
    }
  } else {
    resultado = romanoParaArabico(inputValue);
  }

  document.getElementById('resultBox').textContent = resultado;
}
//  conversor caractere romano entrada sempre em caixa alta (agora xc ou XC é lido igual)
document.getElementById('inputValue').addEventListener('input', function(event) {
  event.target.value = event.target.value.toUpperCase();
});
