var pelear = document.getElementById('btn-pelear');
pelear.addEventListener('click', batalla);

function batalla() {
  var nRound = document.getElementById('txt-round');
  var tGoku = document.getElementById('txt-goku');
  var tSuperman = document.getElementById('txt-superman');
  var res = document.getElementById('res');

  let vidaGoku = 100;
  let vidaSuperman = 100;
  const MIN_POWER = 5;
  const MAX_POWER = 12;
  const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
  let round = 0;


  while (vidaGoku > 0 && vidaSuperman > 0) {
    round++
    nRound.innerHTML = `Round final ${round}`;
    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();
    if (golpeGoku > golpeSuperman) {
      // ataca Goku
      console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
      vidaSuperman -= golpeGoku;
      // console.log(`Superman queda en ${vidaSuperman} de vida`);

    } else {
      // ataca Superman
      console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
      vidaGoku -= golpeSuperman;
      // console.log(`Goku queda en ${vidaGoku} de vida`);

    }
  }
  if (vidaGoku > 0) {
    // console.log(`Goku ganó a pelea. Su vida es de: ${vidaGoku}`);
    res.innerHTML = `Goku ganó a pelea. Su vida es de: ${vidaGoku}`;
  } else {
    // console.log(`Superman ganó a pelea. Su vida es de: ${vidaSuperman}`);
    res.innerHTML = `Superman ganó la pelea. Su vida es de: ${vidaSuperman}`;
  }
  tGoku.innerHTML = `Final ${vidaGoku}`;
  tSuperman.innerHTML = `Final ${vidaSuperman}`;
}
