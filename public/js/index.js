'use strict';

var libraryValidateCard = function (window, document) {
  return {
    desactiveButton: function desactiveButton() {
      console.log('Boton que desactiva');
    },
    lenghtCard: function lenghtCard(valInput) {
      if (valInput.length === 16) {
        console.log('longitud: ' + valInput);
      }
    },
    onlyNumbers: function onlyNumbers(valInput) {
      var onlyNum = /^[0-9]+$/;
      if (onlyNum.test(valInput)) {
        return valInput;
      }
    },
    isValidCreditCard: function isValidCreditCard(numberCard) {
      var onlyNumbersCard = libraryValidateCard.onlyNumbers(libraryValidateCard.lenghtCard(numberCard));
      if (onlyNumbersCard !== undefined) {
        var reverseNumberCard = numberCard.toString().split('');
        reverseNumberCard.reverse();
        var adder = 0;

        for (var i = 0; i < parseInt(reverseNumberCard.length); i++) {
          if ((i + 1) % 2 === 0) {
            if (reverseNumberCard[i] * 2 > 9) reverseNumberCard[i] = reverseNumberCard[i] * 2 % 10 + 1;else reverseNumberCard[i] = reverseNumberCard[i] * 2;
          }
          adder += parseInt(reverseNumberCard[i]);
        }
        return adder % 10 === 0 ? console.log('tarjeta valida') : alert('Número de tarjeta no válida');
      } else {
        libraryValidateCard.desactiveButton();
      }
    }
  };
}(window, document);

console.log(libraryValidateCard.lenghtCard(5367865093344606));
console.log(libraryValidateCard.isValidCreditCard(5367865093344606));