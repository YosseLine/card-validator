'use strict';

window.addEventListener('load', function () {
  var form = document.querySelector('form');
  var btnValidate = document.getElementById('btn-validate');
  var nameValue = document.getElementById('name');
  var cardNumberValue = document.getElementById('cn');
  var numberCvv = document.getElementById('cv');
  var dateValue = document.getElementById('exp');

  cardNumberValue.addEventListener('keyup', function () {
    // limitamos los input a 15 o 16 digitos
    if (cardNumberValue.value.toString().length >= 15 && cardNumberValue.value.toString().length <= 16) {
      if (!libraryValidateCard.isValidCreditCard(cardNumberValue.value))
        // en caso de ser diferente muestra un span, solicitando sean datos correctos
        msgAlert(cardNumberValue, true);else msgAlert(cardNumberValue, false);
    } else if (cardNumberValue.value.toString().length > 16) {
      cardNumberValue.value = cardNumberValue.value.substring(0, 16);
    }
  });

  dateValue.addEventListener('keyup', function () {
    if (!libraryValidateCard.expireDate(dateValue.value)) msgAlert(dateValue, true);else msgAlert(dateValue, false);
  });

  nameValue.addEventListener('keyup', function () {
    nameValue.value = nameValue.value.toUpperCase();
    if (!libraryValidateCard.validateName(nameValue.value)) msgAlert(nameValue, true);else msgAlert(nameValue, false);
  });

  numberCvv.addEventListener('keyup', function () {
    if (numberCvv.value.toString().length >= 3 && numberCvv.value.toString().length <= 4) {
      if (!libraryValidateCard.validateCodeVerification(numberCvv.value, cardNumberValue.value)) msgAlert(numberCvv, true);else msgAlert(numberCvv, false);
    } else if (numberCvv.value.toString().length > 4) {
      numberCvv.value = numberCvv.value.substring(0, 4);
    }
  });

  btnValidate.addEventListener('click', function () {
    var flag = false;
    if (libraryValidateCard.getValue(cardNumberValue.value, dateValue.value, numberCvv.value, nameValue.value)) {
      // let tarjetasMatch = data.filter(data => data.name.toUpperCase() === nameValue.value && data.num_card === cardNumberValue.value && data.valid_code === numberCvv.value);
      // if (tarjetasMatch.length > 1) flag = true;
      for (var i in data) {
        if (data[i].name.toUpperCase() === nameValue.value && data[i].expir_date === dateValue.value && data[i].num_card === cardNumberValue.value && data[i].valid_code === numberCvv.value) {
          flag = true;
          nameValue.value = '';
          cardNumberValue.value = '';
          numberCvv.value = '';
          dateValue.value = '';
        }
      }
    }
    if (flag === true) {
      alert('Tarjeta válida');
    } else {
      alert('Oh no! Tarjeta inválida');
    }
  });
});

function msgAlert(target, option) {
  if (option) target.parentElement.lastElementChild.style.display = 'block';else target.parentElement.lastElementChild.style.display = 'none';
}