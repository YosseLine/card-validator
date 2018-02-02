'use strict';

window.addEventListener('load', function () {
  var form = document.querySelector('form');
  var btnValidate = document.getElementById('btn-validate');
  var nameValue = document.getElementById('name');
  var cardNumberValue = document.getElementById('cn');
  var numberCvv = document.getElementById('cv');
  var dateValue = document.getElementById('exp');

  btnValidate.addEventListener('click', function () {
    if (data[1].name === nameValue.value && data[1].num_card === cardNumberValue.value && data[1].valid_code === numberCvv.value && data[1].expir_date === dateValue.value) {
      libraryValidateCard.getValue(cardNumberValue.value, numberCvv.value, nameValue.value);
      nameValue.value = '';
      cardNumberValue.value = '';
      numberCvv.value = '';
      dateValue.value = '';
    } else {
      alert('Oh no! Tarjeta inválida');
    }
  });
});