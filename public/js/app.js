'use strict';

window.addEventListener('load', function () {
  var form = document.querySelector('form');
  var btnValidate = document.getElementById('btn-validate');

  var validateName = false;
  var validateCode = false;
  var validateDate = false;
  var validateCard = false;

  // Creamos la función validate
  function validate(event) {
    // Llamamos a todos los input existentes
    var inputsForm = document.querySelectorAll('input');
    // Recorremos la lista de nodos
    for (var i in inputsForm) {
      console.log(inputsForm[i].name);
      // Codicionamos para capturar el input que tenga el id name
      if (inputsForm[i].name === 'name') {
        // Recorremos la data json
        for (var j in data) {
          // Comparamos si el value del input con id name es igual a la propiedad 'name'
          if (inputsForm[i].value === data[j]['name']) {
            validateName = true;
            break;
          } else {
            // Aquí se agregaría la modficación para que el input tenga un border rojo, como símbolo de error
            inputsForm[i].value = '';
            break;
          }
        };
      } else if (inputsForm[i].name === 'exp') {
        for (var _j in data) {
          if (inputsForm[i].value === data[_j]['expir_date']) {
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
        for (var _j2 in data) {
          if (inputsForm[i].value === data[_j2]['valid_code']) {
            validateCode = true;
            console.log('Código idéntico');
            break;
          }
        }
      }
    }
    form.addEventListener('submit', validate, false);
  }

  btnValidate.addEventListener('click', function () {
    if (validate(form)) {
      alert('TARJETA Y DATOS VÁLIDOS!');
    } else {
      alert('Oh no! Tarjeta inválida');
    }
  });
});