window.addEventListener('load', () =>{
  const form = document.querySelector('form');
  let btnValidate = document.getElementById('btn-validate');

  btnValidate.addEventListener('click', () =>{
    if (validate(form)) {
      alert('TARJETA Y DATOS VÁLIDOS!');
    } else {
      alert('Oh no! Tarjeta inválida');
    }
  });
});
