let libraryValidateCard = ((window, document) => {
  return {
    lenghtCard: (valInput) => {
      if (valInput.toString().length >= 15 && valInput.toString().length <= 16) 
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
      }
    },
    validateCodeVerification: (codeCvv, numberCard) => {
      if ((codeCvv.toString().length === 3) && libraryValidateCard.onlyNumbers(codeCvv) && numberCard.length === 16) {
        return true;  
      } else if ((codeCvv.toString().length === 4) && libraryValidateCard.onlyNumbers(codeCvv) && numberCard.length === 15) {
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
        return false;
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
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    getValue: (nCard, cvv, name) => {
      libraryValidateCard.isValidCreditCard(nCard);
      // libraryValidateCard.expireDate(date);
      libraryValidateCard.validateCodeVerification(cvv, nCard);
      libraryValidateCard.validateName(name);
      return true;
    }
  };
})(window, document);

