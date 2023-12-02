var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

  //adicionando o paciente na tabela
var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);

  form.reset();

});
function obtemPacienteDoFormulario(form) {
    var paciente = 
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    imc: calculaImc(form.peso.value, form.altura.value);
    
    return paciente;
}
    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
    
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

return td;
}