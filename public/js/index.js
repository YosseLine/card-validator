'use strict';

var libraryValidateCard = function (window, document) {
  return {
    desactiveButton: function desactiveButton() {
      console.log('Boton que desactiva');
    },
    lenghtCard: function lenghtCard(valInput) {
      if (valInput.toString().length === 16) {
        return true;
      } else {
        return false;
      }
    },
    onlyNumbers: function onlyNumbers(valInput) {
      var onlyNum = /^[0-9]+$/;
      if (onlyNum.test(valInput)) {
        return true;
      } else {
        return false;
      }
    },
    isValidCreditCard: function isValidCreditCard(numberCard) {
      var onlyNumbersCard = libraryValidateCard.onlyNumbers(libraryValidateCard.lenghtCard(numberCard));

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
        return adder % 10 === 0 ? console.log('tarjeta valida') : console.log('Número de tarjeta no válida');
      } else {
        console.log('error de validacion de tarjeta');
      }
    }
  };
}(window, document);

libraryValidateCard.isValidCreditCard(5367865093344606); // tarjeta válida
libraryValidateCard.isValidCreditCard(5367865093344636); // tarjeta no válida
libraryValidateCard.isValidCreditCard('536786509334em06'); // tarjeta no válida que contiene letras

