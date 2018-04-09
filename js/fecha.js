var contar = document.getElementById('btn-contar');
contar.addEventListener('click', tiempo);

function tiempo() {
  // 5 de julio de 1994
  const entrada = document.getElementById('nacimiento').value;
  const nacimiento = new Date(entrada);
  const hoy = new Date();
  // const dia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDay());

  const time = hoy - nacimiento;
  const timeSeg = Math.floor(time / 1000);
  const timeMin = Math.floor(timeSeg / 60);
  const timeHor = Math.floor(timeMin / 60);
  const timeDias = Math.floor(timeHor / 24);
  const timeYear = Math.floor(timeDias / 365);
  const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  var res = document.getElementById('res');
  // res.innerHTML = nacimiento  + " ------- " + entrada +"-------------- " + hoy
  res.innerHTML = `Hoy es ${hoy.getDate()} de ${mes[hoy.getMonth()]} del ${hoy.getFullYear()}  y tú naciste el ${nacimiento.getDate()} de ${mes[nacimiento.getMonth()]} del ${nacimiento.getFullYear()}. <br/><br/> Han pasado ${timeYear} años,  ${timeDias} días,  ${timeHor} horas,  ${timeMin} minutos,  ${timeSeg} segundos  y  ${time} milisegundos.`;

}
