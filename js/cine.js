// boton validar
var validar = document.getElementById('btn-validar');
validar.addEventListener("click", revisar);


function revisar() {
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let msj;

  if (edad >= 18) {
    msj = nombre + " tienes " + edad + " años y puedes entrar sin problema. ¡Entra!";


  } else if (edad < 18 && edad >= 12) {
    if (document.getElementById('rd-si').checked) {
      msj = nombre + " tienes " + edad + " años, eres menor de edad pero vienes acompañado así que entra.";
    }
    else {
      msj = nombre + " tienes " + edad + " años, eres menor de edad, tienes que venir acompañado para entrar.";
    }

  } else {
    msj = nombre + " tienes " + edad + " años, no tienes a edad suficiente para entrar.";
  }
  document.getElementById('resultado').innerHTML = msj;
}
