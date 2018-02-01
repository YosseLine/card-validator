# Validador de datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_
* **Integrantes:** _Yosseline Apcho Huaman, Tahirih Jaliri Pancca._

***

## Objetivo:

- Construir una librería (library) que facilite la validación de tarjetas de crédito.

***

## Archivos principales icluídos en el repositorio:

* README.md

* index.js: Aquí se ubicará la funcionalidad de la librería.

* index.html: Archivo html que explica el uso de la librería.

* example.html: Página web demo.

* package.json.

* .eslintrc.

* .gitignore: para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).

***

## Sobre la librería:

- Deberá recibir referencias a un elemento del DOM que contenga `<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito.
* `cvv` (Card Verification Value): Código de validación de 3 dígitos.
* `exp` (Expiry Date): Fecha de expiración.
* `name`: Nombre completo como aparece en la tarjeta.

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <button type="button" name="button">Validar</button>
</form>
```

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});
```

## Algoritmo de Luhn:

La construcción de la librería se basa en el algoritmo de Luhn, este algoritmo es una fórmula de suma de verificación, utilizada para validar una diversidad de números de identificación; como números de tarjetas de crédito, números IMEI, etc.
El Algoritmo Luhn se basa en el concepto de módulo 10, pero lo modifica para darle robustez. La idea se basa en hacer una suma ponderada multiplicando dígitos adyacentes por constantes distintas (en este caso 1 o 2) para detectar el intercambio de éstos. Los pasos son los siguientes:

  1. Se multiplican los dígitos impares por 2.
  2. Si del producto resultan dos dígitos, sus cifras se suman para obtener un único término.
  3. Se suman todos los términos pares e impares.
  La secuencia será correcta si la suma es un múltiplo de 10, es decir, su resto es cero.

***

## Proceso (PLANIFICACIÓN):

### Día 1:

**MIÉRCOLES: 24/01/2017**

- Se formó el equipo, conformado por:
  Yosseline Apcho Huaman
  Tahirih Jaliri Pancca

### Día 2:

**JUEVES: 25/01/2017**

- Se seleccionó el reto:
  Por unanimidad, el reto seleccionado fue: 'Validación de tarjetas de crédito'.

### Día 3:

**VIERNES: 26/01/2017**

- Se realizó la repartición equitativa del proyecto. Acordando que ambas integrantes indagarián más sobre las herramientas nuevas que iban a usar.

### Día 4:

**SÁBADO: 27/01/2017**

- Se realizó el fork del repositorio modelo.

- Se realizó una 'lluvia de ideas' para el proyecto.

- Se procedió a iniciar el proyecto, creando una estructura básica de carpetas, junto con la primera versión de README.

### Día 5:

**DOMINGO: 28/01/2017**

- Se continuaron con las mejoras del README, se crearon y/o modificaron nuevos archivos necesarios.

### Día 6:

**LUNES: 29/01/2017**

- Se comenzó a dar funcionalidad a la librería.

### Día 7:

**MARTES: 30/01/2017**

- Se continuó con la aplicación de la librería y el maquetado del archivo example.html

### Día 8:

**MIÉRCOLES: 31/01/2017**

- Se dieron los últimos detalles al proyecto.

***

## Milestone:

![Milestone](public/assets/docs/milestone.png)

***

## Snippets:

```
libraryValidateCard.isValidCreditCard // (888888888888)
libraryValidateCard.validateCodeVerification // (345)
libraryValidateCard.validateName // ('Juan Sanchez Rodriguez Trigoso')
libraryValidateCard.expireDate // ('03/18')

```

***

## Herramientas utilizadas:

- EC6.

- HTML5.

- CSS3.

- Materialize.

- jQuery.

- Babel.

- Node.js
