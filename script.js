var visor = document.getElementsByClassName("visor")[0];
var todosBotoes = document.getElementsByTagName("a");
var expressao;
var sinal;

function tratamentoDosNumeros(numeroAtual) {
  if (visor.innerHTML === "0") {
    todosBotoes[0].innerHTML = "C";
    visor.innerHTML = numeroAtual;
  } else if (visor.innerHTML.length === 20) {
    return;
  } else if (visor.innerHTML != "0") {
    visor.innerHTML = visor.innerHTML + numeroAtual;
    if (visor.innerHTML.length === 9) {
      visor.classList.add("numero-menor");
    } else if (visor.innerHTML.length === 16) {
      visor.classList.add("numero-menor-dois");
    }
  }
}

function tratamentoDosSimbolos(simbolo) {
  switch (simbolo) {
    case "C":
      visor.innerHTML = "0";
      todosBotoes[0].innerHTML = "AC";
      visor.classList.remove("numero-menor");
      visor.classList.remove("numero-menor-dois");
      break;

    case "+/-":
      if (visor.innerHTML.includes("-")) {
        visor.innerHTML = visor.innerHTML.replace("-", "");
      } else {
        visor.innerHTML = "-" + visor.innerHTML;
      }
      break;

    case "%":
      let valor = visor.innerHTML / 100;
      if (String(valor).length >= 17) {
        alert(`O valor é muito extenso. O valor é ${valor}`);
        visor.innerHTML = "0";
      } else if (String(valor).length > 16 && String(valor).length < 20) {
        visor.classList.add("numero-menor-dois");
        visor.innerHTML = valor;
      } else if (String(valor).length > 9 && String(valor).length < 16) {
        visor.classList.add("numero-menor");
        visor.innerHTML = valor;
      }
      break;

    case "÷":
      if (sinal == undefined) {
        sinal = "/";
        expressao = Number(visor.innerHTML);
        visor.innerHTML = "0";
        visor.classList.remove("numero-menor", "numero-menor-dois");
      } else return alert("Apenas um calculo por vez.");
      break;

    case "X":
      if (sinal == undefined) {
        sinal = "x";
        expressao = Number(visor.innerHTML);
        visor.innerHTML = "0";
        visor.classList.remove("numero-menor", "numero-menor-dois");
      } else return alert("Apenas um calculo por vez.");
      break;

    case "-":
      if (sinal == undefined) {
        sinal = "-";
        expressao = Number(visor.innerHTML);
        visor.innerHTML = "0";
        visor.classList.remove("numero-menor", "numero-menor-dois");
      } else return alert("Apenas um calculo por vez.");
      break;

    case "+":
      if (sinal == undefined) {
        sinal = "+";
        expressao = Number(visor.innerHTML);
        visor.innerHTML = "0";
        visor.classList.remove("numero-menor", "numero-menor-dois");
      } else return alert("Apenas um calculo por vez.");
      break;

    case "=":
      if (sinal === "/") {
        visor.innerHTML = expressao / Number(visor.innerHTML);
        visor.classList.remove("numero-menor", "numero-menor-dois");
        sinal = undefined;
        expressao = undefined;
        if (visor.innerHTML.length > 15) {
          alert(`O valor final é ${visor.innerHTML}`);
          visor.innerHTML = "0";
        }
      } else if (sinal === "x") {
        visor.innerHTML = expressao * Number(visor.innerHTML);
        visor.classList.remove("numero-menor", "numero-menor-dois");
        sinal = undefined;
        expressao = undefined;
        if (visor.innerHTML.length > 15) {
          alert(`O valor final é ${visor.innerHTML}`);
          visor.innerHTML = "0";
        }
      } else if (sinal === "-") {
        visor.innerHTML = expressao - Number(visor.innerHTML);
        visor.classList.remove("numero-menor", "numero-menor-dois");
        sinal = undefined;
        expressao = undefined;
        if (visor.innerHTML.length > 15) {
          alert(`O valor final é ${visor.innerHTML}`);
          visor.innerHTML = "0";
        }
      } else if (sinal === "+") {
        visor.innerHTML = expressao + Number(visor.innerHTML);
        visor.classList.remove("numero-menor", "numero-menor-dois");
        sinal = undefined;
        expressao = undefined;
        if (visor.innerHTML.length > 15) {
          alert(`O valor final é ${visor.innerHTML}`);
          visor.innerHTML = "0";
        }
      } else return;
      break;

    case ",":
      if (visor.innerHTML.includes(".")) {
        return;
      } else {
        visor.innerHTML = visor.innerHTML + ".";
      }
      break;

    default:
      break;
  }
}

for (let botao of todosBotoes) {
  botao.addEventListener("click", function () {
    let numeroAtual = Number.parseFloat(botao.innerHTML);
    if (isNaN(numeroAtual)) {
      let simbolo = botao.innerHTML;
      tratamentoDosSimbolos(simbolo);
    } else {
      tratamentoDosNumeros(numeroAtual);
    }
  });
}
