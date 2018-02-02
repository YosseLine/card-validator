window.addEventListener('load', () =>{
  console.log(libraryValidateCard.isValidCreditCard(4567483944758468));
  const form = document.querySelector('form');
  let btnValidate = document.getElementById('btn-validate');

  let validateName = false;
  let validateCode = false;
  let validateDate = false;
  let validateCard = false;

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
            validateName = true;
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
            validateDate = true;
            console.log('Fecha idéntica');
            break;
          }
        }
      } else if (inputsForm[i].name === 'cn') {
        // Hacemos uso de la librería
        libraryValidateCard.isValidCreditCard(inputsForm[i].value);
        console.log(libraryValidateCard.isValidCreditCard(inputsForm[i].value));
        validateCard = true;
      } else if (inputsForm[i].name === 'cv') {
        for (let j in json) {
          if (inputsForm[i].value === json[j]['valid_code']) {
            validateCode = true;
            console.log('Código idéntico');
            break;
          }
        }
      }
    }
    form.addEventListener('submit', validate, false);
  }


  btnValidate.addEventListener('click', () =>{
    if (validate(form)) {
      alert('TARJETA Y DATOS VÁLIDOS!');
    } else {
      alert('Oh no! Tarjeta inválida');
    }
  });
});
