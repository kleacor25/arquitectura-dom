//para utilizar escuhador de eventos, necesitamos: el tipo de evento, elemento que recibirá este evento y la accion que pasará cuando el evento sea disparado (formulario)

const btn = document.querySelector("[data-form-btn]");

// funciones anonimas
const createTask = (evento)=>{
      evento.preventDefault();
     const input = document.querySelector('[data-form-input]');
      const value =  input.value;
      input.value ="";

      //creando elemento li para agregar las tareas
     const task = document.createElement("li");
    
     //agregando la clase de forma dinamica para conservar el estilo
     task.classList.add('card');

     //objeto padre
     const list = document.querySelector("[data-list]");

     const content = ` <div>
     <i class="far fa-check-square icon"></i>
     <span class="task">${value}</span>
   </div>
   <i class="fas fa-trash-alt trashIcon icon"></i>`; //usando templeate strings para actualizar la cardlist pos0

   //agregando elemento
   task.innerHTML = content; //asignamos el cod. html

   //agregando elemento hijo
   list.appendChild(task);
     console.log(content); 
}
console.log(btn);


//creacion de elementos listener -escucha
 btn.addEventListener('click', createTask ); 

    /*envio de datos del objeto-evento
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');   //elemento del contenido

    console.log(input.value); //propiedad .value reconocer lo que contiene*/

