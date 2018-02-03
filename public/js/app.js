'use strict';

window.addEventListener('load', function () {
  var form = document.querySelector('form');
  var btnValidate = document.getElementById('btn-validate');
  var nameValue = document.getElementById('name');
  var cardNumberValue = document.getElementById('cn');
  var numberCvv = document.getElementById('cv');
  var dateValue = document.getElementById('exp');

  var activeButton = function activeButton() {
    btnValidate.setAttribute('disabled', false);
  };

  var desactiveButton = function desactiveButton() {
    btnValidate.setAttribute('disabled', true);
  };

  cardNumberValue.addEventListener('keyup', function () {
    if (libraryValidateCard.isValidCreditCard(cardNumberValue.value)) activeButton();else desactiveButton();
  });

  nameValue.addEventListener('keyup', function () {
    nameValue.value = nameValue.value.toUpperCase();
    if (libraryValidateCard.validateName(nameValue.value)) activeButton();else desactiveButton();
  });

  numberCvv.addEventListener('keyup', function () {
    if (libraryValidateCard.validateCodeVerification(numberCvv.value)) activeButton();else desactiveButton();
  });

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