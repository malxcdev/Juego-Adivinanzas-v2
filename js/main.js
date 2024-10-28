document.addEventListener("DOMContentLoaded", () => {
  // declaración de variables

  const btnAdivinar = document.getElementById("btnAdivinar");
  const btnReiniciar = document.getElementById("btnReiniciar");

  const textMensaje = document.getElementById("textMensaje");
  const textIntentos = document.getElementById("textIntentos");

  const inputNumero = document.getElementById("inputNumero");

  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  let intentos = 0;
  //funciones

  btnAdivinar.addEventListener("click", () => {
    numeroUsuario = parseInt(inputNumero.value);
    console.log(numeroAleatorio);
    if (!numeroUsuario) {
      textMensaje.innerText = "Ingrese un Número Valido";
    } else if (numeroUsuario < numeroAleatorio) {
      intentos++;
      textMensaje.innerText = "El Número es Mayor";
      textIntentos.innerText = `Intentos: ${intentos}`;
    } else if (numeroUsuario > numeroAleatorio) {
        intentos++;
      textMensaje.innerText = "El Número es Menor";
      textIntentos.innerText = `Intentos: ${intentos}`;
    } else {
       intentos++;
      textMensaje.innerText = "Ganaste";
      textIntentos.innerText = `Intentos: ${intentos}`;
      inputNumero.value = ''
      btnAdivinar.disabled=true
      intentos = 0
    }
  });

  btnReiniciar.addEventListener("click", ()=>{
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    inputNumero.value = ''
    btnAdivinar.disabled=false
    textIntentos.innerText = `Intentos: 0`;
    textMensaje.innerText = "Iniciamos Nuevamente, Suerte!";
  })
});
