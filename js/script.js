//alert("Olá, mundo!")
/*console.error("Se você é Front-end irá encontrar-me")*/

let nome = document.querySelector("#nome")
nome.addEventListener('keyup',validarCampos)

function validarCampos(){
    //console.log(nome.value)
    if(nome.value == ""){
        nome.classList.remove("border-success")
        nome.classList.add("border","border-danger")
    }
    else{
        nome.classList.remove("border-danger")
        nome.classList.add("border","border-success")
    }
}
/* INSERIR INDEREÇO EM CAMPO SOMENTE LEITURA*/
let endereco = document.querySelector("#endereco")
let leitura = document.querySelector("input[readonly]")

endereco.addEventListener("keyup",function(){
    leitura.value = endereco.value
})