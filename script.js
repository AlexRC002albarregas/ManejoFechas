const body = document.getElementsByTagName('body')[0];
const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const upcomingImg = document.getElementById('upcoming-img');
const titleElement = document.getElementById('title');
const felicidades = document.getElementById('felicidades');

let currentDate = new Date();
let goalDate = new Date(2024, 4, 31); // Meses del 0 al 11 (enero==0 y diciembre==11)
let days, hours, mins, seconds, totalSeconds;
let countdownInterval = setInterval(countdown, 1000);
determinarEstacion();
countdown();

function countdown() {
  currentDate = new Date();

  // Verifica si la fecha actual ha superado la fecha objetivo
  if (currentDate >= goalDate) {
    // Calcula la fecha de objetivo para el próximo año
    goalDate.setFullYear(goalDate.getFullYear() + 1);
  }

  totalSeconds = (goalDate - currentDate) / 1000;

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  
}

function determinarEstacion() {
  const mesActual = currentDate.getMonth();
  
  if (mesActual >= 3 && mesActual <= 5) {
    body.style.backgroundImage="URL('imagenes/primavera.gif')";
    body.style.color= 'rgb(0, 189, 255)';
  } else if (mesActual >= 6 && mesActual <= 8) {
    body.style.backgroundImage="URL('imagenes/verano.gif')";
    body.style.color= 'rgb(255, 255, 255)';
  } else if (mesActual >= 9 && mesActual <= 11) {
    body.style.backgroundImage="URL('imagenes/otoño.gif')";
    body.style.color= 'rgb(255, 255, 255)';
  } else {
    body.style.backgroundImage="URL('imagenes/nieve.gif')";
    body.style.color= 'rgb(252, 186, 3)';
  }
}

function showBirthday() {
  upcomingImg.classList.remove('nocolor-img');
  const countdownContainer = document.querySelector('.countdown-container');
  body.style.backgroundImage="URL('imagenes/fiesta.jpg')";
  body.style.color= 'rgb(0, 0, 0, 1)';
  countdownContainer.style.display = 'none';
  felicidades.innerText="¡¡¡¡FELICIDADES!!!!";
}

