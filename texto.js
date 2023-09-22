function mostrarTextoGradualmente() {
  var textElement = document.getElementById('text');
  var textToType = 'Gracias por permitirme entrar a tu hogar y a tu vida TKM ❤️                           Tambien a Ruffo🐶!!';
  let index = 0;

  function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 150); // Ajusta la velocidad de escritura aquí
    }
}

typeText();

//Esperar despues de un tiempo para que empieze

}
setTimeout(mostrarTextoGradualmente, 10000);