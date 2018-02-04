window.addEventListener('load', () =>{
  const form = document.querySelector('form');
  let btnValidate = document.getElementById('btn-validate');
  let nameValue = document.getElementById('name');
  let cardNumberValue = document.getElementById('cn');
  let numberCvv = document.getElementById('cv');
  let dateValue = document.getElementById('exp');

  cardNumberValue.addEventListener('keyup', () => {
    if (cardNumberValue.value.toString().length >= 15 && cardNumberValue.value.toString().length <= 16) {
      if (!libraryValidateCard.isValidCreditCard(cardNumberValue.value))
        msgAlert(cardNumberValue, true);
      else
        msgAlert(cardNumberValue, false);
    } else if (cardNumberValue.value.toString().length > 16) {
      cardNumberValue.value = cardNumberValue.value.substring(0, 16);
    } 
  });

  nameValue.addEventListener('keyup', () => {
    nameValue.value = nameValue.value.toUpperCase();
    if (!libraryValidateCard.validateName(nameValue.value)) 
      msgAlert(nameValue, true);
    else
      msgAlert(nameValue, false);
  });

  numberCvv.addEventListener('keyup', () => {
    if (numberCvv.value.toString().length >= 3 && numberCvv.value.toString().length <= 4) {
      if (!libraryValidateCard.validateCodeVerification(numberCvv.value, cardNumberValue.value))
        msgAlert(numberCvv, true);
      else
        msgAlert(numberCvv, false);
    } else if (numberCvv.value.toString().length > 4) {
      numberCvv.value = numberCvv.value.substring(0, 4);
    } 
  });


  btnValidate.addEventListener('click', () =>{
    let flag = false;
    if (libraryValidateCard.getValue(cardNumberValue.value, numberCvv.value, nameValue.value)) {
      // let tarjetasMatch = data.filter(data => data.name.toUpperCase() === nameValue.value && data.num_card === cardNumberValue.value && data.valid_code === numberCvv.value);
      // if (tarjetasMatch.length > 1) flag = true;
      for (let i in data) {
        if ((data[i].name.toUpperCase() === nameValue.value) && (data[i].num_card === cardNumberValue.value) && (data[i].valid_code === numberCvv.value)) {
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
  if (option)
    target.parentElement.lastElementChild.style.display = 'block';
  else
    target.parentElement.lastElementChild.style.display = 'none';
}


