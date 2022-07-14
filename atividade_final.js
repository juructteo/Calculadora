/**
 * Desenvolva uma calculadora web (HTML/CSS) com as seguintes funcionalidades:

* Soma ok
* Subtração ok
* Multiplicação ok
* Divisão ok
* Resto de uma divisão ok
* Raiz quadrada ok
* Potenciação ok
* Seno ok
* Coseno ok
* Pi ok

[ATENÇÃO] A calculadora deve ter um histórico de operações!!!
    Esse histórico deve ficar armazenado em um array de objetos com os seguintes dados:
        Valores
        Operador
        Resultado

A interface é livre, usem a imaginação!



 */
function insert(num){
   var numero = document.getElementById('visor').innerHTML;
   document.getElementById('visor').innerHTML = numero + num
}

function equal(){
    let n = document.getElementById('visor').innerHTML;
    let r = eval(n);
    
    document.getElementById('historico').innerHTML += document.getElementById('visor').innerHTML+ ('=') + r + ('\n') 
    document.getElementById('visor').innerHTML = r;
    
}

function c(){
    document.getElementById('visor').innerHTML = "";
}

function back(){
    var exp = document.getElementById('visor').innerHTML
    document.getElementById('visor').innerHTML = exp.substring(0, exp.length-1);
}

 function pi (){
    var number = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = number + Math.PI
}

 function sqrt() {
   var sqrt = document.getElementById('visor').innerHTML;
   document.getElementById('visor').innerHTML = Math.sqrt(sqrt)
   document.getElementById('historico').innerHTML += ('√') + sqrt + ('=') +document.getElementById('visor').innerHTML +  ('\n')
}

 function sen(){
    var sen = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = Math.sin(sen)
    document.getElementById('historico').innerHTML += ('sen') + sen + ('=') +document.getElementById('visor').innerHTML +  ('\n')
}

 function cos(){
    var cos = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = Math.cos(cos)
    document.getElementById('historico').innerHTML += ('cos') + cos + ('=') +document.getElementById('visor').innerHTML +  ('\n')
}

function myFunction() {
    var x = document.getElementById("historico");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

 