function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = (valorEmDolarNumerico * 5.06).toFixed(2);
    console.log(valorEmReal);
  
    var valorEmEuros = valorEmDolarNumerico * 0.91;
    console.log(valorEmEuros);
  
    var valorEmIenes = valorEmDolarNumerico * 118.79;
    console.log(valorEmIenes);
  
    var valorEmLibra = valorEmDolarNumerico * 0.76;
    console.log(valorEmLibra);
  
    var valorEmBitcoin = valorEmDolarNumerico * 0.000024;
    console.log(valorEmBitcoin);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em Reais é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var elementoValorConvertido = document.getElementById("valorConvertido2");
    var valorConvertido = "O valor em Euros é € " + valorEmEuros;
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var elementoValorConvertido = document.getElementById("valorConvertido3");
    var valorConvertido = "O valor em Ienes é ¥ " + valorEmIenes;
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var elementoValorConvertido = document.getElementById("valorConvertido4");
    var valorConvertido = "O valor em Libra esterlina é £ " + valorEmLibra;
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var elementoValorConvertido = document.getElementById("valorConvertido5");
    var valorConvertido = "O valor em Bitcoin é ₿ " + valorEmBitcoin;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  