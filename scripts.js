const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

//form.addEventListener('submit', sumarInputValues);

//function sumarInputValues(event){
   //console.log(event); //Con este console.log() vemos en la consola el evento y sus propiedades.
   //event.preventDefault(); //Al llamar preventDefault() esta propiedad mno se ejecuta y por lo tanto no se recarga la página automaticamente y cambiar la URL una vez oprimido el botón submit o botón enviar.
   //const sumaInputs = input1.value + input2.value;
  // pResult.innerText = "Resultado: " + sumaInputs;
//}

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
   //console.log(event);
   //event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
}