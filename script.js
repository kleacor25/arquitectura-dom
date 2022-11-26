
    
//CREACION DE MODULOS
//usando el export e import de archivos.js al archivo principal
//para utilizar escuChador de eventos, necesitamos: el tipo de evento, elemento que recibirá este evento y la accion que pasará cuando el evento sea disparado (formulario)


import checkComplete from "./Components/checkComplete.js";
import deleteIcon from "./Components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

// funciones anonimas
const createTask = (evento)=>{
      evento.preventDefault();
     const input = document.querySelector('[data-form-input]');
      const value =  input.value;
      const list = document.querySelector("[data-list]");
     const task = document.createElement("li");      //creando elemento li para agregar las tareas
    
     //agregando la clase de forma dinamica para conservar el estilo
     task.classList.add('card');
     input.value ="";

   

     const taskContent = document.createElement("div");

     const titleTask = document.createElement("span");

     titleTask.classList.add('task');
     titleTask.innerText =value;

     //objeto padre
    taskContent.appendChild(checkComplete());

    taskContent.appendChild(titleTask); //agregando elemento hijo
    
  //usando templeate strings para actualizar la cardlist pos0

   //agregando elemento
   //task.innerHTML = content; //asignamos el cod. html
     task.appendChild(taskContent);

   //agregando elemento hijo
   task.appendChild(deleteIcon());
   list.appendChild(task);
  
}


//creacion de elementos listener -escucha
 btn.addEventListener('click', createTask ); 

    /*envio de datos del objeto-evento
    evento.preventDefault();*/





