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
      let RegExPattern = /^\d{1,2}\/\d{2}$/;
      if ((date.match(RegExPattern)) && (date !== '')) {
        return true;
      } else {
        return false;
      }
    },
    existDate: (dateV) => {
      let fechaf = dateV.split('/');
      let month = fechaf[1];
      let year = fechaf[2];
      let date = new Date(year, month, '0');
      if (date.getDate() - 0) {
        return false;
      }
      return true;
    },
    expireDate: (date) => {
      if ((libraryValidateCard.dateFormat(date)) && (libraryValidateCard.existDate(date))) 
        return true;
      else 
        return false;
    },
    getValue: (nCard, date, cvv, name) => {
      libraryValidateCard.isValidCreditCard(nCard);
      libraryValidateCard.expireDate(date);
      libraryValidateCard.validateCodeVerification(cvv, nCard);
      libraryValidateCard.validateName(name);
      return true;
    }
  };
})(window, document);

