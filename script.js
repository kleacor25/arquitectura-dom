//para utilizar escuhador de eventos, necesitamos: el tipo de evento, elemento que recibirá este evento y la accion que pasará cuando el evento sea disparado (formulario)

const btn = document.querySelector("[data-form-btn]");

// funciones anonimas
const createTask = (evento)=>{
      evento.preventDefault();
     const input = document.querySelector('[data-form-input]');   console.log(input.value); 
}
console.log(btn);


//creacion de elementos listener -escucha
 btn.addEventListener('click', createTask ); 

    /*envio de datos del objeto-evento
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');   //elemento del contenido

    console.log(input.value); //propiedad .value reconocer lo que contiene*/

