const listTask = [];

function saveTask(event) {
  event.preventDefault();  
  let form = event.target;

  const formData = new FormData(form);  
  let task = {};


  //Esto agrega la info del input al objeto task
  //la key es el "name" en html
  formData.forEach((valor, key) => (task[key] = valor));

  listTask.push(task);

  form.reset();

  displayTask();
  check()
  
}


function displayTask() {
 
  let listTaskElement = document.querySelector(".lista-tarea");

  if (!listTaskElement) {
    console.error("No se encontro el elemento ´.lista-tarea´");
    return;
  }

  let listaTaskHtml = listTask.map((task, index) => {
    let idUnique = index
    
    return `
         
            
                <li class="taskPending"><input type="checkbox" id ="${idUnique}"class="checkbox" name="checkbox">
                <label for="${idUnique}">${task.tareas}</label>
                <button class="closeButton"></button>
                </li> `;
  });


listTaskElement.innerHTML = listaTaskHtml.join("")

}



function check() {
  // Selecciona todos los checkboxes con la clase 'checkbox'
  let checkboxes = document.querySelectorAll(".checkbox");

  // Itera sobre cada checkbox y añade un event listener
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Encuentra el <li> contenedor del checkbox
      const li = checkbox.closest('li');

      // Cambia el color del <li> si el checkbox está marcado
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
        li.style.color = "red"
      } else {
        li.style.textDecoration = "";
        li.style.color = "" // Elimina el color para volver al estilo original
      }
    });
  });
}



/*function campoVacio(){
  let button = document.querySelector("#button")
  let input = document.querySelector("#tareas")

  button.addEventListener('click',()=>{
if(input.value.length == 0 ){
  alert("Campo vacio")
}

  })
}
  */