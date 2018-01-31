window.addEventListener('load', () =>{
  const form = document.querySelector('form');
  let btnValidate = document.getElementById('btn-validate');

  // Creamos la función validate
  function validate(event) {
    // Llamamos a todos los input existentes
    let inputsForm = document.querySelectorAll('input');
    // Recorremos la lista de nodos
    for (let i in inputsForm) {
      console.log(inputsForm[i].name);
      // Codicionamos para capturar el input que tenga el id name
      if (inputsForm[i].name === 'name') {
        // Recorremos la data json
        for (let j in json) {
          // Comparamos si el value del input con id name es igual a la propiedad 'name'
          if (inputsForm[i].value === json[j]['name']) {
            break;
          } else {
            // Aquí se agregaría la modficación para que el input tenga un border rojo, como símbolo de error
            inputsForm[i].value = '';
            break;
          }
        };
      } else if (inputsForm[i].name === 'exp') {
        for (let j in json) {
          if (inputsForm[i].value === json[j]['expir_date']) {
            console.log('Fecha idéntica');
            break;
          } else {
            // Aquí se agregaría la modficación para que el input tenga un border rojo, como símbolo de error
            class wrong {
              constructor(color) {
                this.color = red;
              }
            }
            break;
          }
        }
      }
    }
    form.addEventListener('submit', validate, false);
  }

  btnValidate.addEventListener('click', () =>{
    validate(form);
  });
});
