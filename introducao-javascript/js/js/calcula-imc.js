var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes= document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
 var pesoEhvalido = true;
var alturaEhvalido = true;

if(peso <= 0 || peso >= 1000){
    console.log("peso inválido");
    pesoEhvalido = false;
    tdImc.textContent = "peso inválido"
    paciente.classList.add("paciente-invalido");
    paciente.style.backgroundColor = "blue";
}

if(altura <= 0 || altura >= 3.00 ){
    console.log("altura inválida!");
    alturaEhvalido = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
    paciente.style.backgroundColor = "blue";
   }

if(alturaEhvalido && pesoEhvalido){
    var imc = calculaImc (peso,altura);
    tdImc.textContent = imc;
  }
 }

 function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
 

//


