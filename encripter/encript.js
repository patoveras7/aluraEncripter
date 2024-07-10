// Capturamos todos los elementos para luego poder trabajar con ellos.
const inputTextArea = document.getElementById('inputText');
const cifrado = document.getElementById('outputText');
const encriptar = document.getElementById('encryptBtn');
const desencriptar = document.getElementById('decryptBtn');
const remision = document.getElementById('remitBtn');

// Evento para encriptar y mostrar cifrado el mensaje del cliente.
encriptar.addEventListener('click', function() {
    // Obtenemos el texto ingresado por el cliente y le quitamos los espacios.
        let texto = inputTextArea.value.trim();
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
    // Mostrar texto desencriptado en el textarea de entrada
        inputTextArea.value = finalMessage; 
    // Mostramos una alerta de felicitaciones.
        alert("Felicidades has desencriptado el texto, observa en el cuadro de texto de la izquierda como quedó.")       
    });



// Funciones que por el Hoisting se pueden declarar en este lugar.

// Función de encriptación. 

const encriptado = (texto) =>{
    return texto.split('').reverse().join('');
}
// Función de desencriptación.

const desencriptado = (texto) => {
     return texto.split('').reverse().join('');
};









// Otras opciones que podrian llegar a funcionar pero que requieren mayor precisión en la logica.
    // const encriptado = (texto) =>{
    //     const auxiliar  = texto.split('').reverse()
    //     auxiliar.splice(auxiliar.length - 1, 0, "&")
    //     auxiliar.splice(auxiliar.length - 3, 0, "%")
    //     auxiliar.splice(auxiliar.length - 5, 0, "$")
    //     auxiliar.splice(1, 0, "$!")
    //     auxiliar.splice(2, 0, "$()")
    //     auxiliar.splice(3, 0, "[¨´")
    //     return auxiliar.join('');
    //     }

    // const desencriptado = (textoEncriptado) => {
    //     // Convertir el texto encriptado de nuevo a un array
    //     let auxiliar = textoEncriptado.split('');
    
    //     // Deshacer los pasos de encriptación en orden inverso
    //     auxiliar.splice(3, 1); // Deshacer el paso de auxiliar.splice(3, 0, "[¨´")
    //     auxiliar.splice(2, 1); // Deshacer el paso de auxiliar.splice(2, 0, "$()")
    //     auxiliar.splice(1, 1); // Deshacer el paso de auxiliar.splice(1, 0, "$!")
    //     auxiliar.splice(auxiliar.length - 5, 1); // Deshacer el paso de auxiliar.splice(auxiliar.length - 5, 0, "$")
    //     auxiliar.splice(auxiliar.length - 3, 1); // Deshacer el paso de auxiliar.splice(auxiliar.length - 3, 0, "%")
    //     auxiliar.splice(auxiliar.length - 1, 1); // Deshacer el paso de auxiliar.splice(auxiliar.length - 1, 0, "&")
    
    //     // Revertir el array de texto encriptado
    //     auxiliar.reverse();
    
    //     // Unir el array revertido en un texto desencriptado
    //     return auxiliar.join('');
    // }
