function checarUsuario(){
    let usuario = document.querySelector("#usuario").value;
    
    let senha = document.querySelector("#senha").value;
    
    if (usuario.trim() === "" ){
        console.log("deu ruim");        
    }
    else{
        console.log("deu bom");        
    }

    if(senha.length < 6){
        console.log("deu ruim");        
    }
    else{
        console.log("deu bom");
        
    }
}

document.querySelector("#checarSenha").onclick = checarUsuario;


function checarValor(){
    let valor = document.querySelector("#valor").value

    if(valor.isNan()){
        console.log("deu ruim");
        
    }
}

document.querySelector("#checarValor").onclick = checarValor;