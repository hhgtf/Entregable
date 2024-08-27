let listTask = [];

let taskId = 0;

function saveTask(event) {
  event.preventDefault();  
  let form = event.target;

  const formData = new FormData(form);  
  let task = {};

  // Esto agrega la info del input al objeto task
  formData.forEach((valor, key) => (task[key] = valor));

  // Asignar un identificador único a cada tarea
  task.id = taskId++;

  listTask.push(task);

  form.reset();

  displayTask();
  check();
}



function displayTask() {
  let listTaskElement = document.querySelector(".lista-tarea");

  if (!listTaskElement) {
    console.error("No se encontró el elemento '.lista-tarea'");
    return;
  }

  // Crear el HTML para cada tarea utilizando el id único
  let listaTaskHtml = listTask.map((task) => {
    return `
      <li class="taskPending" id="${task.id}">
        <input type="checkbox" id="checkbox-${task.id}" class="checkbox" name="checkbox">
        <label for="checkbox-${task.id}">${task.tareas}</label>
        <button style="float: right;" class="closeButton">X</button>
      </li>
    `;
  });

  listTaskElement.innerHTML = listaTaskHtml.join("");
  check();
  deleteTask();
}




function check() {
  let checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const li = checkbox.closest('li');
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
        li.style.color = "red"
      } else {
        li.style.textDecoration = "";
        li.style.color = "" 
      }
    });
  });
}

function deleteTask() {
  let buttonClose = document.querySelectorAll(".closeButton");

  buttonClose.forEach(button => {
    button.addEventListener('click', (event) => {
      // Encuentra el elemento li más cercano al botón clicado
      let li = event.target.closest('li');
      let id = parseInt(li.getAttribute('id'), 10); // Convertir el id a número entero
      

      if (!isNaN(id)) {
        // Filtrar la lista de tareas para eliminar la tarea con el id específico
        alert("Seguro que desea borrar la tarea?")
        listTask = listTask.filter(task => task.id !== id);

        // Volver a mostrar la lista de tareas actualizada
        displayTask();
      } else {
        console.error(`ID de tarea no válido: ${id}`);
      }
    });
  });
}
