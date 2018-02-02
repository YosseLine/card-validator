'use strict';

var libraryValidateCard = function (window, document) {
  return {
    desactiveButton: function desactiveButton(idButton) {
      document.getElementById(idButton).setAttribute('disabled', true);
    },
    activeButton: function activeButton(idButton) {
      document.getElementById(idButton).setAttribute('disabled', false);
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
      if (onlyNum.test(valInput)) return true;else return false;
    },
    onlyText: function onlyText(valName) {
      var onlyLetters = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
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
        return adder % 10 === 0 ? true : console.log('Número de tarjeta no válida');
      } else {
        console.log('error de validacion de tarjeta');
      }
    },
    validateCodeVerification: function validateCodeVerification(codeCvv) {
      if (libraryValidateCard.isValidCreditCard(numCard) && codeCvv.toString().length === 3 && libraryValidateCard.onlyNumbers(codeCvv)) {
        return true;
      } else console.log('incorrecto');
    },
    validateName: function validateName(name) {
      if (libraryValidateCard.validateCodeVerification(numCvv)) {
        libraryValidateCard.onlyText(name);
        return true;
      }
    },
    dateFormat: function dateFormat(date) {
      var format = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if (date.match(format) && date !== '') {
        return true;
      } else {
        return false;
      }
    },
    existDate: function existDate(date) {
      var datef = date.split('/');
      var day = datef[0];
      var month = datef[1];
      var year = datef[2];
      var newDate = new Date(year, month, '0');
      if (day - 0 > newDate.getDate() - 0) {
        return false;
      }
      return true;
    },
    expireDate: function expireDate(date) {
      if (libraryValidateCard.validateName(nameUser) && libraryValidateCard.dateFormat(dateCard)) {
        if (libraryValidateCard.existDate(dateCard)) {
          alert('La fecha introducida es correcta.');
        } else {
          alert('La fecha introducida no existe.');
        }
      } else {
        alert('El formato de la fecha es incorrecto.');
      }
    }
  };
}(window, document);
var numCard = 5157183686604830; // pasamos este numero de tarjeta valido a la funcion en la linea 47
var numCvv = 123;
var nameUser = 'Margarita Flores';
var dateCard = '13/09/2020';
libraryValidateCard.isValidCreditCard(numCard); // tarjeta válida 
// libraryValidateCard.isValidCreditCard(5367865093344636); // tarjeta no válida
// libraryValidateCard.isValidCreditCard('536786509334em06'); // tarjeta no válida que contiene letras
libraryValidateCard.validateCodeVerification(numCvv); // valida solo numero
// libraryValidateCard.validateCodeVerification('1a3'); // en caso de poner una letra es incorrecto

libraryValidateCard.validateName(nameUser);
libraryValidateCard.expireDate(dateCard);