window.addEventListener('load', () =>{
  const form = document.querySelector('form');
  let btnValidate = document.getElementById('btn-validate');
  let nameValue = document.getElementById('name');
  let cardNumberValue = document.getElementById('cn');
  let numberCvv = document.getElementById('cv');
  let dateValue = document.getElementById('exp'); 

  cardNumberValue.addEventListener('keyup', () => {
    console.log(libraryValidateCard.isValidCreditCard(cardNumberValue.value));
    if (libraryValidateCard.isValidCreditCard(cardNumberValue.value))
      $('#btn-validate').attr('disabled',false);
    else
      $('#btn-validate').attr('disabled', true);
  });

  nameValue.addEventListener('keyup', () => {
    console.log(libraryValidateCard.validateName(nameValue.value));
    if (libraryValidateCard.validateName(nameValue.value))
      $('#btn-validate').prop('disabled', false);
    else
      $('#btn-validate').prop('disabled', true);
  });


  btnValidate.addEventListener('click', () =>{
    if ((data[1].name === nameValue.value) && (data[1].num_card === cardNumberValue.value) && (data[1].valid_code === numberCvv.value) && (data[1].expir_date === dateValue.value)) {
      libraryValidateCard.getValue(cardNumberValue.value, numberCvv.value, nameValue.value);
      nameValue.value = '';
      cardNumberValue.value = '';
      numberCvv.value = '';
      dateValue.value = '';
    } else {
      alert('Oh no! Tarjeta inválida');
    }
  });
});

