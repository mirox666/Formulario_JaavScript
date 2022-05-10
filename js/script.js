//alert("Olá Mundo!")
/*console.error("Se você é front-ender, vai me encontrar!")*/

let nome = document.querySelector("#nome")
nome.addEventListener('keyup',validarCampo)

function validarCampo(){
    //console.log(nome.value)
    if(nome.value == ""){
        nome.classList.remove("border-success")
        nome.classList.add("border", "border-danger")
    }
    else{
        nome.classList.remove("border-danger")
        nome.classList.add("border", "border-success")
    }
}

/* INSERIR ENDEREÇO EM CAMPO SOMENTE LEITURA */
let endereco = document.querySelector("#endereco")
let leitura = document.querySelector("input[readonly]")

endereco.addEventListener("keyup",function(){
    leitura.value = endereco.value
})

/* VALIDAR EMAIL */
let email = document.querySelector("#email")
let msgEmail = document.querySelector("#validaEmail")

// Estou trabalhando com arrow function
email.addEventListener('keyup',()=>{
    let minusculo = email.value.toLowerCase()// Convertendo o texto em minúsculo

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf(".com")==-1 ){
        //console.log("Email Inválido")
        msgEmail.textContent = "Este email é invalido"
        msgEmail.classList.remove("text-success")
        msgEmail.classList.add("text-danger")
    }
    else{
        //console.log("Email Válido")
        msgEmail.textContent = "Este email é valido"
        msgEmail.classList.remove("text-danger")
        msgEmail.classList.add("text-success")
    }
    
})

/*HABILITAR VISUALIZAÇÃO DA SENHA*/

let senha = document.querySelector("#senha")
let iconeOlho = document.querySelector("#senha + span")//ESTOU PEGANDO A TAG SPAN EXATAMENTE APOS A TAG QUE POSSUI UM ID="SENHA"

iconeOlho.addEventListener("click",()=>{
    //console.log(iconeOlho)
    if(iconeOlho.textContent == "visibility"){
        iconeOlho.textContent = "visibility_off"
        senha.setAttribute("type","password")
    }
    else{
        iconeOlho.textContent = "visibility"
        senha.setAttribute("type","text")

    }
})

/*PEGANDO INFORMAÇÕES DO RADIO */
let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("btnEscolaridade")

btnEscolaridade.addEventListener("click",()=>{
    console.log(escolaridade)
})