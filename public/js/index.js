'use strict';

var libraryValidateCard = function(window, document) {
  return {
    desactiveButton: function desactiveButton(idButton) {
      document.getElementById('btn-validate').setAttribute('disabled', true);
    },
    activeButton: function activeButton(idButton) {
      document.getElementById('btn-validate').setAttribute('disabled', false);
    },
    lenghtCard: function lenghtCard(valInput) {
      if (valInput.toString().length === 16) return true;else return false;
    },
    onlyNumbers: function onlyNumbers(valInput) {
      var onlyNum = /^[0-9]+$/;
      if (onlyNum.test(valInput)) return true;else return false;
    },
    onlyText: function onlyText(valName) {
      // let onlyLetters = /^([A-ZÁÉÍÓÚ]{0}[a-zñáéíóú]+[\s]*)+$/;
      var onlyLetters = /^([A-ZÁÉÍÓÚ]+[\s]*)+$/;
      if (onlyLetters.test(valName)) return true;else return false;
    },
    isValidCreditCard: function isValidCreditCard(numberCard) {
      if (libraryValidateCard.lenghtCard(numberCard) && libraryValidateCard.onlyNumbers(numberCard)) {
        var reverseNumberCard = numberCard.toString().split('');
        reverseNumberCard.reverse();
        var adder = 0;

        for (var i = 0; i < parseInt(reverseNumberCard.length); i++) {
          if ((i + 1) % 2 === 0) {
            if (reverseNumberCard[i] * 2 > 9) reverseNumberCard[i] = reverseNumberCard[i] * 2 % 10 + 1;else reverseNumberCard[i] = reverseNumberCard[i] * 2;
          }
          adder += parseInt(reverseNumberCard[i]);
        }
        return adder % 10 === 0 ? true : false;
      } else {
        return false;
        // alert('Verifique el número de tarjeta ingresado');
      }
    },
    validateCodeVerification: function validateCodeVerification(codeCvv) {
      if (codeCvv.toString().length === 3 && libraryValidateCard.onlyNumbers(codeCvv)) {
        return true;
      } else return false;
    },
    validateName: function validateName(name) {
      if (libraryValidateCard.onlyText(name)) return true;else return false;
    },
    dateFormat: function dateFormat(date) {
      var format = /^\d{1,2}\/\d{2,4}$/;
      if (!validformat.test(input.value)) {
        alert('Invalid Date Format. Please correct and submit again.');
      } else {
        return true;
      }
    },
    existDate: function existDate(date) {
      var datef = date.split('/');
      var month = datef[1];
      var year = datef[2];
      var newDate = new Date(year, month, '0');
      if (day - 0 > newDate.getDate() - 0) {
        return false;
      }
      return true;
    },
    expireDate: function expireDate(date) {
      if (libraryValidateCard.dateFormat(date)) {
        if (libraryValidateCard.existDate(date)) {
          libraryValidateCard.activeButton();
        } else {
          alert('La fecha introducida no existe.');
        }
      } else {
        alert('El formato de la fecha es incorrecto.');
      }
    },
    getValue: function getValue(nCard, cvv, name) {
      libraryValidateCard.isValidCreditCard(nCard);
      // libraryValidateCard.expireDate(date);
      libraryValidateCard.validateCodeVerification(cvv);
      libraryValidateCard.validateName(name);
      alert('Su tarjeta es válida');
    }
  };
}(window, document);
