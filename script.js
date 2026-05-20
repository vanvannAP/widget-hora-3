function actualizarHora() {
  const ahora = new Date();

  // Hora en formato 12h con AM/PM
  let horas = ahora.getHours();
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  const ampm = horas >= 12 ? 'PM' : 'AM';

  horas = horas % 12;
  horas = horas ? horas : 12; // convierte 0 en 12

  document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos} ${ampm}`;

  // Día de la semana, mes y año
  const diasSemana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const meses = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  const diaSemana = diasSemana[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const año = ahora.getFullYear();

  document.getElementById('fecha').textContent = `${diaSemana} ${mes} ${dia}, ${año}`;
}

// Actualiza cada segundo
setInterval(actualizarHora, 1000);
actualizarHora();