'use strict';

var libraryValidateCard = function (window, document) {
  return {
    lenghtCard: function lenghtCard(valInput) {
      // valida la longitud de la tarjeta de credito que sea 15 o 16
      if (valInput.toString().length >= 15 && valInput.toString().length <= 16) return true;else return false;
    },
    onlyNumbers: function onlyNumbers(valInput) {
      var onlyNum = /^[0-9]+$/;
      if (onlyNum.test(valInput)) // todo los .test evalua expresiones regulares
        return true;else return false;
    },
    onlyText: function onlyText(valName) {
      var onlyLetters = /^([A-ZÁÉÍÓÚ]+[\s]*)+$/;
      if (onlyLetters.test(valName)) return true;else return false;
    },
    isValidCreditCard: function isValidCreditCard(numberCard) {
      if (libraryValidateCard.lenghtCard(numberCard) && libraryValidateCard.onlyNumbers(numberCard)) {
        // comprueba que solo sean numero y la longitud
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
      }
    },
    validateCodeVerification: function validateCodeVerification(codeCvv, numberCard) {
      // valida codigo cvc según la cantidad de digitos de la tarjeta, amex tiene 15 digitos y 4 de verificacion
      if (codeCvv.toString().length === 3 && libraryValidateCard.onlyNumbers(codeCvv) && numberCard.length === 16) {
        return true;
      } else if (codeCvv.toString().length === 4 && libraryValidateCard.onlyNumbers(codeCvv) && numberCard.length === 15) {
        return true;
      } else return false;
    },
    validateName: function validateName(name) {
      if (libraryValidateCard.onlyText(name)) return true;else return false;
    },
    dateFormat: function dateFormat(date) {
      var RegExPattern = /^\d{1,2}\/\d{2}$/;
      if (date.match(RegExPattern) && date !== '') {
        return true;
      } else {
        return false;
      }
    },
    existDate: function existDate(dateV) {
      var fechaf = dateV.split('/');
      var month = fechaf[1];
      var year = fechaf[2];
      var date = new Date(year, month, '0');
      if (date.getDate() - 0) {
        return false;
      }
      return true;
    },
    expireDate: function expireDate(date) {
      if (libraryValidateCard.dateFormat(date) && libraryValidateCard.existDate(date)) return true;else return false;
    },
    getValue: function getValue(nCard, date, cvv, name) {
      libraryValidateCard.isValidCreditCard(nCard);
      libraryValidateCard.expireDate(date);
      libraryValidateCard.validateCodeVerification(cvv, nCard);
      libraryValidateCard.validateName(name);
      return true;
    }
  };
}(window, document);