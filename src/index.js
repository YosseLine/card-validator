let libraryValidateCard = ((window, document) => {
  return {
    desactiveButton: (idButton) => {
      document.getElementById('btn-validate').setAttribute('disabled', true);
    },
    activeButton: (idButton) => {
      document.getElementById('btn-validate').setAttribute('disabled', false);
    },
    lenghtCard: (valInput) => {
      if ((valInput.toString().length === 16)) 
        return true;
      else
        return false;
    },
    onlyNumbers: (valInput) => {
      let onlyNum = /^[0-9]+$/;
      if ((onlyNum.test(valInput)))
        return true;
      else
        return false;
    },
    onlyText: (valName) => {
      // let onlyLetters = /^([A-ZÁÉÍÓÚ]{0}[a-zñáéíóú]+[\s]*)+$/;
      let onlyLetters = /^([A-ZÁÉÍÓÚ]+[\s]*)+$/;
      if ((onlyLetters.test(valName)))
        return true;
      else
        return false;
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
        return false;
        //alert('Verifique el número de tarjeta ingresado');
      }
    },
    validateCodeVerification: (codeCvv) => {
      if ((codeCvv.toString().length === 3) && libraryValidateCard.onlyNumbers(codeCvv)) {
        return true;  
      } else 
        return false;
    },
    validateName: (name) => {
      if (libraryValidateCard.onlyText(name))
        return true; 
      else 
        return false;
    },
    dateFormat: (date) => {
      let format = /^\d{1,2}\/\d{2,4}$/;
      if (!validformat.test(input.value)) {
        alert('Invalid Date Format. Please correct and submit again.');
      } else {
        return true;
      }
    },
    existDate: (date) => {
      var datef = date.split('/');
      var month = datef[1];
      var year = datef[2];
      var newDate = new Date(year, month, '0');
      if ((day - 0) > (newDate.getDate() - 0)) {
        return false;
      }
      return true;
    },
    expireDate: (date) => {
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
    getValue: (nCard, cvv, name) => {
      libraryValidateCard.isValidCreditCard(nCard);
      // libraryValidateCard.expireDate(date);
      libraryValidateCard.validateCodeVerification(cvv);
      libraryValidateCard.validateName(name);
      alert('Su tarjeta es válida');
    }
  };
})(window, document);