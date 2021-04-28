let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
const calendar = document.getElementById('calendar');
const weekdays = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const backDrop = document.getElementById('newEventModal');
const eventTitleInput = document.getElementById('eventTitleInput');
const eventDescriptionInput= document.getElementById('eventDescriptionInput');
const radio = document.getElementById('radio');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');

function openModal(date) {
  clicked = date;

  const eventForhora = events.find(e => e.date === clicked);
  console.log(eventForhora);

  if (eventForhora) {
   document.getElementById('eventText').innerText ="Nombre: " + eventForhora.title;
   document.getElementById('eventDescription').innerText ="Descripción: " + eventForhora.description;
   document.getElementById('eventMetodology').innerText ="Metodología: " + eventForhora.metodology;
   deleteEventModal.style.display ='block';
  } else {
    newEventModal.style.display = 'block';
  }
  //backDrop.style.display = 'block';
} 

function load() {
    const dt = new Date();
    const dayofmonth=new Date(dt.getFullYear, dt.getMonth + 1, 0).getDate();

    const day = dt.getDate();
    //const month = dt.getMonth();
    const year = dt.getFullYear();
    const dayofweek = dt.getDay();
    

    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('es-co', { month: 'long' })} ${year}` ;
    
    calendar.innerHTML = '';
    
    for (let j = 0; j < 7; j++) { 
      const daySquare = document.createElement('div');
      daySquare.classList.add('days');
     if (j <= dayofweek) {
      daySquare.innerText = day -(dayofweek - j);
     }
     if (j > dayofweek) {
      if (day + 1 > dayofmonth) {
        daySquare.innerText ='';
      } else {
      daySquare.innerText = day + j - 2;
      } 
    }
     calendar.appendChild(daySquare);

    }
    for (let i = 0; i < 168; i++) {
      const eventofHorus = events.find(e => e.date === i);
      const horaSquare = document.createElement('div');
      horaSquare.classList.add('day');

      if (eventofHorus) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventofHorus.title;
        horaSquare.appendChild(eventDiv);
      }
      horaSquare.addEventListener('click', () => openModal(i));
     calendar.appendChild(horaSquare);
  }
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');
    events.push({
      date: clicked,
      title: eventTitleInput.value,
      description: eventDescriptionInput.value,
      metodology: radio.elements["pomodoro-eissenhower-posec"].value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  eventDescriptionInput.value='';
  clicked = null;
  load();
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  load();
   document.getElementById('saveButton').addEventListener('click', saveEvent);
   document.getElementById('cancelButton').addEventListener('click', closeModal);
	 document.getElementById('deleteButton').addEventListener('click', deleteEvent);
   document.getElementById('closeButton').addEventListener('click', closeModal);
  }

initButtons();
load();