// Capturamos todos los elementos para luego poder trabajar con ellos.
const inputTextArea = document.getElementById('inputText');
const cifrado = document.getElementById('outputText');
const encriptar = document.getElementById('encryptBtn');
const desencriptar = document.getElementById('decryptBtn');
const remision = document.getElementById('remitBtn');


function validarTexto(texto) {
    // Verifica si el texto contiene solo letras minúsculas sin acentos
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}





// Evento para encriptar y mostrar cifrado el mensaje del cliente.
encriptar.addEventListener('click', function() {
    // Obtenemos el texto ingresado por el cliente y le quitamos los espacios.
        let texto = inputTextArea.value.trim();
    // Validamos que el texto solo contenga letras minúsculas sin acentos.
    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return; // Detener la ejecución si el texto no es válido
    }    
    // Encriuptamos el texto.
        let encryptedText = encriptado(texto);
    // Mostrar texto encriptado en el outputText
        cifrado.textContent = encryptedText;
    // Limpiamos el textarea de entrada.
        inputTextArea.value = '';
});

// Evento para remitir el texto encriptado al area de descifrado.
remision.addEventListener('click', function() {
    // Capturamos el mensaje encriptado presenten en el output.
        let mensajeEncriptado = outputText.textContent;
        console.log(mensajeEncriptado); // Consologear sirve para controlar por consola.
    // Copiar el texto en el textarea de entrada
        inputTextArea.value = mensajeEncriptado;
    // Limpiar el outputText
    outputText.textContent = 'Ningún mensaje fue encontrado';
});

// Evento para desencriptar el texto proveniente del outPut.
desencriptar.addEventListener('click', function() {
    // Caputamos el mensaje encriptado ya presente en el textArea.    
        let desencriptar = inputTextArea.value;
        console.log(desencriptar); // Consologear sirve para controlar por consola.
    // Función de desencriptación 
        let finalMessage = desencriptado(desencriptar);
    // Mostramos el texto desencriptado en el outputText
        cifrado.textContent = finalMessage;
    // Limpiamos el textarea de entrada
        inputTextArea.value = " "; 
    // Mostramos una alerta de felicitaciones.
        alert("Felicidades has desencriptado el texto, observa en el cuadro de texto de la izquierda como quedó.")       
    });



// Funciones que por el Hoisting se pueden declarar en este lugar.

// Función de encriptación. 

const encriptado = (texto) =>{
    let encoded = btoa(encodeURIComponent(texto));
    return encoded;
}
// Función de desencriptación.

const desencriptado = (texto) => {
    let decoded = decodeURIComponent(atob(texto));
    return decoded;
};









