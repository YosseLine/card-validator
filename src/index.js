let libraryValidateCard = ((window, document) => {
  return {
    desactiveButton: (idButton) => {
      document.getElementById('btn-validate').setAttribute('disabled', true);
    },
    activeButton: (idButton) => {
      document.getElementById('btn-validate').setAttribute('disabled', false);
    },
    lenghtCard: (valInput) => {
      (valInput.toString().length === 16) ? true : false;
    },
    onlyNumbers: (valInput) => {
      let onlyNum = /^[0-9]+$/;
      (onlyNum.test(valInput)) ? true : false;
    },
    onlyText: (valName) => {
      let onlyLetters = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
      (onlyLetters.test(valName)) ? true : false;
    },
    isValidCreditCard: (numberCard) => {
      if (libraryValidateCard.lenghtCard(numberCard) && libraryValidateCard.onlyNumbers(numberCard)) {
        let reverseNumberCard = numberCard.toString().split('');
        reverseNumberCard.reverse();
        let adder = 0; 

        for (var i = 0; i < parseInt(reverseNumberCard.length); i++) { 
          if ((i + 1) % 2 === 0) {
            if (reverseNumberCard[i] * 2 > 9)
              reverseNumberCard[i] = (reverseNumberCard[i] * 2) % 10 + 1; 
            else
              reverseNumberCard[i] = reverseNumberCard[i] * 2;
          }
          adder += parseInt(reverseNumberCard[i]);
        }
        return (adder % 10 === 0) ? true : false;
      } else {
        alert('Verifique el número de tarjeta ingresado');
      }
    },
    validateCodeVerification: (codeCvv) => {
      if ((libraryValidateCard.isValidCreditCard(numCard)) && (codeCvv.toString().length === 3) && libraryValidateCard.onlyNumbers(codeCvv)) {
        return true;  
      } else 
        alert('El código CVV ingresado no coincide con el número de tarjeta, vuelva a ingresar');
    },
    validateName: (name) => {
      if (libraryValidateCard.validateCodeVerification(numCvv)) {
        libraryValidateCard.onlyText(name);
        return true; 
      } 
    },
    dateFormat: (date) => {
      let format = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if ((date.match(format)) && (date !== '')) {
        return true;
      } else {
        return false;
      }
    },
    existDate: (date) => {
      var datef = date.split('/');
      var day = datef[0];
      var month = datef[1];
      var year = datef[2];
      var newDate = new Date(year, month, '0');
      if ((day - 0) > (newDate.getDate() - 0)) {
        return false;
      }
      return true;
    },
    expireDate: (date) => {
      if (libraryValidateCard.validateName(nameUser) && libraryValidateCard.dateFormat(dateCard)) {
        if (libraryValidateCard.existDate(dateCard)) {
          libraryValidateCard.activeButton();
        } else {
          alert('La fecha introducida no existe.');
        }
      } else {
        alert('El formato de la fecha es incorrecto.');
      }
    }
  };
})(window, document);



