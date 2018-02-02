window.addEventListener('load', () =>{
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
      let inputs = inputsForm[i];
      console.log(inputs.name);
      // Codicionamos para capturar el input que tenga el atributo name
      if (inputs.name === 'cn') {
        let inputsCn = inputs.value;
        console.log(inputsCn);
        // Recorremos la data json
        for (let j in json) {
          // Comparamos si el value del input con atributo name es igual a la propiedad 'cn'.
          if (inputsCn === json[j]['num_card'] && libraryValidateCard.isValidCreditCard(inputsCn)) {
            console.log(libraryValidateCard.isValidCreditCard(inputsCn));
            validateName = true;
            break;
          } else {
            // Aquí se agregaría la modficación para que el input tenga un border rojo, como símbolo de error
            inputsCn.value = '';
            break;
          }
        };
      } else if (inputs.name === 'exp') {
        let inputsExp = inputs.value;
        for (let j in json) {
          if (inputs.value === json[j]['expir_date'] && libraryValidateCard.expireDate(inputsExp)) {
            validateDate = true;
            console.log('Fecha idéntica');
            break;
          } else {
            // Aquí se agregaría la modficación para que el input tenga un border rojo, como símbolo de error
            inputsExp.value = '';
            break;
          }
        }
      } else if(inputs.name === 'name') {
        let inputsName = inputs.value;
        for (let j in json) {
          if (inputs.value === json[i]['name'] && libraryValidateCard.validateName(inputsName)) {
            validateName = true;
            break;
          } else {
            // Aquí se agregaría la modficación para que el input tenga un border rojo, como símbolo de error
            inputsName.value = '';
            break;
          }
        }
      } else if (inputs.name === 'cv') {
        let inputsCv = inputs.value;
        for (let j in json) {
          if (inputs.value === json[j]['valid_code'] && libraryValidateCard.validateCodeVerification(inputsCv)) {
            validateCode = true;
            console.log('Código idéntico');
            break;
          } else {
            // Aquí se agregaría la modficación para que el input tenga un border rojo, como símbolo de error
            inputsCv.value = '';
            break;
          }
        }
      }
    }
    form.addEventListener('submit', validate, false);
  }

  function desactiveButton() {
    if (validate()) {
      btnValidate.setAttribute('disabled', false);
    } else {
      btnValidate.setAttribute('disabled', 'disabled');
    }
  }
  desactiveButton();

  btnValidate.addEventListener('click', () =>{
    if (validateCard && validateDate && validateCode && validateName) {
      console.log(validateCard);
      console.log(validateDate);
      console.log(validateCode);
      console.log(validateName);
      alert('TARJETA Y DATOS VÁLIDOS!');
    } else {
      alert('Oh no! Tarjeta inválida');
    }
  });
});
