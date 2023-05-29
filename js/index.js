function encriptar(){
    let texto=document.getElementById("texto").value;
    let titulomensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    

    let textocifrado = texto
                        .replace(/a/gi, "♥")
                        .replace(/e/gi, "♦")
                        .replace(/i/gi, "♣")
                        .replace(/o/gi, "♠")
                        .replace(/u/gi, "◘");

    if (texto.length != 0){
        document.getElementById("texto").value = textocifrado;
        titulomensaje.textContent="Texto encriptado con exito";
        parrafo.textContent="";
    }
    else{
        alert("Debes ingresar algun texto");
    }

}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");   
    
    let textocifrado = texto
    .replace(/♥/gi, "a")
    .replace(/♦/gi, "e")
    .replace(/♣/gi, "i")
    .replace(/♠/gi, "o")
    .replace(/◘/gi, "u");

     if (texto.length != 0) {
      document.getElementById("texto").value = textocifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
    } 
    else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}