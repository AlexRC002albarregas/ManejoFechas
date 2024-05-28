const body = document.getElementsByTagName('body')[0];
const monthsElement = document.getElementById('meses');
const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');

let goalDate = new Date(2024, 4, 31); // Meses del 0 al 11 (enero == 0 y diciembre == 11)
let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  let currentDate = new Date();

  // Verifica si la fecha actual ha superado la fecha objetivo
  if (currentDate >= goalDate) {
    // Mantén el contador en 0 meses, 0 días y 0 horas
    monthsElement.innerHTML = 0;
    daysElement.innerHTML = 0;
    hoursElement.innerHTML = 0;
    clearInterval(countdownInterval);
    body.style.backgroundColor = "red"; // Cambia el color de fondo a rojo si se alcanza la fecha límite
    return;
  }

  let totalSeconds = (goalDate - currentDate) / 1000;

  let months = Math.floor(totalSeconds / 3600 / 24 / 30);
  let days = Math.floor(totalSeconds / 3600 / 24) % 30;
  let hours = Math.floor(totalSeconds / 3600) % 24;

  monthsElement.innerHTML = months;
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;

  // Cambiar el color de fondo según el tiempo restante
  if (months >= 2) {
    body.style.backgroundColor = "green";
  } else if (months >= 1) {
    body.style.backgroundColor = "yellow";
  } else if (days <= 7) {
    body.style.backgroundColor = "red";
  }
}
