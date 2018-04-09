var calcular = document.getElementById('btn-calcular');
calcular.addEventListener("click", area);

function area(b,h) {
  b = document.getElementById('base').value;
  h = document.getElementById('altura').value;
  r = b * h / 2;
  document.getElementById('res').innerHTML = `El área del triangulo de base ${b} cm y altura ${h} cm es: ${r} cm2`;
}
